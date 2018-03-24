import { capitalize } from 'lodash';

class Animal {
  params = {
    foodForChild: 3,
    consumedFoodPerDay: 1,
  }

  constructor({ species }) {
    this.species = species;
    this.stats = {
      fed: this.params.foodForChild,
      live: true,
    };
  }

  act = (env) => {
    const actionsList = this.species.act({
      env,
      stats: this.stats,
    });
    actionsList.forEach(action => env.registerIntention(action, this));
  }

  resolveIntention(action, result, env) {
    const methodName = `resolve${capitalize(action)}`;
    if (this[methodName]) {
      this[methodName](result, env);
    }
  }

  resolveMultiply(success) {
    if (success) {
      this.species.addAnimal();
      this.stats.fed = this.stats.fed - this.params.foodForChild;
    }
  }

  resolveEat(success, env) {
    if (success) {
      this.stats.fed = this.stats.fed + env.params.foodPortion;
    }
  }

  canLive() {
    return this.stats.fed > 0;
  }

  startCycle() {
    this.stats.fed -= this.params.consumedFoodPerDay;
  }

  endCycle() {
    this.stats.live = this.canLive();
  }
}

export default Animal;

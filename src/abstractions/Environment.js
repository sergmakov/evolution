import { capitalize } from 'lodash';
import { equiprobableLimited } from '../lib/foodDistribution';

class Environment {
  params = {
    eatChancePerFood: 0.02,
    foodPortion: 2,
  }

  defaultStats = {
    foodAmount: 200,
  }

  updateStats() {
    return {
      ...this.defaultStats,
    };
  }

  tryToEat({ action, candidates }) {
    equiprobableLimited(candidates, {
      ...this.stats,
      ...this.params,
    });
    candidates.forEach(animal => animal.resolveIntention(action, animal.tryToEatResult, this));
  }

  tryToMultiply({ action, candidates }) {
    candidates.forEach(animal => animal.resolveIntention(action, true, this));
  }

  constructor(universe) {
    this.universe = universe;
    this.stats = {
      ...this.defaultStats,
    };
  }

  registerIntention(action, animal) {
    if (this.registeredIntentions[action]) {
      this.registeredIntentions[action].push(animal);
    } else {
      console.err(`Undefined action '${action}'`);
    }
  }

  resolveIntentions() {
    Object.keys(this.registeredIntentions).forEach(action => {
      const methodName = `tryTo${capitalize(action)}`;
      if (!this[methodName]) {
        return;
      }
      this[methodName]({
        action,
        candidates: this.registeredIntentions[action],
      });
    });
  }

  startCycle() {
    this.registeredIntentions = {
      'eat': [],
      'multiply': [],
    };
    const { day } = this.universe;
    this.stats = {
      ...this.stats,
      ...this.updateStats(day),
    };
  }

  endCycle() {

  }
}

export default Environment;

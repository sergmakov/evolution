class Animal {
  constructor({ species }) {
    this.species = species;
    this.stats = {
      fed: false,
      live: true,
    };
  }

  act = (env) => {
    this.species.act({
      env,
      multiply: () => this.tryToMultiply(env),
      eat: () => this.tryToEat(env),
    });
  }

  tryToMultiply(env) {
    this.species.addAnimal();
  }

  tryToEat(env) {
    if (env.getFood(this)) {
      this.stats.fed = true;
    }
  }

  canLive() {
    return this.stats.fed;
  }

  endDay() {
    this.stats.live = this.canLive();
    this.stats.fed = false;
  }
}

export default Animal;

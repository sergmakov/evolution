class Animal {
  constructor({ species }) {
    this.species = species;
    this.stats = {
      fed: false,
      live: true,
    };
  }

  act = (env) => {
    return this.species.act({
      env,
      multiply: () => this.tryToMultiply(env),
      eat: () => this.tryToEat(env),
    });
  }

  tryToMultiply(env) {
    return env.tryToMultiply(this)
      .then(success => {
        if (success) {
          this.species.addAnimal();
        }
      });
  }

  tryToEat(env) {
    return env.tryToEat(this)
      .then(success => {
        if (success) {
          this.stats.fed = true;
        }
      });
  }

  canLive() {
    return this.stats.fed;
  }

  updateStats() {
    this.stats.live = this.canLive();
    this.stats.fed = false;
  }
}

export default Animal;

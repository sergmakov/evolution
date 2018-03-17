import Environment from './Environment';
import Species from './Species';

class Timer {
  constructor() {
    this.day = 0;
    this.environment = new Environment();
    this.species = [{
      act: ({ eat }) => eat(),
      initNumber: 20,
    }].map(config => new Species(config));
    this.results = this.species.map(() => []);
  }

  tick() {
    this.forEachAnimal(animal => animal.act(this.environment));
    this.forEachAnimal(animal => animal.endDay());
    this.storeDayResult();
    this.day++;
  }

  makeTicks(number) {
    for (let i = 0; i < number; i++) {
      this.tick();
    }
  }

  storeDayResult() {
    const { results } = this;
    this.species.forEach((spicies, idx) => {
      results[idx].push({
        x: this.day,
        y: spicies.population,
      });
    });
  }

  forEachAnimal(func) {
    this.species.forEach(spicies => {
      spicies.animals.forEach(animal => {
        func(animal);
      });
    });
  }

  getResults() {
    return this.results;
  }
}

export default Timer;

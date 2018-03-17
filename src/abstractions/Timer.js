import Environment from './Environment';
import Species from './Species';

class Timer {
  constructor() {
    this.day = 0;
    this.environment = new Environment();
    this.species = species.map(spiciesConfig => new Species(spiciesConfig, configs));
    this.results = this.species.map(() => []);
  }

  waitDay() {
    this.forEachAnimal(animal => animal.act(this.environment));
    this.forEachAnimal(animal => animal.endDay());
    this.day++;
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

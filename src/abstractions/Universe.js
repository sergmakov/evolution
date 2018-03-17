import Animal from './Animal';
import Environment from './Environment';
import Species from './Species';

class Universe {
  constructor(configs) {
    const {
      species,
      animalClass,
      environmentClass,
    } = configs;
    const EnvironmentClass = environmentClass || Environment;
    const AnimalClass = animalClass || Animal;

    this.day = 0;
    this.environment = new EnvironmentClass();
    this.species = species.map(spiciesConfig => new Species(spiciesConfig, AnimalClass));
    this.results = this.species.map(() => []);
  }

  tick() {
    this.collectDayResult();
    this.waitDay();
  }

  makeTicks(number) {
    for (let i = 0; i < number; i++) {
      this.tick();
    }
  }

  waitDay() {
    this.forEachAnimal(animal => animal.act(this.environment));
    this.forEachAnimal(animal => animal.endDay());
    this.day++;
  }

  collectDayResult() {
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

export default Universe;

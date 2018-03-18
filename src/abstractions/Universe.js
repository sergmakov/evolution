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
    return this.waitDay();
  }

  makeTicks(number, callback) {
    let promise = Promise.resolve();
    for (let i = 0; i < number; i++) {
      promise = promise
        .then(() => {
          this.tick();
          callback(this.getResults());
        })
        .then(() => this.makeTimeout());
    }
    return promise;
  }

  waitDay() {
    const allAnimals = this.getAllLiveAnimals();
    const actPromises = allAnimals.map(animal => animal.act(this.environment));
    return Promise.all(actPromises).then(() => {
      allAnimals.forEach(animal => animal.updateStats());
      this.day++;
    });
  }

  collectDayResult() {
    const { results } = this;
    this.species.forEach((spicies, idx) => {
      console.log('results', {
        x: this.day,
        y: spicies.population,
      });
      results[idx].push({
        x: this.day,
        y: spicies.population,
      });
    });
  }

  getAllLiveAnimals() {
    return this.species.reduce((sum, species) => {
      return [
        ...sum,
        ...species.animals.filter(animal => animal.stats.live),
      ];
    }, []);
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

  makeTimeout() {
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  }
}

export default Universe;

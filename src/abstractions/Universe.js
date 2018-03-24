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
    this.environment = new EnvironmentClass(this);
    this.species = species.map(spiciesConfig => new Species(spiciesConfig, AnimalClass));

    this.results = [{
      label: 'Population',
      data: [
        ...this.species.map((spec, idx) => ({
          label: spec.name || `Species ${idx}`,
          data: [],
        })),
        {
          label: 'Food',
          data: [],
        },
      ],
    }];
  }

  makeTicks(number, callback) {
    let promise = Promise.resolve();
    for (let i = 0; i < number; i++) {
      promise = promise.then(() => new Promise(resolve => {
        this.collectCycleResult();
        this.makeCycle();
        callback(this.getResults());
        setTimeout(() => resolve(), 0);
      }));
    }
    return promise;
  }

  makeCycle() {
    const allAnimals = this.getAllLiveAnimals();

    this.environment.startCycle();
    allAnimals.forEach(animal => animal.startCycle());
    allAnimals.forEach(animal => animal.act(this.environment));
    this.environment.resolveIntentions();
    allAnimals.forEach(animal => animal.endCycle());
    this.environment.endCycle();
    this.day++;
  }

  collectCycleResult() {
    const { results } = this;
    const chart1Data = results[0].data;
    this.species.forEach((spicies, idx) => {
      chart1Data[idx].data.push({
        x: this.day,
        y: spicies.population,
      });
    });
    chart1Data.find(line => line.label === 'Food').data.push({
      x: this.day,
      y: this.environment.stats.foodAmount,
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

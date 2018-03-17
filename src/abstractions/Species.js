import Animal from './Animal';


class Species {
  constructor({ act, initNumber }) {
    this.act = act;
    this.animals = [];
    for (let i = 0; i < initNumber; i++) {
      this.addAnimal();
    }
  }

  addAnimal() {
    this.animals.push(new Animal({
      species: this,
    }));
  }

  get population() {
    return this.animals.filter(animal => animal.stats.live).length;
  }
}

export default Species;

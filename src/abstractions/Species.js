class Species {
  constructor({ act, initNumber }, AnimalClass) {
    this.act = act;
    this.animals = [];
    this.AnimalClass = AnimalClass;
    for (let i = 0; i < initNumber; i++) {
      this.addAnimal(AnimalClass);
    }
  }

  addAnimal() {
    this.animals.push(new this.AnimalClass({
      species: this,
    }));
  }

  get population() {
    return this.animals.filter(animal => animal.stats.live).length;
  }
}

export default Species;

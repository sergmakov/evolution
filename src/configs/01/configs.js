import Animal from '../../abstractions/Animal';
import Environment from '../../abstractions/Environment';
import species from './species';

class AnimalClass extends Animal {}
class EnvironmentClass extends Environment {}

export default {
  daysNumber: 500,
  worlds: [
    {
      name: 'Somebody',
      species,
      animalClass: AnimalClass,
      environmentClass: EnvironmentClass,
    },
    {
      name: 'Somebody2',
      species,
      animalClass: AnimalClass,
      environmentClass: EnvironmentClass,
    },
    {
      name: 'Somebody3',
      species,
      animalClass: AnimalClass,
      environmentClass: EnvironmentClass,
    },
  ],
};

import Animal from '../../abstractions/Animal';
import Environment from '../../abstractions/Environment';
import species from './species';

class AnimalClass extends Animal {}
class EnvironmentClass extends Environment {}

export default {
  daysNumber: 50,
  species,
  // animalClass: AnimalClass,
  // environmentClass: EnvironmentClass,
};

import Animal from '../../abstractions/Animal';
import Environment from '../../abstractions/Environment';
import { random } from 'lodash';
import species from './species';

class AnimalClass extends Animal {}
class EnvironmentClass extends Environment {}

export default {
  daysNumber: 10,
  species,
  // animalClass: AnimalClass,
  // environmentClass: EnvironmentClass,
};

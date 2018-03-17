import Animal from '../../abstractions/Animal';
import Environment from '../../abstractions/Environment';
import { random } from 'lodash';
import species from './species';

class AnimalClass extends Animal {}
class EnvironmentClass extends Environment {
  getFood(animal) {
    // console.log('random()', random());
    return random(1, 10) > 1;
  }
}

export default {
  species,
  // animalClass: AnimalClass,
  environmentClass: EnvironmentClass,
};

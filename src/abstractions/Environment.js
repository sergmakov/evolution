import { random } from 'lodash';

class Environment {
  getFood(animal) {
    // console.log('random()', random());
    return random(1, 10) > 9;
  }
}

export default Environment;

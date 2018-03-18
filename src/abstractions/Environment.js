import { random } from 'lodash';

class Environment {
  tryToEat() {
    return new Promise(resolve => {
      const result = random(1, 10) > 2;
      resolve(result);
    });
  }

  tryToMultiply() {
    return new Promise(resolve => {
      const result = random(1, 10) > 8;
      resolve(result);
    });
  }
}

export default Environment;

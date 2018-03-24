import { random, shuffle } from 'lodash';

export function equiprobableLimited(candidates, { foodAmount, foodPortion, eatChancePerFood }) {
  const candShuffled = shuffle(candidates);
  let foodLeft = foodAmount;
  for (let i = 0; i < candShuffled.length; i++) {
    const animal = candShuffled[i];
    if (foodLeft > 0) {
      const result = random(true) < eatChancePerFood * foodLeft;
      animal.tryToEatResult = result;
      foodLeft -= foodPortion;
    } else {
      animal.tryToEatResult = false;
    }
  }
}

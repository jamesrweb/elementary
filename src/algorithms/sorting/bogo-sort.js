import Chance from "chance";
import { swap } from "../helpers/index";

function in_order(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }

  return true;
}

function fisher_yates_shuffle(array) {
  const output = [...array];
  const chance = new Chance();

  for (let index = output.length - 1; index >= 0; index--) {
    const randomIndex = chance.integer({
      min: 0,
      max: index + 1
    });

    if (typeof output[randomIndex] !== "undefined") {
      swap(output, index, randomIndex);
    }
  }

  return output;
}

export function bogo_sort(array) {
  let output = [...array];

  while (in_order(output) === false) {
    output = fisher_yates_shuffle(array);
  }

  return output;
}
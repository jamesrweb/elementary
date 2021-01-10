import { arrays } from "../helpers";

export function selection_sort(array) {
  const output = [...array];
  const length = output.length;

  for (let outer = 0; outer < length; outer++) {
    let low = outer;

    for (let inner = outer + 1; inner < length; inner++) {
      if (output[inner] < output[low]) low = inner;
    }

    if (output[outer] > output[low]) {
      array.swap(output, outer, low);
    }
  }

  return output;
}
import { arrays } from "../helpers";

export function bubble_sort(array) {
  const output = [...array];
  const length = output.length;

  for (let outer = 0; outer < length; outer++) {
    for (let inner = 0; inner < length; inner++) {
      const next = inner + 1;
      if (output[inner] > output[next]) {
        arrays.swap(output, inner, next);
      }
    }
  }

  return output;
}
import { swap } from '../helpers/index';

export function bubble_sort(array) {
  const output = [...array];
  const length = output.length;

  for (let outer = 0; outer < length; outer++) {
    for (let inner = 0; inner < length; inner++) {
      const next = inner + 1;
      if (output[inner] > output[next]) {
        swap(output, inner, next);
      }
    }
  }

  return output;
}
import { linear_search } from "./linear-search";

export function jump_search(array, value) {
  const n = array.length;
  let step = Math.sqrt(n);
  let prev = 0;

  while (array[Math.round(Math.min(step, n) - 1)] < value) {
    prev = step;
    step *= 2;
    if (prev >= n) return -1;
  }

  let foundIndex = linear_search(array.slice(Math.round(prev)), value);
  if (foundIndex !== -1) foundIndex += Math.round(prev);
  return foundIndex;
}
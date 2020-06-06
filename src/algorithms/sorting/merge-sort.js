function merge(left, right) {
  const result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    } else {
      result.push(left.length ? left.shift() : right.shift());
    }
  }

  return result;
}

export function merge_sort(array) {
  if (array.length <= 1) return array;

  const middle = array.length / 2;
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(merge_sort(left), merge_sort(right));
}
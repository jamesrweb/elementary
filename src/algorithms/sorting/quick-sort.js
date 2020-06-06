export function quick_sort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (const item of array.slice(1)) {
    item < pivot ? left.push(item) : right.push(item);
  }

  return [...quick_sort(left), pivot, ...quick_sort(right)];
}
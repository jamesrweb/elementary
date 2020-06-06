export function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}
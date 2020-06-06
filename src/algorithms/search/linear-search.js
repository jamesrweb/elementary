export function linear_search(array, value) {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (Object.is(item, value)) {
      return index;
    }
  }

  return - 1;
}
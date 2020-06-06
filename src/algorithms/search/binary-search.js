export function binary_search(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (Object.is(array[middle], value) === false && start <= end) {
    if (value > array[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  if (Object.is(array[middle], value) === true) {
    return middle;
  }

  return -1;
}

export function binary_search_recursive(
  array,
  value,
  start = 0,
  end = array.length
) {
  if (end >= start) {
    const middle = Math.floor((start + end) / 2);

    if (Object.is(array[middle], value) === true) {
      return middle;
    }

    if (array[middle] > value) {
      return binary_search_recursive(array, value, start, middle - 1);
    }

    return binary_search_recursive(array, value, middle + 1, end);
  }

  return -1;
}
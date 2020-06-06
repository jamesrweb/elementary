export function filter(array, filterFn) {
  const output = [];
  const clone = [...array];
  for (let index = 0; index < clone.length; index++) {
    const item = clone[index];
    const condition = filterFn(item, index, clone);
    if (condition === true) {
      output.push(item);
    }
  }
  return output;
}
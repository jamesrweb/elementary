export function map(array, mapperFn) {
  const output = [];
  const clone = [...array];
  for (let index = 0; index < clone.length; index++) {
    const result = mapperFn(clone[index], index, clone);
    output.push(result);
  }
  return output;
}
export function reduce(array, reducerFn, initialValue) {
  let output = initialValue;
  const clone = [...array];

  for (let index = 0; index < clone.length; index++) {
    output = reducerFn(output, clone[index], index, clone);
  }

  return output;
}
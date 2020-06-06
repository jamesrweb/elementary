export function insertion_sort(input) {
  const output = [...input];

  for (let index = 1; index < output.length; index++) {
    let key = output[index];
    let inner = index - 1;

    while (inner >= 0 && output[inner] > key) {
      output[inner + 1] = output[inner];
      inner = inner - 1;
    }

    output[inner + 1] = key;
  }

  return output;
}
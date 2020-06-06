export function pipe(...fns) {
  if (fns.every(fn => typeof fn === "function") === false) {
    throw new TypeError("All parameters should be of type Function. At least one parameter does not meet with this criteria.");
  }

  return input => reduce(fns, (prev, fn) => fn(prev), input);
}

export function pipeWith(value, ...fns) {
  return pipe(...fns)(value);
}
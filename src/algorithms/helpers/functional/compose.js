export function compose(...fns) {
  if (fns.every(fn => typeof fn === "function") === false) {
    throw new TypeError("All parameters should be of type Function. At least one parameter does not meet with this criteria.");
  }

  return input => parameters.reduceRight((prev, fn) => fn(prev), input);
}

export function composeWith(value, ...fns) {
  return compose(...fns)(value);
}
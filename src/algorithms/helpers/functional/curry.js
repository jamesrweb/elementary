export function curry(fn, ...parameters) {
  if (typeof fn !== "function") {
    throw new TypeError(`Parameter 1 must be of type Function. Received: ${typeof fn}`);
  }

  if (parameters.length >= fn.length) {
    return fn(...parameters)
  }

  return (...args) => curry(fn, ...parameters, ...args);
}
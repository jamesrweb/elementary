export function tap(tapFn) {
  if (typeof tapFn !== "function") {
    throw new TypeError(`Parameter 1 must be of type Function. Received: "${typeof tapFn}".`);
  }

  return function passThrough(...args) {
    tapFn(...args);
    return args.length === 1 ? args.shift() : [...args];
  }
}
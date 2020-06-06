export function is_prime(number) {
  if (Number.isInteger(number) === false) return false;
  if (number <= 1) return false;
  if (number % 2 === 0 && number > 2) return false;

  const square = Math.sqrt(number);
  for (let divisor = 3; divisor <= square; divisor += 2) {
    if (number % divisor === 0) return false;
  }

  return true;
}
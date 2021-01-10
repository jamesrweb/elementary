export function ackermann(M, N) {
  const next = new Float64Array(M + 1);
  const goal = new Float64Array(M + 1).fill(1, 0, M);
  goal[M] = -1;

  let result = 0;

  do {
    result = next[0] + 1;
    let m = 0;
    while (next[m] === goal[m]) {
      goal[m] = result;
      next[m++]++;
    }
    next[m]++;
  } while (next[M] !== N + 1);

  return result;
}
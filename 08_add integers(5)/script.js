function solution(a, b) {
  let sum = 0;

  if (a > b) {
    [a, b] = [b, a];
  }

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

console.log(solution(3, 5));

// function solution(a, b) {
//   return ((a + b) * (Math.abs(b - a) + 1)) / 2;
// }

// console.log(solution(1, 10));
// console.log(solution(10, 1));

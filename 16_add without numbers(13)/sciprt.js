function solution(numbers) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum != 45) {
      result = 45 - sum;
    } else {
      result = 45;
    }
  }

  return result;
}

// function solution(numbers) {
//   let result = (9 * (9 + 1)) / 2;
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return result - sum;
// }

console.log(solution([1, 2, 3, 4, 6, 7, 8]));

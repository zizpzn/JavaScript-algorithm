function solution(num) {
  for (let count = 0; count < 500; count++) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num === 1) {
      return count;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }

  return -1;
}

// function solution(num) {
//   let count = 0;

//   while (count < 500) {
//     if (num === 1) {
//       return count;
//     }
//     count++;
//     num = num % 2 === 0 ? num / 2 : num * 3 + 1;
//   }

//   return -1;
// }

console.log(solution(6));

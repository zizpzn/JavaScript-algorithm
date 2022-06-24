function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3, 2]));

// function solution(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(solution([1, 1, 3, 3, 0, 1, 1]));
// console.log(solution([4, 4, 4, 3, 3]));

// function solution(arr) {
//   const res = [];
//   let prev = "";

//   for (let c of arr) {
//     if (c !== prev) {
//       res.push(c);
//     }
//     prev = c;
//   }

//   return res;
// }

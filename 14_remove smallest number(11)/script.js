function solution(arr) {
  let result = [];
  let min = Math.min.apply(null, arr);

  for (let i of arr) {
    if (arr.length === 1) {
      result.push(-1);
      break;
    }
    if (i !== min) {
      result.push(i);
    }
  }

  return result;
}

// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)), 1);
//   if (arr.length < 1) {
//     return [-1];
//   }
//   return arr;
// }

// function solution(arr) {
//   if (arr.length === 1) {
//     return [-1];
//   }
//   const minValue = Math.min.apply(null, arr);
//   const index = arr.findIndex((value) => {
//     value === minValue;
//   });
//   arr.splice(index, 1);
//   return arr;
// }

// function solution(arr) {
//   if (arr.length > 1) {
//     let minNum = Math.min(...arr);
//     let index = arr.indexOf(minNum);
//     arr.splice(index, 1);
//   } else {
//     arr = [-1];
//   }
//   return arr;
// }

// function solution(arr) {
//   if (arr.length === 1) {
//     return [-1];
//   }

//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       i = j;
//     }
//   }

//   arr.splice(i, 1);

//   return arr;
// }

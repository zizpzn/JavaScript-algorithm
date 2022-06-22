function solution(arr) {
  let answer = [];
  let min = Math.min.apply(null, arr);

  for (let i of arr) {
    if (arr.length === 1) {
      answer.push(-1);
      break;
    }
    if (i !== min) {
      answer.push(i);
    }
  }

  return answer;
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

function solution(arr) {
  if (arr.length > 1) {
    var minNum = Math.min(...arr);
    var index = arr.indexOf(minNum);
    arr.splice(index, 1);
  } else {
    arr = [-1];
  }
  return arr;
}

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

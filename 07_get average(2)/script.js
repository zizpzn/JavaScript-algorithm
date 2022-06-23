function average(array) {
  let sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// function solution(arr) {
//   let answer =
//     arr.reduce((a, b) => {
//       a + b;
//     }) / arr.length;
//   return answer;
// }

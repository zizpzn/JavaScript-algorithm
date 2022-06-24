function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function solution(arr) {
  let answer =
    arr.reduce((a, b) => {
      a + b;
    }) / arr.length;

  return answer;
}

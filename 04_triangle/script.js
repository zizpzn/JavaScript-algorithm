let solution = function (arr) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;

  for (let triangle of arr) {
    if (triangle[0] === 0) {
      answer.push("End");
      break;
    }

    if (triangle[0] === triangle[1] && triangle[0] === triangle[2]) {
      answer.push(true);
    } else {
      let sum = 0;
      for (let i = 0; i < triangle.length; i++) {
        sum += triangle[i];
        if (triangle[i] > max) max = triangle[i];
      }

      if (sum - max > max) {
        answer.push(true);
      } else answer.push(false);

      max = Number.MIN_SAFE_INTEGER;
    }
  }

  return answer;
};

let input = [
  [5, 5, 5],
  [10, 20, 15],
  [3, 6, 9],
  [0, 0, 0],
];

console.log(solution(input));

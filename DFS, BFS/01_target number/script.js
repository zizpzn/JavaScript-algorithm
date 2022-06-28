// function solution(numbers, target) {
//   let result = 0;

//   dfs(0, 0);

//   function dfs(level, sum) {
//     if (level === numbers.length) {
//       if (sum === target) {
//         result += 1;
//       }

//       return;
//     }

//     dfs(level + 1, sum + numbers[level]);
//     dfs(level + 1, sum - numbers[level]);
//   }

//   return result;
// }

// console.log(solution([1, 1, 1, 1, 1], 3));

function solution(numbers, target) {
  let answer = 0;

  getAnswer(0, 0);

  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));

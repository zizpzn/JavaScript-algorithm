function solution(n, lost, reserve) {
  var answer = 0;

  // 학생 수 만큼 배열의 가지고 있는 유니폼 수를 1로 초기화
  let hasUniform = new Array(n).fill(1);

  // 잃어버린 학생은 -1 을 해줌
  for (let i = 0; i < lost.length; i++) {
    hasUniform[lost[i] - 1]--;
  }

  // 여벌이 있으면 +1 을 해줌
  for (let i = 0; i < reserve.length; i++) {
    hasUniform[reserve[i] - 1]++;
  }

  for (let i = 0; i < hasUniform.length; i++) {
    // 유니폼이 없을 때 좌우 학생이 유니폼이 있을경우 빌려줌
    if (hasUniform[i] === 0) {
      if (hasUniform[i - 1] === 2) {
        hasUniform[i]++;
        hasUniform[i - 1]--;
      } else if (hasUniform[i + 1] === 2) {
        hasUniform[i]++;
        hasUniform[i + 1]--;
      }
    }

    // 유니폼이 1개이상 있으면 통과
    if (hasUniform[i] >= 1) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));

// function solution(n, lost, reserve) {
//   let students = {};
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     students[i] = 1;
//   }

//   lost.forEach((number) => (students[number] -= 1));
//   reserve.forEach((number) => (students[number] += 1));

//   for (let i = 1; i <= n; i++) {
//     if (students[i] === 2 && students[i - 1] === 0) {
//       students[i - 1]++;
//       students[i]--;
//     } else if (students[i] === 2 && students[i + 1] === 0) {
//       students[i + 1]++;
//       students[i]--;
//     }
//   }

//   for (let key in students) {
//     if (students[key] >= 1) {
//       answer++;
//     }
//   }
//   return answer;
// }

// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1]));

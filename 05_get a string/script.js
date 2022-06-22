function solution(s) {
  let answer = "";
  let sLength = s.length;
  if (sLength % 2 === 0) {
    answer = s.substr(sLength / 2 - 1, 2);
  } else {
    answer = s.substr(sLength / 2, 1);
  }

  return answer;
}

// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }

// function solution(s) {
//   const mid = Math.floor(s.length / 2);
//   return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
// }

// function solution(s) {
//   return s.length % 2 == 0
//     ? s.substr(s.length / 2 - 1, 2)
//     : s.substr(Math.floor(s.length / 2), 1);
// }

// function solution(s) {
//   var length = s.length;
//   var answer = "";

//   if (!(s.length > 0 && s.length < 100)) {
//     return;
//   }

//   if (length % 2 != 0) {
//     answer += s.slice(length / 2, length / 2 + 1);
//   } else {
//     answer += s.slice(length / 2 - 1, length / 2 + 1);
//   }

//   return answer;
// }

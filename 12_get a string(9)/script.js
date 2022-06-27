function solution(s) {
  let result = "";
  let length = s.length;

  if (length % 2 === 0) {
    result = s.substr(length / 2 - 1, 2);
  } else {
    result = s.substr(length / 2, 1);
  }

  return result;
}

// console.log(solution("abced"));
// console.log(solution("qwer"));

// function solution(s) {
//   return s.length % 2 == 0
//     ? s.substr(s.length / 2 - 1, 2)
//     : s.substr(Math.floor(s.length / 2), 1);
// }

// console.log(solution("abced"));
// console.log(solution("qwer"));

// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }

// function solution(s) {
//   const mid = Math.floor(s.length / 2);
//   return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
// }

// function solution(s) {
//   var length = s.length;
//   var result = "";

//   if (length % 2 !== 0) {
//     result += s.slice(length / 2, length / 2 + 1);
//   } else {
//     result += s.slice(length / 2 - 1, length / 2 + 1);
//   }

//   return result;
// }

// console.log(solution("abced"));
// console.log(solution("qwer"));

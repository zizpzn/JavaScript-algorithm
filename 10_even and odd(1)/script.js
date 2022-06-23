function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// function solution(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

console.log(solution(3));
console.log(solution(4));

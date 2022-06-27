function solution(a, b) {
  if (a === b) {
    console.log("==");
  } else if (a > b) {
    console.log(">");
  } else {
    console.log("<");
  }
}

console.log(solution("1 2"));
console.log(solution(10, 2));
console.log(solution(5, 5));

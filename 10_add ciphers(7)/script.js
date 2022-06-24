function solution(n) {
  let arr = n.toString().split("");
  let sum = 0;
  arr.forEach((element) => {
    sum += parseInt(element);
  });

  return sum;
}

console.log(solution(123));
console.log(solution(987));

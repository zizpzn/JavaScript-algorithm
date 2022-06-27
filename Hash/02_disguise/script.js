function solution(clothes) {
  let result = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let key in obj) {
    result *= obj[key];
  }

  return result - 1;
}

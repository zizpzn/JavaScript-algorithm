function solution(s) {
  let result = "";
  let num = 0;

  console.log(s.length);

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == " ") {
      num = 0;
      result += " ";
      continue;
    } else if (num % 2 == 0) {
      result += s.charAt(i).toUpperCase();
      num++;
    } else {
      result += s.charAt(i).toLowerCase();
      num++;
    }
  }

  return result;
}

console.log("try hello world");

// function solution(n) {
//   // var arr = [];
//   // for (var i=0; i<n.length; i++) {
//   //     arr.push(n[i]);
//   //     console.log(n[i]);
//   // }
//   // console.log(arr);
//   // console.log('---------')
//   // return n.toString().split('').sort((a, b) => b > a).map(o => o = parseInt(o));
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map((element) => (element = parseInt(element)));
// }

function solution(n) {
  let string = String(n);
  let arr = string.split("");
  let reverse = arr.reverse();

  return reverse.map((element) => (element = parseInt(element)));
}

console.log(solution(12345));

function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let slice = array.slice(eachCommand[0] - 1, eachCommand[1]);

    result.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1]);
  }

  return result;
}

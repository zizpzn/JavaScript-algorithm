function solution(priorities, location) {
  let result = 1;
  let top = [];

  while (priorities.length > 0) {
    top = priorities.shift(); // get first document

    // check documents
    if (priorities.some((priority) => priority > top)) {
      priorities.push(top); // push
    } else {
      if (location === 0) {
        break; // print
      } else {
        result++;
      }
    }

    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }

  return result;
}

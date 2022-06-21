class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    return result;
  }

  empty() {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack);
console.log(stack.arr[0]);

let popValue = stack.pop(2);
console.log(stack);
console.log(popValue);

console.log(stack.top());
console.log(stack.bottom());

class Heap {
  constructor() {
    this.item = [];
  }

  length() {
    return this.item.length;
  }

  heap() {
    return this.item;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  swap(a, b) {
    // 구조분해 할당을 이용하면 임시 변수를 생성할 필요 없이 값을 쉽게 교환할 수 있다.
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 노드를 추가할 때 bubbleUp 방식으로 부모와 값을 비교하며 heapify를 실행한다.
  bubbleUp(index) {
    if (index < 0) return;

    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    const swapChildren =
      this.item[right] && this.item[right][1] < this.item[left][1]
        ? right
        : left;

    if (this.item[swapChildren][1] < this.item[index][1]) {
      this.swap(swapChildren, index);
      this.bubbleUp(this.getParent(index));
    }
  }

  // 루트 노드를 삭제한 후 bubbleDown 방식으로 자식들과 값을 비교하며 heapify를 실행한다.
  bubbleDown(index) {
    if (index > Math.floor(this.length / 2) - 1) return;

    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    const swapChildren =
      this.item[right] && this.item[right][1] < this.item[left][1]
        ? right
        : left;

    if (this.item[swapChildren][1] < this.item[index][1]) {
      this.swap(swapChildren, index);
    }

    this.bubbleDown(swapChildren);
  }

  shift() {
    this.swap(0, this.length - 1);
    const pop = this.item.pop();
    this.bubbleDown(0);
    return pop;
  }

  push(value) {
    this.item.push(value);
    this.bubbleUp(this.getParent(this.length - 1));
  }
}

function solution(jobs) {
  const heap = new Heap();

  const length = jobs.length;
  let answer = 0;
  let time = 0;

  jobs = jobs
    .sort((a, b) => a[0] - b[0])
    .map((v, i, arr) => [v[0] - arr[0][0], v[1]]);

  // 남은 작업이 있을 동안
  while (jobs.length || heap.length) {
    // 디스크의 현재 시간과 동일하거나 미리 요청된 작업이 존재한다면 heap에 추가한다.
    // heap에 추가할 때마다 bubbleUp 방식으로 heapify를 실행한다.
    while (jobs.length && jobs[0][0] <= time) {
      heap.push(jobs.shift());
    }

    // 만약에 디스크의 현재 시간과 동일하거나 미리 요청된 작업이 없다면,
    // 디스크의 현재 시간 이후에 요청된 작업이 존재하는지 확인해 heap에 추가한다.
    if (!heap.length) {
      const newTime = jobs[0][0];
      while (jobs.length && jobs[0][0] === newTime) {
        heap.push(jobs.shift());
      }

      // 디스크의 현재 시간을 새롭게 추가된 작업의 요청시간으로 갱신한다.
      time = newTime;
    }

    // 작업 대기열에서 가장 소요 시간이 짧은 작업을 꺼낸다. heap에서 꺼낼 때마다 bubbleDown 방식으로 heapify를 실행한다.
    const done = heap.shift();

    // 현재 꺼낸 작업의 종료 시간을 더해 디스크의 현재 시간을 갱신한다.
    time += done[1];
    answer += time - done[0];
  }

  return Math.floor(answer / length);
}

// function solution(jobs) {
//   let answer = 0;
//   let j = 0;
//   let time = 0;
//   jobs.sort((a, b) => {
//     return a[0] - b[0];
//   });

//   const priorityQueue = [];
//   while (j < jobs.length || priorityQueue.length !== 0) {
//     if (jobs.length > j && time >= jobs[j][0]) {
//       priorityQueue.push(jobs[j++]);
//       priorityQueue.sort((a, b) => {
//         return a[1] - b[1];
//       });
//       continue;
//     }
//     if (priorityQueue.length !== 0) {
//       time += priorityQueue[0][1];
//       answer += time - priorityQueue[0][0];
//       priorityQueue.shift();
//     } else {
//       time = jobs[j][0];
//     }
//   }
//   return parseInt(answer / jobs.length);
// }

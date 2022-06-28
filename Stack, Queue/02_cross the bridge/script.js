// function solution(bridge_length, weight, truck_weights) {
//   // 다리배열을 다리 길이보다 하나 작게 0으로 채워서 만들고
//   // 마지막 요소에 첫 트럭을 넣는다
//   let bridge = new Array(bridge_length - 1).fill(0);
//   bridge.push(truck_weights.shift());
//   // 트럭 하나가 이미 지났다고 가정해서 1초 지난 걸로 초기화
//   let time = 1;
//   // 다리에 트럭이 없을때 까지 무한루프
//   while (bridge.reduce((a, b) => a + b) > 0) {
//     // 다리 제일 앞에 있는 요소를 보내고
//     // 버틸 수 있는 다리 무게가 다음 트럭보다 높은지 비교한다.
//     // 버틸 수 있으면 다리 마지막 요소에 트럭을 넣고 시간을 경과 시키고
//     // 버틸 수 없으면 0을 넣고 시간을 경과 시킨다.
//     bridge.shift();
//     if (weight - bridge.reduce((a, b) => a + b) >= truck_weights[0]) {
//       bridge.push(truck_weights.shift());
//     } else {
//       bridge.push(0);
//     }
//     time++;
//   }
//   return time;
// }

// function solution(bridge_length, weight, truck_weights) {
//   // qu의 요소 : [트럭무게, 트럭이 빠져 나갈 시간].
//   // weightOnBridge : 다리 위 무게
//   let time = 0;
//   let qu = [[0, 0]];
//   let weightOnBridge = 0;

//   // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
//   while (qu.length > 0 || truck_weights.length > 0) {
//     // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
//     //    다리 위 트럭 무게 합에서 빼준다.
//     if (qu[0][1] === time) {
//       weightOnBridge -= qu.shift()[0];
//     }

//     if (weightOnBridge + truck_weights[0] <= weight) {
//       // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
//       //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
//       weightOnBridge += truck_weights[0];
//       qu.push([truck_weights.shift(), time + bridge_length]);
//     } else {
//       // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
//       //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
//       //    참고: if 밖에서 1 더하기 때문에 -1 해줌
//       if (qu[0]) time = qu[0][1] - 1;
//     }
//     // 시간 업데이트 해준다.
//     time++;
//   }
//   return time;
// }

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let finish = [];
  let moving = [];
  let length = truck_weights.length;
  while (finish.length !== length) {
    answer += 1;
    let truck = truck_weights.shift();
    if (moving.length === 0) {
      moving.push([truck, 0]);
      continue;
    }
    //다리 건너는 트럭마다 시간 1씩 부여하기.
    moving.map((tr) => {
      return [tr[0], (tr[1] += 1)];
    });
    // 빼주기
    if (moving[0][1] >= bridge_length) {
      let tr = moving.shift();
      finish.push(tr);
    }

    //버틸 수 있는 무게를 넘지 않았을때 moving배열에 추가하기.
    if (
      weight - truck >=
      moving.reduce((p, c) => {
        return p + c[0];
      }, 0)
    ) {
      moving.push([truck, 0]);
      continue;
    }
    truck_weights.unshift(truck);
  }
  return answer;
}

function Node(firstData) {
  this.data = firstData;
  this.prev = null;
  this.next = null;
}

// first out last in
function Queue() {
  this.first = null;
  this.last = null;

  this.enqueue = function (node) {
    if (this.first === null) {
      this.first = node;
      this.first.next = node;
      this.last = node;
      this.last.prev = node;
    } else if (this.first === this.last) {
      this.first.prev = null;
      this.first.next = node;
      this.last = node;
      this.last.prev = this.first;
      this.last.next = null;
    } else if (this.last !== null) {
      var temp = this.last;
      temp.next = node;
      this.last = node;
      this.last.prev = temp;
    }
  };

  this.dequeue = function () {
    var returnValue = this.first.data;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else if (this.first !== this.last) {
      this.first = this.first.next;
    }

    return returnValue;
  };

  this.length = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return 1;
    } else if (this.first !== this.last) {
      var count = 1,
        node = this.first;

      while (node.next !== null) {
        node = node.next;
        count++;
      }

      return count;
    }
  };

  this.sum = function () {
    if (this.first === null) return 0;
    else if (this.first === this.last) {
      return this.first.data;
    } else if (this.first !== this.last) {
      var count = this.first.data !== -1 ? this.first.data : 0,
        node = this.first;

      while (node.next !== null) {
        node = node.next;
        if (node.data !== -1)
          // 이 문제에 맞게 추가한 조건문
          count += node.data;
      }

      return count;
    }
  };
}

function solution(bridge_length, weight, truck_weights) {
  var answer = 0,
    truck_length = truck_weights.length,
    q = new Queue(),
    end = 0;

  var i = 0;
  for (; i < bridge_length; i++) q.enqueue(new Node(-1));

  while (end !== truck_length) {
    // move truck
    answer++;
    end += q.dequeue() !== -1 ? 1 : 0;

    // add truck
    q.enqueue(
      new Node(
        q.sum() + truck_weights[0] <= weight ? truck_weights.shift() : -1
      )
    );
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

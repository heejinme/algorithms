/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력한다.
 */

function solution(arr) {
  return arr.sort((a, b) => a - b)[0];
}

const arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

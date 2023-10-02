/**
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는다.
 */

function solution(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      return;
    }
    min = num < min ? num : min;
    return sum += num;
  });

  return [sum, min];
}

const arr= [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

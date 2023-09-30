/**
* 학생 1인 당 연필을 한 자루씩 나누어 준다고 할 때, N명이 학생수 를 입력하면 필요한 연필의 다스 수를 반환한다.
*/

function solution(num) {
  return Math.ceil(num / 12);
}

console.log(solution(25));
console.log(solution(178));

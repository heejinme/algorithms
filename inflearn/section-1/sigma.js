/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력한다.
 */

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));

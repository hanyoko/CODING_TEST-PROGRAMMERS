//나의 풀이
function solution(s) {
    var answer = '';
    let trim = s.split(' '); //문자열의 공백 제거후 배열에 저장한다. split함수가 그 기능을 한다
    let max = Math.max.apply(null, trim); // 최대값을 구한다
    let min = Math.min.apply(null, trim); // 최소값을 구한다
    answer = min + ' ' + max; // 출력값은 최대값과 최소값사이에 공백이 있는 문자열이다
    return answer;
}

//먼저 입력되는 문자열에 공백이 있음으로 공백을 제거한다
//그런다음에 반복문으로 최댓값과 최솟값을 저장하면 되는데...
//자바스크립트의 내장함수중 배열의 최댓값과 최솟값을 찾아주는 함수가 있다.
//내장함수를 이용해 최대값과 최소값을 찾고
//출력값 조건에 맞추어서 "최소값 최대값"을 출력하면된다

//다른 사람의 풀이
function solution(s) {
    const arr = s.split(' ');
return Math.min(...arr) + ' ' + Math.max(...arr)
}

//스프레드 연산자를 사용해서 배열 안의 최댓값과 최솟값을 구한다.
//Math.min 은 파라미터를 콤마로 구분해서 받기 때문에 스프레드 연산자를 사용할 수 있다. Math.max 도 마찬가지다.

Math.min(1, 2, 3) // 1
Math.max(1, 2, 3) // 3

//조금 더 깔끔한 방법 .... !!!
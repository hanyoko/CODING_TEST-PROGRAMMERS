//나의 풀이
const solution = n_str => Number(n_str)


//다른 사람의 풀이
function solution(n_str) {
    return +n_str;
}

//단항 더하기(+), Unary plus: 피연산자 앞에 위치하며 피연산자를 평가하지만, 만약 피연산자가 숫자가 아니라면 숫자로 변환을 시도

function solution(n_str) {
    var answer = 0;

    answer = parseInt(n_str);

    return answer;
}

//parseInt(): 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
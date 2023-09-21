//나의 풀이
function solution(a, d, included) {
    let answer = 0;
    included.forEach(function(i){
        (i === true) && (answer += a);
        a += d;
    });
    return answer;
}

//조건부 and 연산을 사용해서 풀어봤다. forEach()로 배열을 순회하고, 값을 더해주기

//다른 사람의 풀이
function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}

//이렇게 깔끔하게도 풀 수 있다니, reduce() 함수를 사용하여 푼 답안이다.

//arr.reduce(callback[, initialValue]), 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환하는 함수

//- 파라미터
//accumulator - 반환값 누적
//currentValue - 배열의 현재 요소
//index(선택) - 배열의 현재 요소의 인덱스
//array(선택) - 호출할 배열
//함수의 반환값은 accumulator에 할당되고 순회 중 계속 누적되어 최종적으로 하나의 값을 반환한다.
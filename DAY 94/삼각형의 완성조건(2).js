//나의 풀이
function solution(sides) {
    let count = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);

    // 만약 기존 요소 중 가장 긴 변이 있다면
    for(let i=max-min+1; i<=max; i++) {
        count++;
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let j=max+1; j<max+min; j++) {
        count++;
    }
    return count;
}

/*
Math.max / Math.min 란?

Math.max 함수는 숫자 집합중에 가장 큰 수를 리턴하는 함수

Math.min 함수는 숫자 집합중에서 가장 작은 수를 리턴하는 함수
*/

//다른 사람의 풀이
function solution(sides) {
    return Math.min(...sides) * 2 - 1;
}

/*
스프레드 연산자와 삼각형 공식을 활용해서 더 간단하게 ..
간단하게 말하면 입력값으로 주어진 배열에서 (더 작은 값 * 2) - 1이 답이라는 것이다.
*/
//나의 풀이
function solution(balls, share) {
    if (share === 0) return 1;
    return  factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(n) {
    let answer = BigInt(1);

    for (let result = 2; result <= n; result++) {
        answer *= BigInt(result);
    }
    return answer;
}

/*
재귀를 이용해 팩토리얼 함수를 선언한다
팩토리얼 함수를 이용해 조합 공식을 풀면 되겠다
에러가 뜨네?
js 특성상 수가 너무 커 int 범위에서 벗어날 경우 오류가 발생할 수 있다.
보다 큰 수를 담을 수 있는 bigint를 사용하자

js에선 큰 수로 인해 오류가 발생할 수 있다.
js의 큰 수에 대해선 bigint()로 대처 가능하며 bigint는 bigint끼리만 연산 가능하다. 단, 비교는 상관없다.
*/
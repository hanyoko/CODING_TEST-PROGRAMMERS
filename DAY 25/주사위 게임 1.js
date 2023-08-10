//나의 풀이
function solution(a, b) {
    if(a % 2 !== 0 && b % 2 !== 0){
        return a*a + b*b;
    }else if(a % 2 !== 0 || b % 2 !== 0){
        return (2 * (a + b));
    }else {
        return Math.abs(a - b);
    }
}

//if문과 자바스크립트 연산자만 안다면 쉽게 풀수있는 문제이다.
//조건을 모두 충족한다면 &&를, 하나만 충족한다면 ||를 쓴다는 것만 알면 금방 풀 수 있을 것 같다.
//먼저 둘다 짝수인 경우는 %를 이용해서 구해주었다.
//%는 나머지를 구하는 연산자로 2로 나눈 나머지가 1이라면 홀수, 0이라면 짝수를 뜻한다.
//그래서 만약 홀수라면, a의 제곱과 b의 제곱을 더해주게 하였다
//그런 다음 둘중 하나만 홀수인 경우의 식을 세워서 계산을 하고
//마지막으로 위의 두조건이 모두 아닌경우를 else를 사용해서 (a-b)의 절대값을 구했다.

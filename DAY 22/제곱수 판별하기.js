//나의 풀이
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

//정수 n이 제곱된 수임을 어떻게 판별하지? 라는 생각으로 이런 저런 시도를 해봤는데 계속 틀렸다 ..
//제곱수에 대해서는 알지만 코드로 판별하는 방법을 잘 모르겠더라 .. 그래서 먼저 제곱수 판별 방법에 대해 알아보았다
//제곱수란 어떤 자연수를 제곱하여 구해지는 수를 말한다
//1. 제곱수의 약수의 개수는 항상 홀수이다.
//2. 그중에서도 소수의 제곱은 약수가 반드시 세 개다.
//그리고 제곱수 판별 함수도 찾아보았다 .. 역시 있었다 .. 내가 기억 못했다 ..

Math.sqrt()
//주어진 숫자에 루트(√ )를 씌워 숫자의 제곱근을 반환한다. 만약 주어진 숫자가 음수이면 NaN을 반환한다.
//지금까지 아는 지식만 동원해서 문제를 어떻게든 풀어보는 게 좋을지,
//간단하게 풀어낼 수 있는 함수가 있다면 해당 함수를 찾아서 사용하는 게 좋을지 아직 판단이 어렵다 ...
//꽤 오래 고민하다가 결국 찾아봤는데 이렇게 알아가는 것이겠지 .. ? 물론 고민했던 시간들도 나에게 꼭 도움이 될 것이라고 생각하자 !

//다른 사람의 풀이
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

//예시
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN

//Math.sqrt값이 꼭 정수를 반환하는 것은 아니고 위와 같이 실수로도 값을 반환하므로,
//1로 나눴을 때의 나머지가 0이거나 (= 정수), isInteger()를 사용해 해당 값이 정수인지를 판별해야 한다고한다 !

Number.isInteger()
//주어진 값이 정수인지 판별한 뒤 boolean(True, False)으로 값을 반환한다.
//주어진 매개변수의 값이 NaN(Not of Number)이거나 Infinity(무한)이여도 false를 반환한다.

//다른 사람의 풀이 2
function solution(n) {
    for (let i=0; i*i <= n; i++) {
        if (i*i === n) return 1
    }

    return 2;
}

//원래 for문으로 풀려고 했었는데 i*i가 아니라 i<=n; 로 조건을 만들었다 ... 그래서 테스트에서 하나만 성공하고 하나는 실패가 떳구나
//조금만 더 해볼 걸 하는 아쉬움이 있지만 .. 다음에 같은 알고리즘 문제가 나오면 꼭 직접 풀어서 해결해보자 !!!!!
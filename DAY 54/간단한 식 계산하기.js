//나의 풀이
function solution(binomial) {
    return eval(binomial);
}

//eval() : 문자로 표현된 JavaScript 코드를 실행하는 함수
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

//console.log(eval('2 + 2')); // 4

//내 나름대로 만족스럽게 풀었다 싶었는데 JS 코드 자체를 실행해주는 함수라니!
//얼마나 간단하고 코드인가!

//그런데 MDN 문서를 살펴보니,

//eval을 절대 사용하지 말 것!
//eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수입니다. 악의적인 영향을 받았을 수 있는 문자열을 eval()로 실행한다면, 당신의 웹페이지나 확장 프로그램의 권한으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있습니다. 또한, 제3자 코드가 eval()이 호출된 위치의 스코프를 볼 수 있으며, 이를 이용해 비슷한 함수인 Function으로는 실현할 수 없는 공격이 가능합니다.
//또한 최신 JS 엔진에서 여러 코드 구조를 최적화하는 것과 달리 eval()은 JS 인터프리터를 사용해야 하기 때문에 다른 대안들보다 느립니다.

//..이런 함수도 있구나 정도로 알고 넘어가자.

//다른 풀이
function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    const operator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b
    };
    return operator[op](Number(a), Number(b));
}

//그래서 eval() 함수 대신에 다른 방법으로 풀어보았다 ....

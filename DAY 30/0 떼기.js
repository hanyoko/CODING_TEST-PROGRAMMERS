//나의 풀이
function solution(n_str) {
    return n_str.replace(/^0+/, '');
}

//replace와 정규표현식을 사용해서 0을 ''로 치환하여 제거하는 방법이다.

//다른 사람의 풀이
const solution = (str) => String(Number(str))

//이렇게 풀 생각은 못해봤는데 자바스크립트의 특성을 이용하면 이렇게도 풀 수 있겠구나 하는 생각이 들었다.
//자바스크립트는 문자열을 숫자로 변환하면 맨앞에 있는 0을 무시한다.
//0010 ➡️ 10 이 되는 것이다.
//이러한 특성을 이용해서 이렇게 간단하게 풀 수도 있겠구나 했다 ..

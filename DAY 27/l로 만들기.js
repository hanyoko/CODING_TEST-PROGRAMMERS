//나의 풀이
function solution(myString) {
    return myString.replace(/[a-k]/g,'l')
}

//정규표현식을 이용해서 a부터 k까지는 l로 변환시켰다.

//다른 사람의 풀이
function solution(myString) {
    return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}

//문자 자체로도 비교가 되구나 .... 

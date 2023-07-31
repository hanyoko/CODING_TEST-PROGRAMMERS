//나의 풀이
function solution(myString) {
    return myString.toUpperCase();
}

//toUpperCase() 대문자로 변경

//다른 사람의 풀이
function solution(myString) {
    return myString.replace(/[a-z]/g, (match) => match.toUpperCase())
}
//정규 표현식을 사용한 풀이방법


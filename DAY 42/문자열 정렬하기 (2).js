//나의 풀이
function solution(my_string) {
    let smallString = my_string.toLowerCase();
    return smallString.split('').sort().join('')
}

//1. toLowerCase()는 문자열을 전부 소문자로 변경해준다.
//2. 문자열을 정렬하기 위해서는 배열으로 먼저 변환하고 정렬을 해야한다.
//3. split() 는 문자열을 쪼개어 배열을 만들 수 있게한다.
//4. sort() 알파벳 순서로 정렬시킨다.
//5. join() 배열을 다시 문자열로 결합한다.

//다른 사람의 풀이
function solution(s) {
    return [...s.toLowerCase()].sort().join('')
}

//내가 푼 방법과 비슷하지만 스프레드 연산자를 활용해서 더 깔끔하게 풀었다 ... !

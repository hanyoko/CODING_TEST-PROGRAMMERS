//나의 풀이
function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase());
}

//replaceAll을 저번에 공부했던 덕분에 쉽게? 푼 것 같다

//다른 사람의 풀이
function solution(my_string, alp) {
    return [...my_string].map((v) => v === alp ? alp.toUpperCase() : v).join('');
}

//배열로 변환하여 특정 문자에 대해서만 대문자 처리를 해주어 해결하는 방법

function solution(my_string, alp) {
    return my_string.replace(new RegExp(`${alp}`, 'g'), alp.toUpperCase());
}

//정규 표현식을 이용하는 방법도 존재한다.
//다만, alp에 담긴 문자에 대해서 replace를 해야하므로
//new RegExp를 이용하여 정규식을 만든 이후,
//replace의 인자로 전달하는 방법.


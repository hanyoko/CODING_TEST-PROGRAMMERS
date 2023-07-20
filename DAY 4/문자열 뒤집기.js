//나의 풀이
function solution(my_string) {
    let answer = my_string.split('');
    
    answer = answer.reverse();
    return answer.join('');
}

//더 간단하게
function solution(my_string) {
    return my_string.split('').reverse().join('');
}

//다른 사람의 풀이
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}
//split메서드 말고 스프레드 문법을 쓰는 것이 좋네 ..
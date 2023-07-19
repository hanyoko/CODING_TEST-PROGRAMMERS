//나의 풀이
function solution(my_string, n) {
    let answer = "";
    for(let i=0; i<my_string.length; i++){
        for(let j=0; j<n; j++){
            answer += my_string.charAt(i)
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}

//문자반복 구조분해할당, map을 사용해서 치환
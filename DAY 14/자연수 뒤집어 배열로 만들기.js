//나의 풀이
function solution(n) {
    let answer = [];
    let str = String(n).split('').reverse();
    
    for (let i=0; i<str.length; i++){
        answer.push(parseInt(str[i]));    
    }
    return answer;
}

//split 과 reverse를 추가하고 for문으로 str 길이만큼 반복해서 answer에 순서대로 값을 넣어준다.

//다른 사람의 풀이
function solution(n) {
    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

//문자풀이 n+""로 숫자를 문자로 변환 후 split("")으로 배열로 쪼개줌 / 숫자풀이 do ~ while문 사용


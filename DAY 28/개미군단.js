//나의 풀이
function solution(hp) {
    let a = Math.floor(hp / 5);
    let b = Math.floor((hp - (a * 5)) / 3);
    let c = hp - (a * 5) - (b * 3);
    return a + b + c;
}



//다른 사람의 풀이




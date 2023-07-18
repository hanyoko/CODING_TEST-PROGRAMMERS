//나의 풀이
function solution(n, k) {
    var answer = 0;
    
    let free = Math.trunc(n/10)*2000;
    answer = (n*12000) + (k*2000 - free);
    
    return answer;
}

//다른 사람 풀이
function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}

//모르는 문법 풀이
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}
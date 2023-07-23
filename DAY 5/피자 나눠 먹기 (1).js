//나의 풀이
function solution(n) {
    const pizza = n / 7
    var answer = Math.ceil(pizza);
    return answer;
}

//다른 사람의 풀이
function solution(n) {
    return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}
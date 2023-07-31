//나의 풀이
function solution(arr, k) {
    var answer = [];
    return k % 2 === 0 ? answer = arr.map(item => item + k) : answer = arr.map(item => item * k) 
}



//다른 사람의 풀이
const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)



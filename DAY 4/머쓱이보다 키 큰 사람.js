//나의 풀이
const solution = (array, height) => array.filter (a => a > height).length;


//다른 사람의 풀이
function solution(array, height) {
    let answer = 0
    for(i of array) i > height ? answer += 1 : answer
    return answer
}
//나의 풀이
const solution = (num_list, n) => num_list.includes(n) ? 1 : 0;

//이번에도 전에 공부했던 `includes()` 를 활용해서 쉽게 풀 수 있었다 !
//num_list에 n이 포함되어 있으면 1을 return, 아니라면 0을 return !

//다른 사람의 풀이
function solution(num_list, n) {
    return num_list.indexOf(n) >= 0 ? 1 : 0
}

//indexOf() 



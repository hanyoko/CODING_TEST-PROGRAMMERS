//나의 풀이
function solution(array) {
    const middle = Math.trunc(array.length / 2);
    
    const change = array.sort((a, b) => a-b);
    
    return change[middle];
}

//다른 사람의 풀이
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
  }

//내가 작성한 풀이와 비슷하지만 좀 더 간결하게 ...
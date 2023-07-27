//나의 풀이
function solution(n) {

    const str = n.toString();
    const arr = str.split("");
    const sortArr = arr.sort((a, b) => b - a);
    const sortStr = sortArr.join("");
    
    return parseInt(sortStr);
}


//다른 사람의 풀이
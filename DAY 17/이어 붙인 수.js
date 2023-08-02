//나의 풀이
function solution(num_list) {
    let even = num_list.filter((a) => a % 2 === 0);
    let odd = num_list.filter((a) => a % 2 === 1);
    
    let evenSum = even.reduce((acc, cur) => acc + String(cur));
    let oddSum = odd.reduce((acc, cur) => acc + String(cur));
    
    return Number(evenSum) + Number(oddSum);
}



//다른 사람의 풀이




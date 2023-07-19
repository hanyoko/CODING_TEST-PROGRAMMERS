//나의 풀이
function solution(my_string) {
    let answer = eval(my_string);
    return answer;
}


//다른 사람의 풀이
function solution(my_string) {
    const arr = my_string.split(' ').filter(e=>e);
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}

//1. arr.unshift => 배열의 맨 앞에 넣어준다. 2. +arr.shift() => 배열의 맨 앞에서 뺀 것을 integer 3. (arr.shift() === "+" ? 1 : -1) * arr.shift()) => 배열의 맨 앞에서 다시 뺀 것이 +면 1을, -면 -1을 다시 배열의 맨 앞에서 뺀 것에 곱해준다. 
//나의 풀이
function solution(numbers, num1, num2) {
    let answer = [];
    answer = numbers.slice(num1, num2 + 1);
    return answer;
}

//다른 사람의 풀이
function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}

//splice 사용

function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }

    return answer;
}

//for문과 push 사용
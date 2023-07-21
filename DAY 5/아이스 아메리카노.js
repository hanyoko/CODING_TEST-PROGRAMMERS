//나의 풀이
function solution(money) {
    let coffee = 5500;
    let cup = Math.trunc(money / coffee);
    let answer = [cup, money % coffee];
    return answer;
}

//다른 사람의 풀이
function solution(money) {
    var answer = [];

    answer.push(parseInt(money/5500));
    answer.push(money%5500);

    return answer;
}

//push 사용
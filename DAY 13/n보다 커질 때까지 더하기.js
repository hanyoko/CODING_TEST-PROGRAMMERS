//나의 풀이
function solution(numbers, n) {
    return numbers.reduce((acc, cur) => acc > n ? acc : acc + cur, 0)
}

//reduce

//다른 사람 풀이
function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}

//while 사용
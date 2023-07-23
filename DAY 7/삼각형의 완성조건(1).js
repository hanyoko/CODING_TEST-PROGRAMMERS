//나의 풀이
function solution(sides) {
    let answer = 0;
    sides.sort((a, b) => a-b);
    let sum = sides[0] + sides[1];
    if(sum > sides[2]) return 1;
    return 2;
}

//다른 사람의 풀이
function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const sum = sides.reduce((a,b) => a + b, 0) - max;

    answer = max < sum? 1 : 2;

    return answer;
}

//reduce를 사용
//나의 풀이
function solution(dot) {
    let answer = 0;
    dot[0] > 0 && dot[1] > 0 ? answer = 1 : null;
    dot[0] < 0 && dot[1] > 0 ? answer = 2 : null;
    dot[0] < 0 && dot[1] < 0 ? answer = 3 : null;
    dot[0] > 0 && dot[1] < 0 ? answer = 4 : null;
    
    return answer;
}

//다른 사람의 풀이
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

//구조 분해 ...
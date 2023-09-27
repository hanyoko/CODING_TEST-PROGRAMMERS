//나의 풀이
function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x4);
}

// x1 || x2 ===> 양쪽 중 하나가 true면 true, 그렇지 않으면 false
// (x1 || x2) && (x3 || x4) ===> 양쪽 모두가 true면 true, 그렇지 않으면 false

//다른 사람의 풀이
function solution(x1, x2, x3, x4) {
    let answer = false;
    let A = false;
    let B = false;

    if(x1 || x2) {
        A = true;    
    }

    if(x3 || x4) {
        B = true;
    }

    if(A && B) {
        answer = true;
    }

    return answer;
}



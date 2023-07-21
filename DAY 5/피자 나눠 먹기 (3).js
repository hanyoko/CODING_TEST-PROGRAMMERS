//나의 풀이
const solution = (slice, n) => Math.ceil(n/slice);

//다른 사람의 풀이
function solution(slice, n) {
    let answer = 0;
    while(n > slice * answer){
        answer++;
    }
    return answer;
}

//while을 사용한 방법
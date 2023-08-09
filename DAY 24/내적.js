//나의 풀이
function solution(a, b) {
    var answer = 0;
    for(let i=0; i<a.length; i++){
        answer += a[i] * b[i];
    }
    return answer;
}

//for문으로 i를 돌려주고, 각 배열의 순서마다 곱해주고 answer에 더해주는 방법으로 풀었다
//이런 알고리즘 문제는 확실히 이해가 되어 있는 것 같다 !!

//다른 사람의 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

//인자에 _ 를 넣는 것은 사용하지 않는 인자일 경우 넣는 것이다 !

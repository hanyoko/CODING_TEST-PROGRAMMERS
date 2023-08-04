//나의 풀이
function solution(absolutes, signs) {
    var answer = [];
    for(let i=0; i<absolutes.length; i++){
    signs[i] === false ? answer.push(absolutes[i] * -1) : answer.push(absolutes[i]);
    }
    return answer.reduce((a, b) => a + b);
}

/*
테스트 1 〉	통과 (0.23ms, 33.6MB)
테스트 2 〉	통과 (0.25ms, 33.5MB)
테스트 3 〉	통과 (0.24ms, 33.5MB)
테스트 4 〉	통과 (0.25ms, 33.5MB)
테스트 5 〉	통과 (0.22ms, 33.4MB)
테스트 6 〉	통과 (0.23ms, 33.5MB)
테스트 7 〉	통과 (0.26ms, 33.5MB)
테스트 8 〉	통과 (0.35ms, 33.4MB)
테스트 9 〉	통과 (0.22ms, 33.5MB)
*/

//map을 돌려서 풀려고 했다가 오류가 발생하길래 .. 빈배열을 만들고 for문을 사용해서 배열의 순서에 맞는 값을 push 해줬다
//그리고 return 값에서 reduce를 사용해서 모든 값을 돌려줬다.
//풀고 나니까 지저분한 것 같아서 조금 정리해보려 다시 수정해보았다.

function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length; i++){
    signs[i] === false ? answer += absolutes[i] * -1 : answer +=absolutes[i];
    }
    return answer;
}

/*
테스트 1 〉	통과 (0.15ms, 33.5MB)
테스트 2 〉	통과 (0.15ms, 33.5MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.14ms, 33.4MB)
테스트 5 〉	통과 (0.15ms, 33.4MB)
테스트 6 〉	통과 (0.25ms, 33.4MB)
테스트 7 〉	통과 (0.14ms, 33.4MB)
테스트 8 〉	통과 (0.15ms, 33.6MB)
테스트 9 〉	통과 (0.15ms, 33.4MB)
*/

//두번째 방법이 속도가 더 빨랐다 역시
//빈배열에 push로 값을 입력해주는 과정을 없애고 조건에 맞는 값을 바로 answer에 더해주는 방법으로 수정해보았다.
//map을 제대로 이해했다고 생각했는데, 오늘 사용하려니 갑자기 오류가 자꾸 발생했다 .. 다시 공부해야겠다
//알아도 복습이 중요한 것 같다 !!!!

function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length; i++){
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}


//다른 사람의 풀이
function solution(absolutes, signs) {
    return absolutes.map((v, i) => (signs[i] ? 1 : -1) * v).reduce((a, c) => a + c, 0);
}

/*
테스트 1 〉	통과 (0.33ms, 33.6MB)
테스트 2 〉	통과 (0.19ms, 33.5MB)
테스트 3 〉	통과 (0.18ms, 33.4MB)
테스트 4 〉	통과 (0.27ms, 33.5MB)
테스트 5 〉	통과 (0.32ms, 33.4MB)
테스트 6 〉	통과 (0.18ms, 33.6MB)
테스트 7 〉	통과 (0.21ms, 33.5MB)
테스트 8 〉	통과 (0.19ms, 33.5MB)
테스트 9 〉	통과 (0.24ms, 33.5MB)
*/

//아 .... map 코드 작성이 문제가 아니라 reduce에서 마지막 인자값 , 0을 안 했다 ... ㅎㅎㅎ
//그래서 자꾸 오류가 생겼구나
//그래도 map을 사용하는 것보다 다른 방법로 풀려고 도전했던 방법이 더 빠르게 풀어진다면 .. 오히려 좋아인가 ?

function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

/*
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.10ms, 33.6MB)
테스트 3 〉	통과 (0.09ms, 33.4MB)
테스트 4 〉	통과 (0.10ms, 33.6MB)
테스트 5 〉	통과 (0.18ms, 33.4MB)
테스트 6 〉	통과 (0.09ms, 33.5MB)
테스트 7 〉	통과 (0.09ms, 33.5MB)
테스트 8 〉	통과 (0.09ms, 33.4MB)
테스트 9 〉	통과 (0.09ms, 33.4MB)
*/

//이렇게 푸신 분도 있었다.
//map 없이 reduce를 이용하고 삼항연산자를 활용해서 한번에 끝 .... 
//방법이 무궁무진하다 ..
//속도도 제일 빠르네
//이렇게 푸신 분의 글에서 사람들이 댓글로 멋있는 코드와 좋은 코드라는 주제로 갑론을박이 있는 걸 봤다 ..
//for문이 더 좋다고 말하시던대 무엇이 더 좋은 것일까
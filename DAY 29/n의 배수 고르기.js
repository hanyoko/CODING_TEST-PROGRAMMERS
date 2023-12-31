//나의 풀이
function solution(n, numlist) {
    var answer = [];
    for(let i=0; i<numlist.length; i++){
        if(numlist[i] % n === 0){
            answer.push(numlist[i]);
        }
    }
    return answer;
}

/*
테스트 1
입력값 〉	3, [4, 5, 6, 7, 8, 9, 10, 11, 12]
기댓값 〉	[6, 9, 12]
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	5, [1, 9, 3, 10, 13, 5]
기댓값 〉	[10, 5]
실행 결과 〉	테스트를 통과하였습니다.
테스트 3
입력값 〉	12, [2, 100, 120, 600, 12, 12]
기댓값 〉	[120, 600, 12, 12]
실행 결과 〉	테스트를 통과하였습니다.
테스트 결과 (~˘▾˘)~
3개 중 3개 성공
*/

//numlist의 값이 n으로 나누어 진다면 answer 배열에 push하는 방법으로 풀었다.


//다른 풀이

//전에 풀면서 다시 공부했던 filter 를 사용하는 방법으로도 풀어보았다 !

function solution(n, numlist) {
    return numlist.filter((i) => i % n === 0);
}

/*
테스트 1
입력값 〉	3, [4, 5, 6, 7, 8, 9, 10, 11, 12]
기댓값 〉	[6, 9, 12]
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	5, [1, 9, 3, 10, 13, 5]
기댓값 〉	[10, 5]
실행 결과 〉	테스트를 통과하였습니다.
테스트 3
입력값 〉	12, [2, 100, 120, 600, 12, 12]
기댓값 〉	[120, 600, 12, 12]
실행 결과 〉	테스트를 통과하였습니다.
테스트 결과 (~˘▾˘)~
3개 중 3개 성공
*/





//틀린 풀이
function solution(arr) {
    var answer = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] === arr[j][i]){
                return answer = 1;
            }else {
                return answer = 0;
            }
        }
    }
    return answer;
}

/*
테스트 1
입력값 〉	[[5, 192, 33], [192, 72, 95], [33, 95, 999]]
기댓값 〉	1
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	[[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]
기댓값 〉	0
실행 결과 〉	실행한 결괏값 1이 기댓값 0과 다릅니다.
테스트 결과 (~˘▾˘)~
2개 중 1개 성공
*/

//처음에 풀었던 풀이 .. 이렇게 하는 거라고 생각하고 풀었는데 실패가 출력되어서 당황했다.
//그래서 뭐가 잘못되었는지 잠시 아니 오래 .. 코드를 차근차근 보면서 생각해봤다
//문제에서 원하는 배열은 모든 원소가 arr[i][j] = arr[j][i]에 만족하는 배열이다.
//그런데 어떤 배열이든 i = j 인 arr[i][j] = arr[j][i]는 같을테니 if(arr[i][j] === arr[j][i]) 이 조건에 만족이 되어서 0을 반환해야 할 배열도 1을 반환하게 되는 것 ...

//나의 풀이
function solution(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] !== arr[j][i]){
                return 0;
            }
        }
    }
    return 1;
}

//그래서 비교연산자를 부정 연산자로 바꾸고 for문 밖에 return 값을 주어서 해결했다
//다른 사람들도 나처럼 비교연산자에서 생기는 오류를 부정 연산자로 변경 후에 해결한 사람들이 많이 보였다 댓글에서
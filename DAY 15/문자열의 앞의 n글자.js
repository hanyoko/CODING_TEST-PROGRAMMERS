//나의 풀이
function solution(my_string, n) {
    var answer = [];
    for (let i=0; i<n; i++){
        answer.push(my_string[i])
    }
    return answer;
}

/*
테스트 1
입력값 〉	"ProgrammerS123", 11
기댓값 〉	"ProgrammerS"
실행 결과 〉	실행한 결괏값 ["P","r","o","g","r","a","m","m","e","r","S"]이 기댓값 "ProgrammerS"과 다릅니다.
테스트 2
입력값 〉	"He110W0r1d", 5
기댓값 〉	"He110"
실행 결과 〉	실행한 결괏값 ["H","e","1","1","0"]이 기댓값 "He110"과 다릅니다.
테스트 결과 (~˘▾˘)~
2개 중 0개 성공
*/

//처음에 생각했던 구상은 배열에 for문을 돌린 후 배열의 순서마다 push를 해줘서 값을 출력받는 것이었다.
//그런데 결과값에 콤마가 생겨서 당황했다 ...
//생각해보니 join을 해주지 않아서 다시 작성 ..

function solution(my_string, n) {
    var answer = [];
    for (let i=0; i<n; i++){
        answer.push(my_string[i])
    }
    return answer.join("");
}

/*
테스트 1
입력값 〉	"ProgrammerS123", 11
기댓값 〉	"ProgrammerS"
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	"He110W0r1d", 5
기댓값 〉	"He110"
실행 결과 〉	테스트를 통과하였습니다.
테스트 결과 (~˘▾˘)~
2개 중 2개 성공
*/

//join으로 배열을 완성시켜주었다 !
//풀고 나니까 전에 비슷한 알고리즘을 풀면서 배웠던 slice가 생각나서 지우고 새로운 방법으로 다시 풀었다.

function solution(my_string, n) {
    return my_string.slice(0, n);
}

//slice을 활용한 풀이 방법 !
//slice(시작인덱스, 추출 종료점 인덱스)
//종료 직전까지만 추출되니 헷갈리지 않게 주의해야한다 !

//다른 사람의 풀이




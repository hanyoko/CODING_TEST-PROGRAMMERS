//나의 풀이
function solution(x, n) {
    var answer = [];
    for (let i=1; i<=x*n; i++){
        if(i % x == 0){
            answer.push(i);    
        }
    }
    return answer;
}

/*
테스트 1
        입력값 〉	2, 5
        기댓값 〉	[2, 4, 6, 8, 10]
    실행 결과 〉	테스트를 통과하였습니다.
테스트 2
        입력값 〉	4, 3
        기댓값 〉	[4, 8, 12]
    실행 결과 〉	테스트를 통과하였습니다.
테스트 3
        입력값 〉	-4, 2
        기댓값 〉	[-4, -8]
    실행 결과 〉	실행한 결괏값 []이 기댓값 [-4,-8]과 다릅니다.
테스트 결과 (~˘▾˘)~
    3개 중 2개 성공
*/

//이번에는 코드 실행부터 오류가 있었다
//테스트 케이스 3개 중 2개는 성공이 되었지만, 음수값을 가진 테스트 케이스에서는 값을 출력하지못했다.


function solution(x, n) {
    var answer = [];
    for (let i=1; i<=n; i++){
         answer.push(x*i);  
    }
    return answer;
}

//다시 코드를 짜봐야겠다고 보니 for문의 값부터 수정해야했었다.
//i의 조건을 n으로 두고 조건문 없이 x*i의 값을 push 해주니 음수일 때 생기는 오류도 해결가능했다 !

//다른 사람의 풀이
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
//fill과 map을 사용하는 풀이 ... 놀랍다
//공부해야지

//map() 함수는 값과 인덱스를 인자로 받아 자동으로 for문을 돌려 값을 빼도록 해준다.
//쉽게 말해 map() 함수의 값 인자는 향상된 for문의 item 인자와 같은 역할,
//map() 함수의 인덱스 인자는 기본 for문 방식의 index 와 같은 역할이라 보면 된다.

const arr = [ 1, 2, 3, 4, 5 ];

//일반 함수 형태
arr.map(function(item, index) {
    console.log(index+"번 값", item);
});

//화살표 함수 형태
arr.map((item, index) => {
    console.log(index+"번 값", item);
});

//fill() 메서드는 arr.fill(value [, start [, end]]) 의 구문으로,

//value : 배열을 채울 값
//start : 시작 인덱스
//end : 끝 인덱스 ( end가 3이면, 3은 포함되지 않는다 )
//로 작성이 가능하다.

//만약 같은 숫자가 아닌 1부터 45까지 모든 숫자를 출력하고 싶다면?
//Array(45). fill(). map((v, i)=> i+1); 을 작성한다
//여기서 fill()로 작성할 경우 undefined로 배열이 가득 채워지는데 map을 통해서 v라는 콜백 함수와 i라는 인덱스를 받아서
//새로운 배열을 생성해준다.
//참고로 인덱스는 0부터 시작하여 i+1을 리턴하면 숫자를 1부터 시작할 수 있다  ( i+1이 아닌 i만 리턴하면 0부터 44로 채워진다)
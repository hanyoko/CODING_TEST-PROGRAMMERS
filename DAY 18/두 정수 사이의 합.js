//나의 풀이
function solution(a, b) {
    var answer = 0;
    
    if(a <= b){
        for (a; a<=b; a++){
            answer += a;
        }    
    }else {
        for (b; b<=a; b++){
            answer += b;
        }
    }
    return answer;
}

//먼저 a가 b보나 작거나 같은 경우에는 for문을 이용하여 a부터 b까지 증가할 때 답에 a를 하나씩 더해준다.
//두번째로 b가 a보다 작거나 같은 경우에는 for문을 이용하여 b부터 a까지 증가할 때 답에 a를 하나씩 더해준다.
//여기서 자바스크립트의 += 는 더하기 할당 연산자로 오른쪽 a의 값을 변수에 더한 결과를 다시 변수에 할당

//다른 사람의 풀이
function solution(a, b) {
    var answer = 0;
    answer = (a+b) * (Math.abs(b-a)+1)/2
    return answer;
}

//1) Math.abs()는 숫자의 절댓값을 반환한다. 
//2) 가우스 공식을 사용한다. n(n+1)/2
//수학 공식 활용

function solution(a, b) {
    var answer = 0;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    for(var i=min; i <= max; i++){
        answer+=i;
    }
    return answer;
}

//1) a, b 중 작은 값과 큰 값을 찾는다.
//2) 작은 값을 for 문의 시작에 두고 max 값까지 for문을 회전한다.
//3) 작은값과 큰 값 사이의 값을 더한다.

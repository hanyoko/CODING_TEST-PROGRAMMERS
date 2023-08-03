//나의 풀이
function solution(seoul) {
    let answer = '';
    for (let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            answer = `김서방은 ${i}에 있다`
        }
    }
    return answer;
}

//만약 seoul의 i번째 인덱스가 문자열 Kim과 일치한다면 "김서방은 i에 있다"를 출력

//다른 사람의 풀이
function solution(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

//seoul에 Kim은 오직 한 번만 나오며, Kim은 반드시 seoul 안에 포함되어 있기 때문에 indexOf 메소드를 사용해서 문제를 풀 수 있었다.
//indexOf 메소드는 배열 내의 요소의 최초의 인덱스를 반환한다. 발견되지 않으면 -1을 반환한다.


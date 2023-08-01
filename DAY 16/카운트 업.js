//나의 풀이
function solution(start, end) {
    let answer = [];
    for(start; start<=end; start++){
        answer.push(start);
    }
    return answer;
}

//빈배열을 생성하고, for문을 사용해서 start부터 end까지의 범위 조건을 지정했다.
//그리고 숫자가 1씩 증가하도록 하고, end까지 숫자가 다다를 때까지 push로 빈배열 answer에 삽입해주었다 !

//다른 사람의 풀이
function solution(start, end) {
    return Array(end-start+1).fill(start).map((x,idx) => x+idx);
}

//Array생성자를 길이를 지정한 배열을 생성하고, 그 배열의 값들을 모두 start값으로 채운 다음
//map으로 배열을 돌면서 인덱스값만큼 더해주는 코드이다.
//인덱스는 0부터 시작되기때문에 start부터 end까지 원하는 값을 얻을 수 있다.



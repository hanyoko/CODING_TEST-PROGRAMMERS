//나의 풀이
function solution(my_str, n) {
    var answer = [];
    var j = my_str.length / n;  //for문을 몇번 돌릴지 
    
    for(var i=0; i<j; i++){ //n개로 몇번 나뉘는지 횟수만큼 
        answer.push(my_str.substr(0, n)); // 문자열을 n개 만큼 잘라서 배열에 넣는다.
        my_str = my_str.substr(n, my_str.length); //배열에 넣은 n만큼을 지운다.
    }
    return answer;
}

/*
문자열의 길이를 n개씩 몇번 나눠야 하는지 구해서 for문으로 돌려야겠다고 생각했다.
앞에서 n개씩 잘라서 배열에 넣어야해서 substr 사용했다.

substr

문자열의 특정 부분을 extract 함
특정 위치에서 시작해서 특정 숫자만큼 문자열을 반환

문법

substring(start)
substring(start, length)

start: 해당 인덱스가 가리키는 문자열 포함
length (optional): extract 할 문자열의 길이(숫자)
*/

//다른 사람의 풀이
function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

/*
정규표현식을 사용한 풀이!

위의 코드는 생성자 방식으로 정규 표현식을 생성해 match() 메서드로 일치하는 부분을 배열로 반환해주었다.

RegExp() 정규 표현식을 생성하는 내장 객체로 검색, 대체, 분리 등과 같은 문자열 작업을 수행하는 데 사용됨.

match() 문자열에서 정규 표현식과 일치하는 부분을 찾아 배열로 반환하는 문자열 메서드. 이 메서드를 사용하면 주어진 문자열에서 특정 패턴을 찾을 수 있음. 정규 표현식과 함께 사용되며, 패턴과 일치하는 모든 부분을 찾아 배열로 반환
*/
//나의 풀이
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    let answer = [...rsp].map(v => arr[v]).join('');
    return answer;
}

//비구조화 할당을 이용해서 key 값으로 value를 뽑아와서 문자열을 합치는 방법으로 풀어보았습니다 !
//각각 대응하는 게 있으면 객체를 사용한다 !

//다른 사람의 풀이
function solution(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
}

//삼항연산자에 삼항연산자를 사용한 방법 ... ?
//처음 봤다 ... 다음에 사용해봐야지

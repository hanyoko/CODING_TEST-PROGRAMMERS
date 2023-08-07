//나의 풀이
function solution(my_string, k) {
    return my_string.repeat(k);
}

//전에 공부했던 `repeat()`을 활용했다 …. !
//처음에는 for문을 사용해서 풀려고 for문을 적다가 `repeat()` 가 다행히(?) 기억났다
//공부하는 만큼 쉽게 풀 수 있다 !!!!!!! 공 부 하 자 !

//다른 풀이
function solution(my_string, k) {
    var answer = '';

    for(let i = 0; i<k; i++){
        answer += my_string;
    }

    return answer;
}

//처음에 하려고 했던 for문을 이용한 방법
 
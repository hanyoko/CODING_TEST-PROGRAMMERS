//나의 풀이
function solution(array, n) {
    var answer = 0;
    for (let i=0; i<array.length; i++){
        if(array[i] == n ){
            answer += 1
        }
    }
    return answer;
}

//다른 사람 풀이
function solution(array, n) {
    return array.filter(v=>v===n).length;
}

//filter를 사용하는 방법 ...
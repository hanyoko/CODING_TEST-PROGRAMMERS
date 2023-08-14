//나의 풀이
function solution(arr) {
    return arr.join("");
}

//join을 사용해서 문자열로 간단하게 변환해줬다
//공부한 보람이 점점 더 느껴진다 ... !

//다른 사람의 풀이
function solution(arr) {
    var answer = '';

    for(let i of arr){
        answer += i;
    }

    return answer;
}

//for of 문을 사용해서 문자열을 만들어주는 방법

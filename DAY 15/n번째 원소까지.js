//나의 풀이
function solution(num_list, n) {
    var answer = [];
    for (let i=0; i<n; i++){
        answer.push(num_list[i])
    }
    return answer;
}

//for문에 push로 배열에 삽입

//다른 사람의 풀이
function solution(num_list, n) {
    var answer = [];
    answer = num_list.slice(0,n);
    return answer;
}

//이문제 전에 활용했던 slice도 활용가능하다 !

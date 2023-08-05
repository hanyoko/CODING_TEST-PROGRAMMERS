//나의 풀이
function solution(num_list) {
    var answer = [];
    num_list.sort((a, b) => a-b);
    for(let i=5; i<num_list.length; i++){
        answer.push(num_list[i]);
    }
    return answer;
}

//sort로 오름차순으로 정리를 먼저 했다.
//그리고 5등까지는 없애야하기에 변수 i를 5로 설정하고, num_list의 길이만큼 for문을 돌렸다
//push를 해주면 끝 .... !!

//다른 사람의 풀이
function solution(num_list) {
    var answer = [];
    return answer = num_list.sort((a, b) => {return a - b;}).slice(5);
}

//slice를 까먹고 있었다 ...... 
//다시 복습하자 .... !

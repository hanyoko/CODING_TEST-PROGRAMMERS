//나의 풀이
function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        answer = num_list.reduce((acc, cur) => acc + cur);
    }else {
        answer = num_list.reduce((acc, cur) => acc * cur);
    }
    return answer;
}



//다른 사람의 풀이




//나의 풀이
function solution(num_list) {
    return num_list.reverse();
}

//간단하게 풀었다고 좋아했는데 .. 의외로 사람들이 reverse 함수를 알고 있느냐가 아니라 배열을 바꾸는 알고리즘을 구현하라는 의미가 아니냐 에 대해 갑론을박이 있었다. 그래서 다시 다른 방법으로 풀어본 ....


//다른 사람 풀이
function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}
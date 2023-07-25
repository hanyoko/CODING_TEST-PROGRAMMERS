//나의 풀이
function solution(num_list, n) {
    var answer = [];
    n = n - 1;
    
    for (n; n<num_list.length; n++)
    answer.push(num_list[n])
    return answer;
}

//다른 사람의 풀이
function solution(num_list, n) {
    return num_list.slice(n - 1);
  }

//slice()를 사용하면 더 간단하다 .....
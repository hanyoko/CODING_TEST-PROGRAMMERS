//나의 풀이
function solution(myString) {
    return myString.split("x").map(a => a.length);
}

//map을 사용해서 풀었는데 가장 많이 푼 풀이 방법에 속했다 ... !

//다른 사람의 풀이
function solution(myString) {
    var answer = [];
    let temp = myString.split("x");
    for (let i = 0; i < temp.length; i++) {
        answer.push(temp[i].length);
    }
    return answer;
}

//for문을 활용해서 빈 배열에 push 해주는 방법

//나의 풀이
function solution(n) {
    let answer = [];
    
    for(let i=0; i<=n; i++){
        if(i % 2 === 1){
            answer.push(i)
        }
    }
    return answer;
}


//다른 사람의 풀이
function solution(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}

//i+=2를 하면 조건문이 필요없네 .....
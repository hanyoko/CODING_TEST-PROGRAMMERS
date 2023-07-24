//나의 풀이
function solution(my_string) {
    const num = my_string.split("");
    let answer = 0;
    
    for(let i=0; i<num.length; i++){
        if(Number(num[i])) answer += Number(num[i])
    }
    return answer;
}

////하나하나 잘렸을 때 number면 answer 담아서 더해주는 코드

//다른 사람의 풀이
function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}

//정규표현식 사용 ...
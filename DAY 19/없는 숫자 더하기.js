//나의 풀이
function solution(numbers) {
    let answer = 0;
    for(let i=0; i<10; i++){
        !numbers.includes(i) ? answer += i : answer;
    }
    return answer;
}

//임의의 숫자를 0~9까지 for문을 이용해서 만들어주고,
//numbers에 포함되어 있지 않으면 answer에 그 값을 더해준다 !
//포함되어 있다면 answer을 그대로 return 해준다

//다른 사람의 풀이
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

//1~9까지의 합에서 주어진 배열 합 값 빼기



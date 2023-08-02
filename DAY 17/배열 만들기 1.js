//나의 풀이
function solution(n, k) {
    var answer = [];
    for (let i=k; i<=n; i+=k){
        answer.push(i);
    }
    return answer;
}

//k의 배수를 구하기 위해 for문을 사용했다.
//i는 k부터 n까지 i +=k 하도록 만들어주었다.
//i += k 는 i = i + k를 줄여 쓴 것으로 i값에 k를 더하여 다시 i에 값을 넣어주는 것이다. 

//다른 풀이
function solution(n, k) {
    var answer = [];

    for(let i = 1; i<=n; i++){
        if(i%k == 0){
            answer.push(i)
        }
    }

    return answer;
}

//처음에 풀었던 풀이다.
//제출 하기 전에 i+=k 를 활용하면 배수를 쉽게 구할 수 있을 것 같아서 수정했다 !



//나의 풀이
function solution(n, t) {
    for(let i=0; i<t; i++){
        n *= 2; 
    }
    return n;
}

//for 문을 이용해 입력 n의 값이 t시간 동안 시간 당 두배만큼 증가할 수 있도록 설정하였고, 해당 n값을 return 하는 방법으로 풀었다

//다른 사람의 풀이
function solution(n, t) {
    return n*Math.pow(2,t);
}

//제곱근 함수인 'Math.pow' 메서드를 이용해서 입력 n의 값에 t시간 동안 2배씩 증가할 수 있도록 하여 푸는 방법

//처음에 Math.pow를 사용해서 풀다가 Math.pow(n, t)으로 풀었더니 곱하기 2가 아닌 제곱근으로 계산되어 실패했었다 ..
//n이 아니라 2로 했으면 되는 건데 for문으로 아예 바궈서 풀어버렸다 ㅎ

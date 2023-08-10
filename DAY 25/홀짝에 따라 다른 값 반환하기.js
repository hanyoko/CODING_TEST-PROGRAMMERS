//나의 풀이
function solution(n) {
    var answer = 0;
    if(n % 2 !== 0){
        for(let i=1; i<=n; i++){
            if(i % 2 == 1){
                answer += i;   
            }
        }
    }else {
        for(let j=1; j<=n; j++){
            if(j % 2 == 0){
                answer += (j*j);
            }
        }
    }
    return answer;
}

//반복문과 조건문이 반복되는 풀이 방법 .. 깔끔한 방법으로 풀었어야 했는데 ...

//다른 사람의 풀이
function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
}

//n이 짝수일 때는 등차수열의 합 공식을 적용하였고,
//n이 홀수일 때는 자연수 거듭 제곱의 합을 구하는 공식을 적용한 것으로 보인다.
//반복문과 조건문을 활용하지 않는 풀이 방법 !

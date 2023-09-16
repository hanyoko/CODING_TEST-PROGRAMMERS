//나의 풀이
function solution(num_list) {
    var answer = 0;
    const fun =(num)=>{
        let c=num;
//2. c가 1이라면 c를 리턴하여 재귀함수를 끝낸다.
        if(c===1) return c;
//3. c가 짝수라면 c/2 해준다.
//4. 연산이 한번 들어갔으니 answer에 1을 더해준다.
        if(c%2===0) {
            answer++
            c=c/2;
        }
//5. c가 홀수라면 (c-1)/2해준다.
//6. 연산이 한번 들어갔으니 answer에 1을 더해준다. 
        else if(c%2===1) {
            answer++
            c=(c-1)/2;
        }
// 7. 재귀함수를 계속 돌려준다. 
        return fun(c)
    }
// 1. num_list를 순회하여 재귀함수 fun()함수를 실행한다.
    for(let c of num_list){
       fun(c)
    }
    return answer;
}

//다른 사람의 풀이
function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}

//toString() 으로 진수로 바꾸는 방법 ..
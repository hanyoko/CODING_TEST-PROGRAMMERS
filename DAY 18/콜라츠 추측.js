//나의 풀이
function solution(num) {
    var answer = 0;
    
    for(let i=0; i<500; i++){   // 500번까지만 반복
        if(num !== 1){  // 1이 아닌 경우
            num = num % 2 === 0 ? num / 2 : num * 3 + 1     // 계산진행
        }else { // 1인 경우
            return answer = i   // 현재 횟수를 출력
        }
    }
    return answer = -1; // 500번을 실행했지만 return된 값이 없는 경우
}



//다른 사람의 풀이
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

//while문에 조건문을 사용하는 방법 !



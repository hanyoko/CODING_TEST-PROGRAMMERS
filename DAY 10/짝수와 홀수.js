//나의 풀이
function solution(num) {   
    if(num % 2 !== 0){
        return "Odd"
    }else {
        return "Even"
    }
}

//풀고 나니까 굳이 !== 0을 넣지 않아도 될 것 같다

//다른 사람의 풀이
function solution(num) {
    return num % 2 ? "Odd" : "Even"
  }

//머리에 생각나는대로 먼저 적다보니 삼항연산자 보다는 전에 익숙하던 조건문이 먼저 적힌다 ....
//자주 응용하는 버릇을 들이자 ..... !!!
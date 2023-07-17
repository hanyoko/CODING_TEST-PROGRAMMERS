//나의 풀이
function solution(num1, num2){
    if(num1 == num2){
        return 1;
    }else{
        return -1;
    }
}
//삼항연산자를 두고 if else 문을 사용했다 ....

//다른 사람의 풀이
function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}
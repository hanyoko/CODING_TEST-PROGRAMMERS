//틀린 풀이
function solution(number) {
    return Number(number) % 9;
}

console.log(solution("123")) //6
//왜 2가 아니라 5가 나오는 것일까?
console.log(solution("78720646226947352489")) //5

//숫자는 64비트 부동소수점 형식으로 명시되어 있으며,
//숫자를 저장하려면 정확히 64비트가 필요하다. 그래서 숫자가 너무 커지면 64비트 공간이 넘쳐서 Infinity로 처리된다.

console.log(78720646226947352489) //78720646226947360000
//위의 코드처럼 64비트를 넘는 숫자를 출력하면 64비트가 넘는 숫자는 저장이 안되어 위 코드처럼 출력된다.
//그래서 console.log(solution("78720646226947352489")) 의 값이 2가 아닌 78720646226947360000를 9로 나눴을때 나오는 나머지 값인 5가 나오는 것이다.

//나의 풀이
function solution(number) {
    // 인수로 받은 값을 배열로 만들어 준 후 다 더해 준 후 9로 나눈 나머지 값을 출력한다. 
        return number.split('').map(Number).reduce((a, b) => a + b) % 9;
    }
    
    console.log(solution("123"));


//다른 사람의 풀이
const solution = n => BigInt(n) % 9n;

//BigInt를 활용해서 간단하게 ... !!!
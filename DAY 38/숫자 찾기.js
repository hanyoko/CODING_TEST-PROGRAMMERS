//나의 풀이
function solution(num, k) {
    return String(num).indexOf(k) !== -1 ? String(num).indexOf(k) + 1 : -1;
}

//주어진 num을 문자형으로 변경 후 indexOf() 매서드를 이용, 삼항 연산자를 이용하여
//값이 -1이 아니면 ( 숫자가 존재하면 ) 해당 인덱스 + 1을 리턴, 그외의 경우 -1을 리턴하도록 풀었다 !


//다른 사람의 풀이
const solution = (num, k) => [...num+''].indexOf(k+'') !== -1 ? [...num+''].indexOf(k+'')+1 : -1

//indexOf 함수를 사용하여 해당 인덱스의 번호를 조회하는 방법


//다른 사람의 풀이 2
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}

//k가 존재하지 않아서 -1이 반환되면 -1+1 = 0 즉, false가 돼서 || 오른쪽의 truthy인 -1이 반환된다 .... !
//|| 연산자를 이렇게 쓰면 좋구나 ...
//나의 풀이
function solution(x) {
    let arr = String(x).split('');
    let sum = 0;
    
    for (let i=0; i<arr.length; i++){
        sum += Number(arr[i])
    }
    
    return x % sum === 0 ? true : false;
    
}

//먼저 x를 split()을 사용해 자릿수로 나누어준다.
//String(x).split('');을 사용하면 한 번에 문자열을 잘라서 배열에 저장할 수 있다.
//for문을 돌려 나눈 자릿수들을 더해준다.
//x와 더한 값을 나누어 반환되는 나머지를 판별해 조건에 따라 출력한다.
//삼항연산자를 사용해 리턴 값을 출력했다.
//복잡한 조건문은 삼항연산자를 사용하기엔 가독성이 떨어진다는 단점이 있지만, 여기에서 간단한 조건문은 오히려 삼항연산자가 가독성이 뛰어난다.

//다른 사람의 풀이
function solution(x) {
    let num = (x+'').split('').map(Number).reduce((a,b) => a + b);
    return x % num === 0 ;
}

//입력받은 숫자를 문자열로 변환한다.
//split을 이용해 배열로 만들어주고 map을 이용해 string으로 되어있는 배열값을 number로 변환한다.
//reduce를 통해 각 자릿수에 더하기를 해준다.
//입력받은 숫자와 더해진 결괏값에 나머지가 0이 되면 true를 아니면 false를 반환한다.



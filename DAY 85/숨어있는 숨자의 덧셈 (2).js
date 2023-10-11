//나의 풀이
function solution(my_string) {
    const nums = my_string.match(/[0-9]+/g);
    return nums ? nums.map(num => Number(num)).reduce((a, c) => a+c) : 0;
}

/*
문자가 아닌 숫자를 모두 선택하는 정규식이 있다는 것을 처음알았다.

이 정규식이 해석을 이렇게 한다.

(예: /[0-9]+/g)

정규식 / 사이에 모든 숫자를 매칭하는 [0-9]에 

합을 뜻하는 +기호를 붙여 모든 숫자만을 매칭해서 더해주고 발생할 모든 패턴에 대한 전체 검식을 뜻하는 플래그인 g를 붙여 만들었다.
*/

//다른 사람의 풀이
function solution(my_string) {
    let sum = 0;
    let str = my_string.replace(/[A-z]/g, " ").split(' ');
    for (let i=0; i<str.length; i++){
        if (!isNaN(str[i])){
            sum += Number(str[i]);
        }
    }
    return sum;
}

/*
예를 들어 주어진 문자열이 "aAb1B2cC34oOp"라면, 여기의 숫자 1+2+34 = 37이 반환되어야 한다.

주의해야 할 점이 연속된 수는 하나의 숫자로 간주한다.

정규표현식을 사용해 문자열에서 대문자~소문자 모두를 공백으로 바꿔 없애준다.

그러면 "   1 2  34   " 이렇게 나오는데, 수정하기 위해서 공백을 기준으로 쪼개 배열로 만들어준다.

배열로 만든 후에는 for문을 돌려 해당 요소가 !isNaN (숫자)라면 sum에 해당 값을 더하게 해준다.

이 때 요소는 숫자가 아니기 때문에 *1을 하거나 Number, parseInt로 숫자화 시켜주어야 한다.
*/
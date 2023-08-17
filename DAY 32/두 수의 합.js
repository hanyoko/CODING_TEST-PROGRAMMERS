//틀린 풀이

function solution(a, b) {
    var answer = Number(a) + Number(b);
    return String(answer);
}


테스트 1
        입력값 〉	"582", "734"
        기댓값 〉	"1316"
    실행 결과 〉	테스트를 통과하였습니다.
테스트 2
        입력값 〉	"18446744073709551615", "287346502836570928366"
        기댓값 〉	"305793246910280479981"
    실행 결과 〉	실행한 결괏값 "305793246910280500000"이 기댓값 "305793246910280479981"과 다릅니다.
테스트 3
        입력값 〉	"0", "0"
        기댓값 〉	"0"
    실행 결과 〉	테스트를 통과하였습니다.
테스트 결과 (~˘▾˘)~
    3개 중 2개 성공


//첫번째와 세번째 테스트는 통과되는데 자꾸 두번째는 실패가 떠서 컴퓨터 오류인 줄 알고 계속 코드 실행만 눌렀다 ..
//자세히 보면 내가 처음에 적은 코드로는 두번째 테스트 출력값이 일정 부분까지만 출력되고 0으로 표현된 것을 볼 수 있었다 !
//그래서 Number에 대해 찾아보니 Number로 표현할 수 있는 값의 범위를 넘어서면, 넘어간 자릿수는 0으로 채워진다고 한다 ..
//이를 해결하기 위해서 BigInt 타입을 사용해보려고 한다 !

//나의 풀이

function solution(a, b) {
    const numA = BigInt(a);
    const numB = BigInt(b)
    return String(numA + numB);
}


테스트 1
        입력값 〉	"582", "734"
        기댓값 〉	"1316"
    실행 결과 〉	테스트를 통과하였습니다.
테스트 2
        입력값 〉	"18446744073709551615", "287346502836570928366"
        기댓값 〉	"305793246910280479981"
    실행 결과 〉	테스트를 통과하였습니다.
테스트 3
        입력값 〉	"0", "0"
        기댓값 〉	"0"
    실행 결과 〉	테스트를 통과하였습니다.
테스트 결과 (~˘▾˘)~
    3개 중 3개 성공

//틀린 풀이 와는 다르게 정상적으로 출력되는 것을 확인할 수 있었다 !
//계산해야하는 숫자가 길어서 출력값의 길이가 긴 숫자로 예상될 때는 부정확한 값을 출력하지 않기 위해서
//Number가 아닌 BigInt로 타입 지정을 해야겠다 .... !!
//새롭게 또 하나 배웠다 !!!!

//BigInt : 자바스크립트에서 기본적으로 제공하는 숫자 타입인 Number가 표현할 수 있는 범위를 넘어서는 정수를 처리하기 위해 도입된 새로운 숫자 타입 BigInt는 뒤에 n 또는 N을 붙여서 숫자를 표현한다.

const bigIntNumber = 9007199254740992n; // BigInt를 생성할 때는 숫자 뒤에 n 또는 N을 붙여서 표현
console.log(bigIntNumber); // 출력: 9007199254740992n

//다른 사람의 풀이
function solution(a, b) {
    var answer = BigInt(a)+BigInt(b);
    return answer.toString();
}

//나는 String으로 값을 return 시켰는데 toString()으로 형변환을 시킨 풀이가 있었다
//갑자기 String과 toString()의 차이점에 대해 궁금해져서 다시 정리해보려고 공부했다 !


//String()은 값이 null, undefined에 대해서도 잘 동작하는 반면, .toString()은 에러가 발생한다.

//String() - 어떤 형태이든 문자로 형변환
//.toString() - null(존재하지 않는 값, 비어있는 값, 알 수 없는 값), undefined(값이 할당되지 않은 상태) 형 변환 시 오류
//=> 따라서 확실히 값이 명시된 경우에는 둘 다 상관없지만, null, undefined와 같이 예외인 경우가 있을 수 있으므로 String()을 사용하는 것이 좋다.

//toString()을 사용할 때 !

//number.toString(radix) - 숫자를 2~36 진수의 수로 변경하고 싶은 경우 사용한다.
//radix의 범위는 2~36이며, 값 생략 시 10진수로 반환. (범위보다 작거나 넘어가면 오류 발생)
//변환한 진수를 다시 숫자로 변경하는 방법은 parseInt(string, radix).
//radix의 범위는 동일하게 2~36이다.

//toString() 사용 시 주의할 점!

//정수 리터럴을 함수에 직접 사용할 경우 오류가 발생할 수 있다.
//이유는 JS에서 숫자 뒤의 .은 부동 소수점 숫자의 일부로 해석하기 때문이다.
//따라서 100.toString()의 경우 toString()을 숫자로 인식하기 때문에 오류가 나는 것이고, 이를 해결하기 위해서는
    //1. 정수에 소수점은 하나만 존재하기 때문에 .0 을 붙여서 함수 사용 => 두번째 . 은 마침표 표기법으로 해석

    //2. () 정수를 감싸 정수 그룹임을  표현하고 함수 사용

//로 해결할 수 있다.

//String()과 toString()은 자주 사용하는 문자열 형 변환 함수이기 때문에 차이를 정확하게 학습하자 !
//특히 toString()을 사용하여 진수 변환을 하는 것은 알고리즘 코딩 문제에 나오기도 하니 알아두면 좋을 것 같다 ... !
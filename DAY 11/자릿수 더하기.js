//나의 풀이
function solution(n)
{
    let answer = 0;
    let s = String(n);
    
    for (let i = 0; i < s.length; i++){
        answer += parseInt(s[i]);
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}

//각 자릿수를 더해주기 위해서는 숫자인 n의 type을 string으로 바꾸어주어야 한다. `String(n)`을 통해 변경시켜준다
//`answer`인 `0`에 자릿수를 차례로 더해준다
//`parseInt()`처리를 해준 이유?그대로 출력해버리면 문자열로 출력된다. 숫자로 출력해주기 위해 `parseInt()`를 사용해주었다. `Number()`를 사용해도 된다.

//Data type 구분

//숫자는 `.length`가 적용되지도 않고, 자릿수를 쪼갤 수도 없다. 따라서 문자열로 바꾸어 주는 과정이 필요하다
//`string(숫자) * Number = Numberstring(숫자) + Number = String(숫자)`


//다른 사람의 풀이
function solution(n) {
	return String(n).split('').reduce((acc, cur) => acc + cur * 1, 0);
}
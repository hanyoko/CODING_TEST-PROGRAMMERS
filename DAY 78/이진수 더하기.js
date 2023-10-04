//나의 풀이
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

/*
그동안 parseInt는 정수로의 변환을 위해, toString은 문자열로의 변환을 위해서만 사용했던 것이 대부분이었다. 하지만 이 문제를 통해 위 메서드들의 새로운 면을 알게 되었다.

1. parseInt()
정수를 반환 ← 주로 사용하던 기능
문자열을 파싱 하여 특정 진수의 정수를 반환 (= 특정 진수를 10진수로)
const str = "10";
console.log(parseInt(str)); //10 (str을 정수로)
console.log(parseInt(str, 2)); //2 (2진수인 str을 10진수로)
 
cf) 문자열이 진법 체계에 맞지 않는 경우
parseInt("23", 2)에서, 문자열 "23"은 이진수가 아니므로 NaN을 반환
 

2. toString()
문자열을 반환 ← 주로 사용하던 기능
숫자의 경우 선택적으로 기수(2~36)를 매개변수로 취하며, 이를 통해 10진수를 특정 진수로 변환한 값 반환
const num = 10;
console.log(num.toString()); //"10" (num을 문자열로)
console.log(num.toString(2)); //"1010" (num을 2진수로)
 
2진수 → 10진수: parseInt 사용
10진수 → 2진수: toString 사용
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
*/

//다른 사람의 풀이
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}

//temp 배열을 거꾸로 출력해야 정답이 된다. reverse()는 배열을 거꾸로 만들어주기 때문에 사용

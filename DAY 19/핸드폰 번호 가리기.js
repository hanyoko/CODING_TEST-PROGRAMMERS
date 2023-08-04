//나의 풀이
function solution(phone_number) {
    for(let i=0; i<phone_number.length-4; i++){
        phone_number = phone_number.replace(phone_number[i], "*");
    }
    return phone_number;
}

//for문에 replace 메소드를 활용해서 간단하게 풀었던 것 같다.
//문제의 조건에 마지막 4개의 숫자는 숫자로 출력되도록 하라고 해서 phone_number의 length를 -4 해주었다 !

//다른 사람의풀이
function solution(phone_number){
    return phone_number.replace(/\d(?=\d{4})/g, "*");
  }

//replace에 정규표현식을 사용하는 방법 !

function solution(phone_number){
    var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
  }

//휴대폰 번호 길이에서 4f를 뺀 만큼 *을 만들어주고,
//휴대폰 번호에서 마지막 4자리를 추출하기 위해 slice(-4)를 사용한다.
//slice는 원본을 변경하지 않고 새로운 스트링을 리턴한다.
//시작 인덱스와 끝 인덱스를 지정할 수 있고, 끝 인덱스는 생략이 가능하다.
//substring 메서드와 동일하게 동작하지만, slice에는 음수인 인수를 전달할 수 있다.
//음수인 인수를 전달하면 대상 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환한다. 
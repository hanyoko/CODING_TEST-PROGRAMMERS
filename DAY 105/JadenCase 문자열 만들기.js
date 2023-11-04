//나의 풀이
function solution(s) {
    const lower = s.toLowerCase();
    return lower.split(' ').map(word => 
        word.replace(/^[a-z]/, word.charAt(0).toUpperCase())
    ).join(' ');
}

/*
문자열을 모두 소문자로 먼저 변경한 후
각 단어의 첫문자가 알파벳일 경우만 대문자로 변경
*/

//다른 사람의 풀이
function solution(s) {
    return s.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      ).join(' ');
}

//해당 문자가 숫자일 경우 UpperCase를 하여도 그대로이기 때문에
//각 단어의 첫문자를 UpperCase로 변경하고 그 이후의 문자는 모두 LowerCase 처리


/*
문자열 s를 먼저 toLowerCase() 처리를 한 후
공백을 기준으로 단어별 배열을 돌면서 첫번째 문자가 알파벳일 경우(/^[a-z]/ )
대문자로 변경해서 공백으로 다시 합친 문자열을 리턴 하였다.
다른사람 풀이를 보니 toUpperCase() 와 toLowerCase() 매서드가 숫자 문자에서 사용될 경우 그대로이기 때문에
그냥 모든 단어의 첫번째 문자는 toUpperCase() 처리하고
그 이후 문자는 toLowerCase() 처리를 하여 리턴하여도 된다는 것을 알게 되었다.
*/
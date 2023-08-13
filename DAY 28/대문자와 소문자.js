//나의 풀이
function solution(my_string) {
    let answer = '';
    let arr = my_string.split('');
    for(let i of arr){
        answer += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
    }
    return answer;
}

//대문자 소문자를 구문하기 위해서 배열의 순서가 대문자로 바꾼 것과 같으면,
//소문자로 아니면 대문자로 바뀌도록 for of 문을 이용해서 풀어보았다 !
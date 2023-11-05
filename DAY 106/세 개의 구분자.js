//나의 풀이
function solution(myStr) {
    const answer = myStr.split(/[a|b|c]/).filter(x => x);
    return answer.length ? answer : ["EMPTY"];
}

/*
split()에 정규 표현식을 써서 myStr을 배열로 나눈다.
filter(x => x)를 쓰면 배열에서 빈 문자열이 제거된다.
answer에 값이 있으면 출력하고 그렇지 않으면 "[EMPTY]"를 출력한다.
*/
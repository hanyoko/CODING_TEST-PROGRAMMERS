//나의 풀이
function solution(s){
    let p = 0;
    let y = 0;
    
    for (let spell of s){
        spell = spell.toLowerCase();
        if(spell === 'p') p += 1;
        if(spell === 'y') y += 1;
    }

    return (p === y) ? true : false ;
}

//s를 한 글자씩 잘라서 p나 y가 있으면 각각의 변수에 +1
//마지막엔 갯수가 같은 경우 True / 갯수가 다른 경우 False
//문제에 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다 - 라는 문구가 있는데 둘 다 0인 경우도 결국 갯수가 같은 경우에 포함된다

//다른 사람의 풀이
function numPY(s){
    return s.match(/p/ig).length == s.match(/y/ig).length
}

// g :Global 의 표현하며 대상 문자열내에 모든 패턴들을 검색하는 것을 의미한다.
// i :Ignore case 를 표현하며 대상 문자열에 대해서 대/소문자를 식별하지 않는 것을 의미한다.
//string.match("찾고싶은 특정 단어") : 문자열 안에 특정 단어를 찾고 싶을 때 사용하는 함수로서 특정 단어가 포함되어 있는지 여부를 알 수 있다.
//나아가 특정 단어를 찾는 데 그치지 않고 정규식을 이용하여 특정 패턴을 찾는 것도 가능하다.
//응용하여 match 함수 뒤에 length를 붙이면 특정 단어의 개수를 알 수 있다


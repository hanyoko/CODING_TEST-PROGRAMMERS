//나의 풀이
// 정수 배열 array가 매개변수로 주어질 때,
// 7이 총 몇 개 있는지 return 
function solution(array) {
    let answer = 0 // 결과를 저장하는 변수
    array.forEach((item, index, arr) => {
        const strItem = item + '' // 배열의 요소를 문자열로 변경
        const regExp = /7/g // 정규 표현식을 활용해 7을 찾는다.
        const num = strItem.match(regExp) ?? 0 // 7을 찾은 배열
        answer += !num ? num : num.length
    })
    return answer
}

//정규 표현식 

//일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어
//문자열을 대상으로 패턴 매칭 기능을 제공한다.
//특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능

//플래그
//정규 표현식의 검색 방식을 설정하기 위해 사용
//i (Ignore case) : 대소문자를 구별하지 않고 패턴을 검색
//g (Global) : 대상 문자열 내에서 패턴과 일치 
//m (Multi line) : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.

//String.prototype.match
//match 메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환.

//다른 사람의 풀이
function solution(array) {
    return array.join('').split('7').length-1;
}

//첫번째 인덱스에 7이 아닌 값들이 뭉쳐서 담긴다. ['11', '', '', '', '']
//split시 배열 처음과 끝부분이 7이라면 다른 수가 없을 시 ''으로 원소가 된다. 아니면 7인 부분은 포함되지 않는다. 7로 split했으므로.

//훨씬 간단한 방법 ....
//아직 멀었구만 ...
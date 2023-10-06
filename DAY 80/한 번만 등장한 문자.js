//나의 풀이
function solution(s) {
    // s를 쪼개 배열로 만든다.
    let arr = s.split('');
    // s에서 중복되는 글자를 모두 제거한 값들을 배열에 담고 오름차순 정렬한다.
    const uniqueArr = [...new Set(arr)].sort();
    // uniqueArr의 length만큼의 길이를 가지는 배열을 만들고 요소를 0으로 채운다.
    let countArr = Array.from(Array(uniqueArr.length)).fill(0);
    // arr 요소의 문자와 uniqueArr 요소의 문자가 일치한다면 해당 uniqueArr의 idx위치에 +1한다.
    for(let i of arr) {
        for(let j = 0; j <= uniqueArr.length; j++) {
            if(i === uniqueArr[j]) countArr[j]++;
        }
    }
    // countArr가 1인(한 번만 등장하는 문자)만 변수에 합쳐 return한다.
    let str = '';
    countArr.forEach((e, idx) => {
        if(e === 1) str += uniqueArr[idx];
    })
    return str;
}

//다른 사람의 풀이
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}

/*
정말 박수가 나오는 답안이다. 앞에서부터 추적하는 indexOf와 뒤에서부터 추적하는 lastIndexOf값이 동일하다면 해당 추적값은 하나만 있다는 의미이므로 바로 해당 값을 담았다. 또한 문자열 그 자체를 for...of로 바로 돌렸다!
 
String.prototype.lastIndexOf(searchValue[, fromIndex])
주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환한다. 일치하는 부분을 찾을 수 없으면 -1을 반환한다.
 
searchValue: 찾고자 하는 문자 또는 문자열로, 대소문자를 구분한다.
fromIndex: 검색을 시작할 index
반환값
　- str에서 searchValue가 '마지막'으로 검색되는 'index'값을 반환한다.
　- 만약 searchValue가 존재하지 않는다면 '-1'을 반환한다.
*/
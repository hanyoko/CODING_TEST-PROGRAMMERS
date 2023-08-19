//나의 풀이
const solution = (arr, idx) => arr.indexOf(1, idx);

//특정 인덱스부터 탐색하는 방법으로 풀어보았다
//indexOf()의 문법을 보면 arr.indexOf(찾을요소, [검색을 시작할 인덱스]) 이기 때문에
//특정 인덱스부터 탐색이 가능하다 (대괄호 안쪽 요소는 생략 가능)

//다른 사람의 풀이
function solution(arr, idx) {
    for (let i = idx; i < arr.length; i++) if (arr[i]) return i;
    return -1;
}

//for문으로 특정 인덱스부터 탐색해서 i를 리턴하거나 -1을 리턴하는 방법 !
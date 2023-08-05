//나의 풀이
function solution(start, end) {
    var answer = [];
    for (start; start>=end; start--){
        answer.push(start)
    }
    return answer;
}

//start에서부터 end까지의 숫자를 배열에 담기 위해서
//for문으로 숫자를 마이너스 시키면서 push로 배열에 담아줬다

//다른 사람의 풀이
function solution(start, end) {
    return Array.from(Array(start - end + 1), (_, i) => start - i);
}

//Array.from()
//Array.from()은 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다.

//Array.from('foo'); // ['f', 'o', 'o']
//Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

//Array.from(arrayLike[, mapFn[, thisArg]])
//Parameters
//arrayLike : 배열로 변환하고자 하는 유사 배열 객체나 반복 가능한 객체
//mapFn? : 배열의 모든 요소에 대해 호출할 맵핑 함수
//thisArg? : mapFn 실행 시에 this로 사용할 값

//새로운 Array 인스턴스를 반환한다.
//유사 배열 객체에는 set, map 등이 있다.

//Array.from(Array(start - end + 1), (_, i) => start - i);
//크기가 start - end + 1 인 빈 객체를 만든다.
//arrow Fun을 통해 해당 배열에 start - i 값을 넣어서 새로운 배열을 반환한다.



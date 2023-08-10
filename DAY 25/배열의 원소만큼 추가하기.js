//나의 풀이
function solution(arr) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i]; j++){
            answer.push(arr[i]);
        }
    }
    return answer;
}

//이중 for문을 이용해서 풀었다.
//우선 빈배열 answer을 선언하였다.
//그런 다음에 for문을 통해 i=0부터 arr.length만큼을 돈다.
//그 안에 j를 통해서 2중 for문을 만들어서 위에서 push를 arr[i]번을 수행하도록 하였다.
//두번째 for문은 j를 0부터 arr[i]보다 작을때까지 반복하므로 answer.push(arr[i])는 arr[i]번 수행된다.
//안쪽의 for문이 다 수행된 다음, 다시 바깥의 첫번째 for문으로 돌아가 다시 i값에 대해서 +1을 더하면서 반복된다.

//다른 사람의 풀이
const solution = a => a.map(v=>Array(v).fill(v)).flat()

//arr을 map을 돌려 현재 요소의 길이만큼의 배열을 만들고 동일한 값을 채운 배열들을 만들고, flat() 메서드를 이용해 해당 배열들을 연결하는 방법 !

Array.prototype.flat()
//const newArr = arr.flat([depth])
//flat() 메소드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성한다.

//매개변수
//depth: 중첩 배열 구조를 평탄화할 때 사용할 깊이 값으로, 기본 값은 1
 
//반환값
//하위 배열을 이어붙인 새로운 배열



//다른 사람의 풀이 2
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

reduce() //메소드는 합계를 구할 때만 사용했는데 현재값을 이용해서 값을 처리할 수 있는 풀이식은 처음 봐서 새로웠다.
//여기서 list는 누산값, num은 현재값이므로 누산값에 num의 길이만큼(new Array(num)) num값으로 채운(.fill(num))값을 [] 배열화시켜 간단하게 표현했다.

Array.prototype.reduce()
//arr.reduce(callback[ , initialValue])
//reduce() 메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.

//매개변수
//callback: 배열의 각 요소에 대해 실행할 함수로, 다음의 네가지 인수를 받는다.
// accumulator (acc, 누산기 / 필수값) : 콜백의 반환값 누적
// currentValue (cur, 현재 값 / 필수값) : 처리할 현재 요소
// currentIndex (idx, 현재 인덱스 / 선택값) : 처리할 현재 요소의 인덱스로, initialValue를 제공한 경우 0, 아니면 1부터 시작
// array (src, 원본 배열 / 선택값) : reduce()를 호출한 배열

//initialValue: callback의 최초 호출에서 첫 번째 인수에 제공하는 값으로, 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.
 
//반환값
//누적 계산의 결과 값
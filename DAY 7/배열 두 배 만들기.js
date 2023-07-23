//나의 풀이
function solution(numbers) {
    let answer = [];
    
    for (i=0; i<numbers.length; i++){
        answer.push(numbers[i] * 2)
    }
    
    return answer;
}

//다른 사람의 풀이
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

//numbers가 [1,2,3,4,5]라면 b는 currentValue로써 1부터 5를 순차적으로 돌고, ...a는 accumulator 이걸 누적해서 배열에 복사하는역할 [1], [1,2] ~ [1,2,3,4,5] 그리고 두번째인자 []빈배열은 배열에 담아 반환하기 위해 콜백함수의 초기값으로 전달. ?

//reduce 사용방법도 숙지하기 ... 많이 나온다 문제에


//다른 사람의 풀이 2
const solution = (numbers) => numbers.map((number) => number * 2)

//map 사용법도 !
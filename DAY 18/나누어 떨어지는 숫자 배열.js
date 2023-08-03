//나의 풀이
function solution(arr, divisor) {
    var answer = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a-b);
}


//다른 사람의 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

//filter를 사용해서 배열 내에서 검색하는 방법
//그리고 삼항연산자로 마무리 !



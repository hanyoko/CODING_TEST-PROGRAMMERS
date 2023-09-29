//나의 풀이
function solution(arr, queries) {
    for(let i=0; i<queries.length; i++) {
        for(let a=queries[i][0]; a<=queries[i][1]; a++) {
            arr[a]++;
        }
    }
    return arr;
}

//배열 que를 순회하는 i for문 안에 arr의 값을 바꾸는 a for문이 있다. 
//a for문은 시작점을 쿼리 i번째 0번 인덱스 값으로 잡고, 
//종료지점을 쿼리 i번째 1번 인덱스 값으로 잡는다.

//시작과 종료 지점을 이렇게 정한 이유는 [0]번부터 [1]번까지의 모든 값을 빠짐없이 계산하기 위해서이다.
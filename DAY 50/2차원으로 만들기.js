//나의 풀이
function solution(num_list, n) {
    let answer = [];
    
    for(let i=0; i<num_list.length / n; i++){
        answer = [...answer, num_list.slice(i * n, i * n + n)];
    }
    
    return answer;
}

//slice를 통해 각 자리에 맞는 숫자를 넣어주고, 결과값을 반환한다.
//기존 answer에 들어 간 answer(배열)을 ...을 통해 그대로 넣어준 상태에서, slice를 통해 남은 값들을 처리하였다.
//예를들어 n은 3일 때, 배열의 0번째, 1번째, 2번째 를 우선적으로 넣어줘야한다.
//i는 0부터 시작하기 때문에 0 3은 0이다.
//slice option값 i n + n의 경우 0 * 3 + 3이기 때문에 3전까지 slice를 통해 찾아낼 수 있다.
//그럼 answer 배열에 [[0,1,2]]가 들어간다.
//이후 i는 1이다.
//1 3은 3! slice option값 i n + n의 경우 1 * 3 + 3 6이니까 5까지의 숫자를 배열에 넣어줄 수 있다.
//그럼 [3,4,5]가 들어간다.
//이때 answer는 [[0,1,2],[3,4,5]] 이런식으로 된다.

//다른 사람의 풀이
function solution(num_list, n) {
    // 정답배열 생성
    const result = []
    // 전 범위 순환
    for(let i = 0 ; i < num_list.length; ) {
        const sliceN = []
        // n만큼 배열 생성
        for(let j = 0 ; j < n ; j++) {
            sliceN.push(num_list[i])
            i++
        }
        result.push(sliceN)
    }
    return result
}
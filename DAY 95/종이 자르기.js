//나의 풀이
function solution(M, N) {
    //M,N 모두 1일 경우는 0을 리턴
    if( M===1 && N===1 ) return 0;
    //M,N 각 각 잘라야하는 횟수
    let mCount = 0;
    let nCount = 0;
    //M번부터 1까지 mCount를 ++
    for(let i=M; i>1; i--){
        mCount++;
    }
    //N번부터 1까지 nCount를 ++
    for(let j=N; j>1; j--){
        nCount++;
    }
    //세로(N) 가위질은 M번 해야하니 nCount*M해준다
    return mCount + nCount * M;
}



//다른 사람의 풀이
function solution(M, N) {
    return M * N - 1;
}

/*
내가 풀었던 방법보다 훨씬 간단해서 놀랐다 ..

2조각을 내려면 -> 1번의 가위질 

3조각을 내려면 -> 2번의 가위질

결국 총 조각 -1을 해주면 된다! 

M, N에 어떠한 인자가 들어와도 계산 시간이 같기 때문에 굉장히 좋은 풀이 방법인 것 같다!!! 
*/

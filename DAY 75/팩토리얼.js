//나의 풀이
function solution(n) {
    let answer = 1;

    for(let i = 1; i <= n; i++){
        answer *= i;
        
        if(answer === n){
            return i;
        }
        if(answer > n){
            return i - 1;
        }
    }
}

//처음에는 1부터 n까지 숫자 하나하나에 대하여 팩토리얼을 구해나가면서,
//팩토리얼 값이 n 이상이 될 경우 해당 팩토리얼을 반환할 생각이었다.
//그러나, 모든 수에 대하여 팩토리얼을 진행하면 연산이 길어질 것 같다고 판단하였고,
//n까지의 숫자를 하나씩 곱해나가면서 그 때마다 조건문으로 판단을 해주었다.

//다른 사람의 풀이
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f *= ++i;
    return i;
}

//1.
//n이 7일 때, f = 1, i = 1 → f * i = 1 * 1 = 1 < n
//f에 전위 증가한 i = 2를 곱한다.
//f = 2, i = 2

//2.
//f = 2, i = 2 → f * i = 4 < 7 이므로 f = 2 * 3 = 6
//f = 6, i = 3

//3.
//f = 6, i = 3 → f * i = 6 * 3 = 18 < 7
//while (f * i < n)에 당도하였으므로 i값을 리턴한다.
//i = 3
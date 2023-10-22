//나의 풀이
function solution(numbers, k) {
    //첫 번째 선수가 공을 갖고있다고 가정
    let ball = 1;
    //마지막 공을 던질 선수를 찾기위해 k-1 번까지 반복하며 다음 사람을 건너뛰도록 +2
    for(let i=0; i<k-1; i++) {
        ball += 2;
        //마지막 번호를 넘어가는 경우 처음 선수에게 공이 전달되도록  배열의 크기만큼 마이너스
        if(ball > numbers.length) {
            ball -= numbers.length;
        }
    }
    return ball;
}



//다른 사람의 풀이
function solution(numbers, k) {
    return numbers[(k - 1) * 2 % numbers.length];
}

// x번째로 던져진 지점이 아니라 던진 사람이기 때문에 k - 1을 해주고, 한 사람씩 건너뛰므로 2를 곱해준 값을 배열의 크기로 나눈 index의 숫자가 답.
// 나머지 연산자로 해당 배열의 길이가 넘었을 경우, 나눠 나머지값으로 다음에 위치할 인덱스 값이 나온다.

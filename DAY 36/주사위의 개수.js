//나의 풀이
function solution(box, n) {
    let answer = 1;
    for(i of box){
        answer *= Math.trunc(i / n);
    }
    return answer;
}

function solution(box, n) {
    let a = Math.trunc(box[0] / n);
    let b = Math.trunc(box[1] / n);
    let c = Math.trunc(box[2] / n);
    return a * b * c;
}

//각 배열의 순서마다 n을 나눈 값을 곱해주는 방법으로 풀었다
//두번째에 적은 풀이 방법은 처음에 시도하던 방법인데 두번테 테스트 케이스에서 실패가 뜨길래 첫번째 방법으로 고쳤다 ..
//근데 내가 trunc를 써야하는데 헷갈려서 sqrt()을 해버려서 생겼던 오류 ..
//안다고 생각할 때 더 조심해야하는데 약간 계속 맞추다보니 자만했나보다 .. 하하 .. 
//조금만 더 생각해보고 풀어보자 !

//다른 사람의 풀이
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

//구조 분해 할당으로 이렇게 깔끔하게 ....
//왜 이건 생각 못했을까
//내가 푼 풀이방법 보다 훨씬 더 가독성 좋고 깔끔한 것 같다 .. 체크 !

//다른 사람의 풀이 2
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}

//for문이 아니라 reduce를 사용한 방법 !
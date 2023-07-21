//나의 풀이
function solution(n) {
    let pizza = 6;
    
    while(pizza%n !== 0) {
        pizza += 6
    };
    return pizza/6;
}
//while문을 무한루프로 실행 -> 나머지가 0이면 멈춤

//다른 사람의 풀이
const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}

//조금 더 깔끔한 방법 같다. break 활용
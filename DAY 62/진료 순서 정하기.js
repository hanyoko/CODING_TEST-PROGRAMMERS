//나의 풀이
function solution(emergency) {
    // 복사한 배열을 내림차순 정렬한다
    const copiedEmergency = [...emergency].sort((a, b) => b - a);
    
    // 진료순위를 기록할 배열을 만든다
    let rankArr = new Array(emergency.length).fill(0);
    
    // 진료 순위
    let count = 1;
    
    for(let i = 0; i < emergency.length; i++){
        // 내림차순된 배열은 가장 우선 순위가 높은 사람이 맨 앞에 있으므로
        // 원본 배열에서 그 사람의 인덱스를 찾는다
        let index = emergency.indexOf(copiedEmergency[i]);
        
        // 진료순위 배열에서 해당 인덱스 자리에 진료 순위를 기록한다
        rankArr.splice(index, 1, count);
        
        // 진료 순위를 증가시킨다
        count++;
    }
    
    return rankArr;
}

//구현해야하는 기능을 하나하나 나눠서 구현한 느낌이 든다.
//코드 자체는 이해가 빨리 되지만, 문제에 비해서 너무 긴 코드를 갖게 된게 아닌가 싶었다.

//다른 사람의 풀이
function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}

//엄청 간단하게 해결하셨다.
//원리는 이렇다.

//1.원본 배열을 복사해서 내림차순 정렬한다.
//2.원본 배열의 값들이 복사된 배열에서는 어느 인덱스에 위치하는지 찾는다.
//3.해당 인덱스 + 1을 해서 순위를 매긴다.

//원리는 완벽하게 같은데, 코드가 상당히 줄어들었다.
//이런 방법도 있구나...멋지다. !

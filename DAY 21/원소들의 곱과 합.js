//나의 풀이
function solution(num_list) {
    let add = num_list.reduce((a, b) => a+b);
    let mul = num_list.reduce((a, b) => a*b);
    
    return (mul > add*add) ? 0 : 1;
}

//reduce를 사용해서 배열의 합과 곱을 구했고,
//조건에 맞는 값을 return 시켰다 .. 
//이 방법이 맞나 하면서 작성했는데 다행히 맞았다 ..

//다른 사람의 풀이
function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
}

//for문을 활용한 방법
//모든 원소의 곱 값을 넣어줄 accMul과 모든 원소의 합의 제곱 값을 넣어줄 accSum를 선언해주었다.
//accMul은 곱을 해야하므로 1로 선언해주었고, accSum를 합을 해줄 것이라 0으로 선언했다.
//for of 반복문을 이용하여 요소 값을 꺼내주어 accMul에는 i만큼 곱해주었고, accSum에는 i만큼 더해주었다.
//accMul이 accSum의 제곱보다 크면 0을 리턴해주고, 작으면 1을 리턴해주도록 만들었다.
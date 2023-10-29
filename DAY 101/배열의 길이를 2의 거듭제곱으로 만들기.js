//나의 풀이
function solution(arr) {
    const len = arr.length;
    let num = 0;
    
    while(Math.pow(2, num) < len) num++; //while문을 통해 arr 배열의 길이보다 큰 2의 거듭제곱을 구하기
 
    for(let i = 0; i < (Math.pow(2, num) - len); i++) {
        arr.push(0); // 거듭제곱 - 배열의 길이 = 삽입해야 하는 0의 개수이므로 개수만큼 push
    }
    
    return arr;
}

/*
반복문 while과 for를 사용하여 풀었다.

풀면서 len 변수를 만들지 않고 for문의 조건식에 Math.pow(2, num) - arr.length 를 넣어 반복문을 돌렸었는데, 다 실패하는 거다... 정말 왜 이러나 계속 찾다가 발견한 허무한 실수.
for문의 조건식은 반복문이 실행될 때마다 평가되는 특성이 있어서, arr.push()가 실행될 때마다 arr.length가 변해서 문제가 발생하는 것..
len 변수를 만들어 배열의 길이를 대입하여 사용했더니 잘 되더라
*/

//다른 사람의 풀이




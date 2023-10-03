//나의 풀이
function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        const [s, e, k] = queries[i];
        
        for(let j = s; j <= e; j++){
            if(j % k === 0){
                arr[j] += 1;
            }
        }
    }
    
    return arr;
}

/*
문제를 이해를 못해서 진짜 너무 힘들었다.
i가 arr[i] 값인 줄 알았는데, 알고보니가 index 그 자체 를 말하는 것이였다.
그리고 문제는 왜 또 잘못 읽었는지 k의 배수인데, 이유는 모르겠지만 여태 4의 배수를 찾고 있었다..
*/

//다른 사람의 풀이
function solution(arr, queries) {
    for (const [s, e, k] of queries){
        arr = arr.map((curr, i) => s <= i && i <= e && i % k === 0 ? curr + 1 : curr);
    }
    return arr;
}

/*
forEach 대신에 for ...of 루프를 사용하고, 어제 공부한 map() 함수를 사용해서 푸는 방법이다.

for...of : 배열이나 이러터블 객체의 요소들을 순회하기 위해 사용되는 반복문. for문보다 간단하고 가독성이 좋다. 요소나 객체의 값을 직접 접근하여 사용할 수 있다.

for (const element of iterable) { //반복적으로 실행될 코드 }

element : 각 반복에서 현재 요소의 값이 할당되는 변수
iterable : 반복할 대상인 배열 또는 이터러블 객체
* 이터러블 객체 : 배열과 비슷하지만 배열이 아니더라도 반복 가능한 객체 / ex) 문자열, Set, Map 등...
*/

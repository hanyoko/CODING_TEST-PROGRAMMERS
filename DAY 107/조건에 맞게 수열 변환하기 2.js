//나의 풀이
function solution(arr) {
    let idx = 0;
    let prevArr = arr;
    while(true) {
        // 현재 배열을 조건에 맞게 변환
        const changeCurArr = prevArr.map(a => {
            if(a >= 50 && a%2 === 0) return a/2;
            if(a < 50 && a%2 === 1) return a*2+1;
            return a;
        })
        // 이전의 모든 배열과 현재 모든 배열의 요소 비교
        const isAllSame = prevArr.every((a, i) => a === changeCurArr[i])
        if(isAllSame) break;
        idx += 1;
        
        // 현재 배열을 이전 배열 변수에 저장함
        prevArr = changeCurArr;
    }
    
    return idx;
}



//다른 사람의 풀이
function solution(arr) {
    let arr1 = [...arr];
    let arr2 = [];
    let result = 0;
  
    while (1) {
      let arr2 = arr1.map((el) => {
        if (el >= 50 && el % 2 === 0) {
          return el / 2;
        } else if (el < 50 && el % 2 === 1) {
          return el * 2 + 1;
        } else {
          return el;
        }
      });
  
      let arr1Len = arr1.filter((el, idx) => arr2[idx] === el).length;
      let arr2Len = arr2.length;
      if (arr1Len === arr2Len) break;
  
      arr1 = [...arr2];
      result += 1;
    }
    return result;
}

/*
1. arr1에 map함수를 실행하여 배열의 각각의 값들을 조건에 맞게 수정하여 새로운 배열을 만든다.

2. 생성한 배열을 arr2에 대입한다.

3. arr1과 arr2가 같은 배열인지 비교한다.

        1) filter문을 사용해 arr1 배열의 요소와 arr2 배열의 요소가 같은 경우만 필터링해서 배열을 생성한다.

        2) 필터링된 arr1 배열의 길이와 기존 arr1 배열의 길이가 같은지 체크한다.

        3) 같다면 필터링된 값이 하나도 없었다는 의미이기 때문에 arr1과 arr2가 같다고 말할 수 있다.

        4) 두 배열이 같다면 문제에서 말하는 조건이 충족되었으므로 반복문을 빠져나와 n을 출력한다. 

4. 1~4번을 arr1과 arr2가 같아질 때까지 반복한다.
*/


//다른 사람의 풀이 2
function solution(arr, n = 0) {
    while(!arr.every(x => (x >= 50 && x % 2 === 1) || (x < 50 && x % 2 === 0))) {
        arr = arr.map(x => {
            if (x >= 50 && x % 2 === 0) return x / 2;
            if (x < 50 && x % 2 === 1) return x * 2 + 1;
            return x;
        })
        n++;
    }
    return n;
}

/*
두 배열의 비교를 while문의 조건문을 사용하여(+ every 함수) 구현하였다.
배열이 같아지는 시점은 더 이상 (x >= 50 && x % 2 === 0),(x < 50 && x % 2 === 1)의 조건이 충족되지 않을 때,
즉 기존의 조건에 완전히 반대대는 상황이 되었을 때 (x >= 50 && x % 2 === 1),(x < 50 && x % 2 === 0) 이다.
기존 조건을 수행하다 보면 최종적으로 기존 조건에 충족되지 않는 상황이 올 것이고 그 이후로는 배열의 변화가 없을 것이기에 이러한 조건문을 쓸 수 있는 것이다. 

​어떻게 이런 조건문을 생각할 수 있었을까 궁금하다.
이 풀이로 구현하신 분은 천재인가..? 하하..

이런 조건을 생각하려면, 이런 질문을 해봐야 할 것 같다. "왜 해당 배열이 변화하다가 같아지는가?" 계속 map을 통해 값을 바꾸다보면 나중에는 map 내부에서의 모든 조건문을 피해가는구나!라는 결론을 내릴 수 있다 !
*/
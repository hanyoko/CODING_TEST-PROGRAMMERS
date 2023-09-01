//나의 풀이
const solution = (i, j, k) => {
    let answer = 0;
    for (let num = i; num <= j; num++) {
      const split = String(num).split('');
  
      for (let num2 = 0; num2 < split.length; num2++) {
        if (split[num2].includes(String(k))) {
          answer++;
        }
      }
    }
    return answer;
}

//문제가 요구는 i, j, k가 각 1, 13, 1일 경우 1, 10, 11, 12, 13 총 5개가 아닌 11을 십의 자리와 일의 자리를 각각 세어줘야 한다. 
//그래서 문자를 split('')로 분리하여 중첩 for문을 돌려주어 해결했다. 

//다른 사람의 풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }
    return a.split(k).length-1;
}

//너무 간단하게 푼 다른 분의 풀이를 분석해보자.
//for문에 늘 let i = 0을 적어 for문 내부에서 변수를 할당해주었는데 부모에게서 받아온 변수를 그대로 써도 된다.. 
//문자열 a에 i부터 j까지의 모든 수를 추가하고 k로 split한 후 length - 1을 출력하는 것이 굉장히 깔끔해 보인다.

//조금 더 가독성 있는 방법을 고민해 볼 것. 
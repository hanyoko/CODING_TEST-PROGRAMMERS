//나의 풀이
function solution(myString, pat) {
    const arr = [];
    
    for(i=0; i<myString.length; i++){
        arr.push(myString.slice(i,i+pat.length));
    }
    
    return arr.filter(v => v === pat).length;
}

/*
우선, myString을 돌면서 ban, ana, nan과 같이 앞에서부터의 값을 담는 작업을 해야겠다고 생각했다.
그리고 그렇게 담은 값들중 pat을 포함하는 것만 남겨서 수를 세는 방법으로 문제를 풀었다.

먼저 arr를 선언하고 []빈배열로 초기화해주었다.

그리고 앞에서부터 ban, ana..와 같이 담는 작업을 하기 위해서 for문을 사용했다.
for문으로 myString을 돌면서 slice()를 통해서 인덱스를 이동하면서 원하는 개수만큼을 자르도록 만들었다.

myString.slice(i,i+pat.length)를 통해서 i번째부터 pat.length만큼만 자른다.
slice(begin, end(end미포함))이기때문에 begin을 i로 지정해서 어디서부터 자를지를 결정해주었다.
pat이 몇글자일지는 가변적이기 때문에 어디까지 잘라줄지를 나타내는 end지점은 pat의 길이를 이용했다.
(i+pat.length)

그런 다음 push를 통해서 위의 값을 arr에 담는다.
여기까지 진행하고 arr에 담긴 값을 확인해보면, 아래와 같이 나온다.
시작인덱스를 0,1...하나씩 이동하면서 값을 담은것을 확인할 수 있다

그리고 filter()를 통해서 pat과 일치하는 값만을 남긴다.
여기까지하고 또 확인을 해보면 아래와 같이 일치하는 값만이 남은 것을 볼 수 있다.

마지막으로 length를 통해서 배열의 길이를 구해서 몇개인지를 구한다.
인덱스를 이용해서 slice()를 할때 범위 지정에 대한 아쉬움이 있었다.
일단 저렇게 풀어서 문제는 pass했지만 "na"나 "a"와 같이 애초에 길이가 맞지 않는 값도 arr에 담긴다는 점이었다.
i의 마지막 인덱스를 지정하는데에 조금 더 신경을 썼어야했던 것 같다.
*/

//다른 사람의 풀이
function solution(myString, pat) {
    let count = 0;
    let index = myString.indexOf(pat);
  
    while (index !== -1) {
      count++;
      index = myString.indexOf(pat, index + 1);
    }
  
    return count;
}

/*
indexOf()를 이용해서 푼 코드이다.
전에 다른 문제를 풀면서 이와 유사한 원리로 푼 코드를 공부한 기억이 있었는데 문제를 보면서 indexOf를 이용할 생각을 전혀 안했다 ㅋㅋ 
알아두면 유용할 것 같아서 다시 공부하였다.

indexOf()를 사용할때 유의해야할점 그리고 이용하기 편하게 만드는 특징이 아래와 같다고 생각해서 정리했다.

indexOf()의 특징
1. 일치하는 첫번째 인덱스만 찾는다
2. 일치하는 값이 없으면 -1을 반환한다.
3. 두번째 인자는 검색을 시작할 인덱스

다시 위의 코드를 보면, 우선 count라는 변수를 0으로 초기화한다.
그리고 index라는 이름으로 myString에서 pat과 일치하는요소의 인덱스를 담는다.  index = myString.indexOf(pat) 
indexOf()는 일치하는 요소의 인덱스를 찾아준다는 점에서 유용하지만, 맨 첫번째인덱스만을 찾는다는 특징이 있다.
그래서 첫번째말고도 더 많은 요소들을 찾기 위해서 while문을 사용한다.
while문의 조건으로 index는 -1이 아니라고 지정한다 (=pat과 일치하는 값이 있다)
그래서 일치하는 값이 있다면 count를 1를 더한다.

그런 다음 index를 myString.indexOf(pat,index+1)로 재할당한다.
이렇게 재할당을 하는 이유는 검색을 시작할 인덱스를 index+1로 지정하여, 이전에 이미 찾은 인덱스의 이후부터 다시 탐색을 시작하게 만들기 위해서이다.
이렇게 하면 indexOf()를 이용해서 요소가 일치하는 모든 항목을 찾을 수 있다.
*/
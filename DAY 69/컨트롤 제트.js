//나의 풀이
function solution(s) {
    const stack = [];

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target);
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

//이 문제는 풀긴 풀었는데, 푸는데 꽤 시간이 걸렸다.
//Z라는 문자가 연속으로 나오는 경우가 어떤 의미인지 파악하지 못했던 것이 그 원인이다.

//stack이라는 빈 배열을 만들어주고 pop()과 push()를 이용해서 필요한 값만으로 채워나가는 방식이다.

//처음에 문제를 봤을때 pop()을 이용해서 풀수있지 않을까했는데 그렇게 푼 방식이어서 공부해보았다.

//우선 stack이라는 빈배열을 만든다.
//s.split(' ')으로 문자열을 공백을 기준으로 나눈 뒤, 배열로 만들고 forEach를 통해서 각각의 요소를 돌면서 특정동작을 수행하도록 한다.
//특정동작은 if문을 통해서 만약 요소의 값이 Z라면 stack.pop()을 하도록 한다.
//pop()은 배열의 가장 마지막 값을 제거하는 기능을 하므로 Z를 만나면 이전의 값을 제거할 것이다. 그리고 Z는 배열에 담기지 않는다. (else를 통해서만 push되도록 해주었기때문)

//만약 요소가 Z가 아니라면 stack.push(+target)을 통해서 배열의 맨 마지막에 요소가 추가되는데 +를 통해서 숫자로 변환된 값이 push되게 한다.
//forEach를 통해서 배열을 다 돌고 난뒤에 stack.length를 이용해서 빈배열인 경우를 처리해준다.

//새롭게 알게된 것
//reduce()는 빈 배열에 대해서 호출될 경우 에러를 던지는 동작을 가지고 있다.

//→ 스택이 비어있는 경우에 대한 처리가 필요하다.
//stack의 길이를 검사해서 만약 길이가 0이라면(스택이 비어있다면), 0을 리턴하도록 처리를 해주었다.
//그리고 빈배열이 아니라면, reduce를 통해서 값을 더한다.

//너무 어렵게만 생각했나보다 .. 그리고 알아도 모르고, 모르면 알아야니까 무조건 알자 .. 공부할 것들이 아직 많다 화이팅 !
//스택도 다시 한번 공부해봐야겠다 !!!


//다른 사람의 풀이
function solution(s) {
    let arr = s.split(' ');
    while (arr.includes("Z")){
      const index = arr.findIndex((e) => e === "Z");
     arr.splice(index-1, 2);
    }
     return arr.reduce((acc, cur) => acc + Number(cur), 0);
 }

//우선 문자열을 배열로 만들어야하기 때문에 split()을 사용했다. 공백을 기준으로 나눠야해서 split(' ')로 구분자를 넣어주었다.
//그런다음 Z를 포함하고 있는것만 처리해야하기 때문에 while문을 사용한 것 같다.
//while은 주어진 조건이 참인경우 반복적으로 코드를 수행하기때문에 이런 방법을 이용하면 Z의 값이 여러번 방법되어 나와도 원하는 결과를 얻을 수 있다.
//굳이 while문을 이용해서 반복적인 수행을 하도록 만든 이유는 findIndex때문이다. 

//findIndex()는 찾고자하는 값의 인덱스를 찾을때 사용하는 메서드인데, 조건을 충족하는 첫번째 인덱스만을 반환하기 때문에 while문을 쓰지 않으면 처음만나는 Z값의 인덱스만을 찾고 끝난다. 그래서 while문을 통해서 여러개의 Z를 만나더라도 반복해서 인덱스를 찾을 수 있게 한다.
//arr에서 찾는 값이 Z이면 인덱스를 찾도록 한뒤, const index = arr.findIndex((e) => e === "Z")

//splice()를 이용해서 해당하는 인덱스의 값들을 제거한다. arr.splice(index-1, 2)
//splice(시작인덱스, 제거할 요소의 수)이므로 시작인덱스를 (Z의 인덱스-1)로 잡고 제거할 요소의 수를 2로 잡아서 이전값과 Z를 모두 제거한다.
//while이 반복되면서 이렇게 Z와 Z앞의 값은 모두 제거되고, 나머지만 배열안에 남는다.
//더이상 Z를 포함하지 않을때 while문에 빠져나온다. (arr.includes("Z"))의 값이 false가 되기때문)
//그런 다음 배열안에 남아있는 값들을 reduce()를 통해서 더해주는데 안의 값들은 아직 string이기 때문에 cur에 Number()를 처리해서 값들을 모두 숫자로 바꾸면서 더해주도록 처리한다. 

//다시 공부한 메서드
//findIndex():충족하는 배열의 첫 번째 요소 인덱스를 반환. 테스트 기능을 만족하는 요소가 없으면 -1이 반환
//Array.findIndex()

//주의할 점
//충족하는 첫번째 인덱스만을 반환하므로 주의해야한다. 만족하는 모든 값을 다 찾는건 아니다.
//위에서 푼것과 같이 이런 문제점을 해결하기 위해서 while문을 통해서 여러개의 충족하는 값들의 인덱스를 모두 찾을 수도 있다.

/*
splice(): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
Array.splice()

    array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
start: 배열의 변경을 시작할 인덱스

deleteCount: 배열에서 제거할 요소의 수

item: 배열에 추가할 요소

splice()는 slice()와 다르게 원본을 변경하므로 주의해야한다.
*/

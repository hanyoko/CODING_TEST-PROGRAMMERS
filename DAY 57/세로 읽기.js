//나의 풀이
function solution(my_string, m, c) {
    let answer='';
  
    for(i=c-1; i<my_string.length; i+=m){
        answer+=my_string[i];
    }
    
    return answer;
}

//가로로 m글자씩 적고, 세로의 c번째값들만 추출해서 하나의 문자열을 만드는 것이 목표이다.
//위의 첫번째예시를 기준으로 예를 들어서 이해한 것을 정리하면,
//4글자씩 가로로 적고 2열의 값들만 추출한다. (결과값: "happy")
//규칙을 찾아보면, 인덱스는 m만큼씩 차이가 난다
//(h와 a의 인덱스는 m만큼 차이난다. a와 p도, p와 p도, p와 y도 m만큼의 차이이다.)
//인덱스가 일정하게 증가하는 규칙을 이용해서 풀어보았다.

//문자열을 더한 결과값을 얻을 변수를 answer라고 지어주고 ''빈문자열로 string타입으로 초기값을 설정한다.
//(문자열을 더한 값을 최종적으로 얻을 것이기때문에)
//그런다음, for문을 이용해서 i의 범위를 지정한다.
//c는 1,2,3..이런식으로 열을 지정하지만 인덱스는 0부터 시작한다.
//c=1 이면 실제인덱스=0
//c=2 이면 실제인덱스=1
//c=3 이면 실제인덱스=2...
//c는 (실제인덱스-1)인것을 알 수 있다.

//그래서 초기값 i를 i = c-1로 설정한다.
//(예제1를 기준으로 예를 들면 c=2이므로 2열에 있는 값만을 추출할 의도이기때문에 i=1로, 1번째 인덱스에 있는 값들만을 추출할 수 있다.)

//그 다음으로 추출해야 할 값은 위에 적은 규칙과 같이 인덱스의 차이가 m만큼씩이다.
//따라서 for문을 한번 돌때마다 m씩을 더한다. i +=m 
//for문 안에서는 +=복합할당연산자를 이용하여 answer에 my_string의 i번째 인덱스에 있는 값들만을 추출해서 축적시킨다.
//이렇게하면 초기값인 c-1인덱스에서 시작하여 인덱스값이 m만큼차이나는 값들만을 for문을 돌면서 answer에 축적시킬 수 있다.

//다른 사람의 풀이
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}

//나머지를 이용해서 푼 코드도 있었다. 

//우선, [...my_string]을 이용해서 문자열을 배열로 만든다. (filter를 이용하기 위해서)
//그런 다음 filter의 인덱스를 통해서 원하는 인덱스를 가지고 있는 값들만 남긴다.

//m으로 나눈 나머지가 c-1인 것들만 남기고, 마지막으로 배열을 문자열로 다시 바꾸기 위해서 join('')을 해준다.

//나머지를 이용해서 풀 생각은 못했는데 이 방법도 간단하고 좋은것같다.
//가로의 길이는 어차피 m으로 정해져있으므로, 그 길이를 벗어나는만큼이 열의 값이 될 것이다. 

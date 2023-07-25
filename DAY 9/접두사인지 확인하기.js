//나의 풀이
function solution(my_string, is_prefix) {
    if(my_string.startsWith(is_prefix)){
        return 1;
    }else {
        return 0;
    }
}

//처음에 접두사를 어떻게 확인해야할지 잘 몰라서 좀 헤맸다 이 문제는 ....
//그래서 특정 인덱스를 확인하는 메소드가 있는지 찾아봤고,
//startsWith() 라는 메소드를 새로 알게 되었다. !!! 정리해야지

//다른 사람의 풀이
function solution(my_string, is_prefix) {
    return +my_string.startsWith(is_prefix);
}
//굳이 if문이나 삼항연산자를 쓰지 않고도 코드를 더 간단하게 표현하는 방법이 있었다.
//+ 연산자는 Boolean 값을 0 또는 1의 숫자로 강제 변환한다.
//이렇게하면 코드를 조금 더 간단하게 짤 수 있을 것 같다 ....!

const solution = (my_string, is_prefix) => +(my_string.indexOf(is_prefix) == 0);

//indexOf(): 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
//여기에서 주어진 값과 일치하는 인덱스를 반환한다는 것이 중요한 점인 것 같다.
//처음에는 includes()도 생각했었는데, includes()는 안되고 indexOf()는 되는 이유가 바로 이 특징때문이다.
//includes는 처음이 아니라 중간에 위치한 값도 접두사처럼 인식을 해버리기때문이다.
//indexOf()를 통해서 is_prefix가 my_string의 0번째 인덱스인지를 검사한다.

function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}

//slice를 이용한 방법도 생각해봤어서 궁금해서 이 코드도 공부해보았다.
//slice()를 이용해서 begin,end지점을 정해서 my_string을 자른 다음에 그 값이 is_prefix와 같은지 비교한다. 

//(slice()는 end는 미포함하기 때문에 end를 is_prefix.length로 지정한다)

//시작지점을 0부터로 만들었기 때문에 이 값은 접두사가 될것이다.
//이렇게 접두사인 값이 is_prefix와 일치하면 1을 아니라면 0을 리턴한다.



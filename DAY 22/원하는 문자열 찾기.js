//나의 풀이
function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    return myString.includes(pat) ? 1 : 0;
}

//값을 포함하는지 여부는 includes()를 통해서 쉽게 검사할 수 있기 때문에
//이 문제에서 생각해봐야 할 문제는 대소문자의 구분없이 어떻게 찾을까 하는 것이라고 생각했다.
//그래서 아예 대문자로, 아니면 소문자로 통일한 다음에 includes()를 통해서 값을 포함하는지 여부를 검사하는 방법으로 구해보았다.
//myString과 pat을 toLowerCase()를 이용하여서 아예 소문자로 모두 바꾸고,
//pat의 값도 모두 소문자로 바꾼다음에 일치하는 값이 있는지를 검사하였다. 

//다른 사람의 풀이
function solution(myString, pat) {
    const regex = new RegExp(pat, "gi");
    return +regex.test(myString);
}

//g (전역): 패턴과 일치하는 모든 부분을 찾는다 (전역 플래그를 사용하지 않으면 첫 번째 일치하는 부분만 반환)
//i (대소문자 무시): 패턴을 대소문자 구분 없이 일치시킴 (즉, A와 a를 동일하게 취급)
//평소에 replace()를 사용하면서 /gi를 자주 봤었지만 활용하지 못했다 ..
//그래서 이 방법을 다시 한번 제대로 공부해야겠다고 생각했다.

//정규식을 만드는 방법을 리터럴 / 생성자 2가지 방법이 있는데 위의 경우처럼 매개변수로 가변적인 값을 받을때는 생성자를 통해 만들어야한다고 한다.
//그래서 리터럴표기법이 아니라 생성자함수를 통해서 정규식을 생성해주어야한다.

const regex = new RegExp(pat, "gi"); // 생성자함수를 통한 정규식생성

//정규식에서는 디테일한 고급탐색을 위해서 flag라는 것을 이용한다. 
//위의 코드에서는 "gi"가 flag이다. 
//정규식 객체 regex를 생성하는데, 생성자함수를 이용하여 만든다. (new RegExp())
//그리고 그 값은 pat을 대소문자구분없이(i), 전역적으로 검색한다(g)  new RegExp(pat, "gi")

//test(): 문자열에 일치하는 부분이 있는지 확인. true 또는 false를 반환
regex.test(myString)

//test메서드를 통해 myString에 정규식 regex의 값과 일치하는 값이 있는지를 검사하고 Boolean값으로 반환받는다.
//일치하는 값이 있으면 true, 없으면 false가 리턴 될 것이다.
//이것을 + 연산자를 통해서 숫자로 바꿔준다.
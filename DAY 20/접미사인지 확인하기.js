//나의 풀이
function solution(my_string, is_suffix) {
    let myLen = my_string.length;
    let isLen = is_suffix.length;
    return my_string.slice(myLen - isLen) === is_suffix ? 1 : 0;
}

//길이의 차이를 이용해서 풀어보았다
//slice()는 string이나 array를 자를때 사용하는데 인자를 하나만 넣으면 start지점을 뜻한다. 
//my_string의 길이 - is_suffix의 길이 = slice의 start지점
//(앞에서 몇번째부터 자를것인지를 length의 차이로 구해서 slice의 start지점으로 한다.)
//banana와 ana를 예시로 하면 6-3 =3 이므로 slice의 start지점은 3번째인덱스가 될것이다.
//인덱스는 0부터 있으므로 3번째 인덱스는 4번째에 있는 a가 되고 여기서 부터 자르면 ana이다.
//그리고 그렇게 구한 값이 is_suffixd와 같은 값인지 비교한뒤, 삼항연산자를 사용하여 맞으면 1, 아니면 0을 반환한다.

//slice(): 문자열의 일부를 추출하면서 새로운 문자열을 반환  어디부터 어디까지 잘라주지?
//string.slice()
//array.slice()

 
//string과 array모두에 사용가능
//새로운 문자열을 반환한다는 점이 유사한 기능을 하는 splice()와 큰 차이점 (splice()은 원본변경)

//인자가 2개오면 start, end지점 (end 미포함)

//str.slice(beginIndex[, endIndex])
//end는 미포함하므로 주의해야한다.

//알고리즘을 풀면서 자바스크립트의 다양한 기능을 하는 메소드들을 익히고, 또 그걸 잘 활용할 수 있도록 익숙해지고 있는 것 같아서 좋다. 
//slice()도 정말 자주 사용하는 메소드 중에 하나인데 중요한 특징들이 눈에 보여서 이번에 문제를 풀면서 또 정리해보았다.
//slice()는 처음 사용할때는 자꾸 end 미포함을 까먹었어서 특별히 표시해두었다.
//그리고 slice()를 한마디로 정의하는 말이 생각이 났는데 "어디부터 어디까지 자를까"였다 ㅋㅋ
//그래서 적어놓았다. 이름처럼 "자른다"의 역할을 할 것은 충분히 예상가능하지만 어디부터 어디까지 자르는 것인지를 정할 수 있다는게 제일 중요한 특징인것같아서 잊어버리지 않도록 하려고 한다.
//(필요하면 찾아본다고 하더라도 slice()는 워낙 자주쓰는거니까 저정도는 외워둬야하지 않을까 하는 생각도 든다 ..)

//다른 사람의 풀이
function solution(my_string, is_suffix) {
    return my_string.endsWith(is_suffix) ? 1 : 0;
}

//새로운 메소드를 알게 되었다 .. 길이의 차이를 이용해서 푸는 데까지 많은 고민을 하고 풀었는데 이렇게 간단한 방법이 ..
//endsWith():  어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환
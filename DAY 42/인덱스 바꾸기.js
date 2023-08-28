//나의 풀이
function solution(my_string, num1, num2) {
    let answer = '';
    let str1 = my_string[num1];
    let str2 = my_string[num2];
    let splitArr = my_string.split('');
    
    splitArr[num1] = str2;
    splitArr[num2] = str1;
     
    return splitArr.join('');
}

//먼저, str [1], str [2]에 해당되는 문자를 변수화해 준다. 
//split 된 배열도 splitArr에 할당해 준다.
//그리고 splitArr에서 해당되는 인덱스 번호에 각 각 str1, str2로 바꾸어 준다. 

//다른 사람의 풀이
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

//이런 식으로 구조분해할당을 이용하면 더 간편하게 해결할 수 있다 ! 

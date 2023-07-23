//나의 풀이
function solution(my_string, letter) {
    return my_string.split(letter).join('')
}

// replace를 사용하려고 했는데 대문자는 적용되지 않아서 split과 join을 사용했다.

//다른 사람의 풀이
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

//replaceApll 메소드를 사용하면 되구나 ... 새로운 메소드를 알았다 .. 정리할 것 !
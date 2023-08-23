//나의 풀이
function solution(order) {
    return [...String(order)].filter((v) => ["3", "6", "9"].includes(v)).length;
  }

//주어진 매개변수 order는 숫자 타입이므로, String type으로 변경해야 배열 형태로 나눌 수 있다.
//따라서 […String(order)]하여 문자열 타입의 배열 형태로 복사 후
//filter()함수를 통해 [‘3’, ‘6’, ‘9’]가 있는지 includes()를 사용하여 포함된 것의 length를 반환한다.

//다른 사람의 풀이
function solution(order) {
    return ("" + order).split(/[369]/).length - 1;
}

//다른 사람의 풀이로 문자열 형태의 배열로 복사한 order를 split(/[369]/)로 분할하여 그것들의 length - 1을 반환하였다.
//split()에 정규표현식을 사용하였다는 점이 기발하다.

//ex)
let order = 29423;
console.log(String(order).split(/[369]/)); // ['2', '42', '']
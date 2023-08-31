//나의 풀이
function solution(before, after) {
    const beforeASC = [...before].sort()
    const afterASC = [...after].sort()

    return JSON.stringify(beforeASC) === JSON.stringify(afterASC) ? 1 : 0
}

//1.비교하기 편할 수 있게 before과 after 배열을 오름차순으로 정렬한다.
//2.정렬된 두 배열이 같은지 비교하고, 같으면 1, 다르면 0을 반환한다.

//2번에서 꽤 오랜 시간을 보냈다. 아무리 배열 내의 값이 같다고 하더라도, 두 배열은 결코 같은 것이 아니다.
//왜냐하면, 자바스크립트의 모든 것은 객체이고, 배열 또한 객체이기 때문에 두 배열을 비교할 때 배열 안의 값이나 개수를 비교하는 것이 아니라 해당 배열의 참조를 확인하기 때문이다.

//따라서 나는 두 배열을 비교할 수 있는 방법을 찾아보았고, https://flexiple.com/javascript/javascript-array-equality/ 에서 내가 원하는 방법들을 찾았다.

//내가 사용한 방법은 JSON.stringify()를 이용하는 방법이었는데,
//이 메서드는 자바스크립트 값이나 객체를 JSON 문자열로 변환하기 때문에 두 배열을 문자 그대로 비교할 수 있는 방법이었다.
//JSON에 관한 것은 한 달 전, 노마드코더를 통하여 배웠는데 다 까먹어서... 다시 공부해야겠다는 생각을 했다...😭

//다른 사람의 풀이
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

//위 방법은 문자열을 배열로 바꾼 뒤, 오름차순으로 정렬하고, 다시 문자열로 바꾸어 비교하는 방법이었다.
//내가 생각한 방법과 비슷하지만, 나는 배열 그대로 비교하는 방법을 택했고, 위 코드는 문자열로 다시 바꾸어 비교하는 방법을 택했다.
//비슷한 방법인데도 불구하고 위 코드가 가독성이 더 높아 나 또한 이런 식으로 생각할 수 있도록 여러 문제를 접해보고 풀어봐야겠다고 생각했다.



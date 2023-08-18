//나의 풀이
function solution(my_string) {
    const answer = my_string.split("").map(Number).filter(el => !isNaN(el)).sort((a, b) => a-b);
    return answer;
}

//string을 split을 활용해 array화 시키고 map으로 Number화 시키면 characters는 NaN으로 출력된다.
//NaN인 부분을 제외한 Numbers만 filter하여 sort로 오름차순으로 정렬하면 끝!

//내가 막혔던 부분은 어떻게 NaN을 filter에서 제외하는가 였다..
//처음엔 그냥 array.filter(el => el !== NaN) 으로 풀어봤지만 filter가 제대로 동작하지 않았다.
//Google에 검색해 보니, isNaN을 사용하면 된다고 하여 바로 적용!
//구글의 도움이 있었지만(?) 다행히 문제풀이 성공 !

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

//다른 사람의 풀이
function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split('').sort((a, b) => a - b).map(Number);
}

//정규표현식을 사용해서 푸는 방법 .... 체크 ... !

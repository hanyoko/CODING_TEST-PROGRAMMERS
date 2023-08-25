//나의 풀이
function solution(strArr) {
    return strArr.filter(a => !a.includes('ad'));
}

//전에 특정 문자 제거하기 문제에서 공부했던 방법이다.
//filter를 활용해서 ad가 포함되지 않도록 필터링 해준 후 return 하는 것 !!

//다른 사람의 풀이
function solution(strArr) {

    strArr = strArr.filter((x)=>{
        return x.indexOf("ad") == -1
    })

    return strArr;
}

//includes 대신에 indexOf를 활용 !

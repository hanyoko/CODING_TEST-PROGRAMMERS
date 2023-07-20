//나의 풀이
function solution(s1, s2) {
    return s1.filter((e)=> s2.includes(e)).length
}

//filter 메소드와 includes 메소드
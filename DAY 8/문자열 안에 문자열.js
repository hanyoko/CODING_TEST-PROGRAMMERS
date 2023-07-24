//나의 풀이
const solution = (str1, str2) => str1.includes(str2) ? 1 : 2


//다른 사람의 풀이
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}

//split을 사용해서 푼 풀이방법 ... 기준점을 기준으로 나눈 후의 개수
//split 기준점으로 나누면 값 어떻게 나오는지 볼 것
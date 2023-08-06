//나의 풀이
const solution = rny_string => rny_string.replaceAll("m", "rn");

//replaceAll을 활용해서 쉽게 변경했다.
//replaceAll을 몰랐을 때는 비슷한 알고리즘 문제를 풀 때 한참 걸렸는데 ... 뿌듯하다 !

//다른 사람의 풀이
function solution(rny_string) {
    return rny_string.replace(/[m]/g, 'rn')
}

//정규표현식을 사용하여 변경하는 방법

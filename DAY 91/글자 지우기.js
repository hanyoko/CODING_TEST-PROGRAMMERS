//나의 풀이
function solution(my_string, indices) {
    return [...my_string].filter((x,i) => !indices.includes(i)).join("");
}

//해당 인덱스를 가지고 있으면 filter로 걸러낸다.

//다른 사람의 풀이
function solution(m, a) {
    var answer = '';

    for(let i = 0; i<m.length; i++){
        if(!a.includes(i)){
            answer += m[i]
        }
    }

    return answer;
}

//for문을 활용하고 includes가 아니라면 추가하기 !

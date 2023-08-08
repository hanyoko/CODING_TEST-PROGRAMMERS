//나의 풀이
function solution(my_string, index_list) {
    return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}



//다른 사람의 풀이
function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}

//map으로 풀다가 안 되서 reduce를 사용했는데 .. 내가 join을 map 안에 넣는 실수를 해버렸다
//정신차리자 ... !!

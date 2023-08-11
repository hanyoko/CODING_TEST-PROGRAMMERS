//나의 풀이
function solution(num_list) {
    num_list.sort((a, b) => a-b);
    return num_list.slice(0, 5);
}

//sort를 이용해서 배열을 오름차순으로 만들어주고,
//slice를 이용해서 배열을 특정 길이만큼 잘라서 return 시키는 방법으로 풀었다 !
//가장 좋아요가 많이 눌린 풀이법과 똑같아서 뿌듯했다 ... !

//다른 사람의 풀이
function solution(num_list) {
    answer = []
    num_list.sort((a, b)=>a-b)
    for (i=0; i<5; i++){
        answer.push(num_list[i])
    }
    return answer
}

//for 문을 사용해서 push 해주는 방법 !

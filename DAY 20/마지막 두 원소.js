//나의 풀이
function solution(num_list) {
    let len = num_list.length-1;
    
    if(num_list[len] > num_list[len-1]){
        num_list.push(num_list[len] - num_list[len-1])
    }else {
        num_list.push(num_list[len] * 2)
    }
    return num_list;
}

//배열의 길이를 이용해서 풀어보았다
//정수 리스트 num_list의 길이를 변수로 설정 후에
//마지막 원소와 그 전 원소 값을 비교했다
//그리고 push !!

//다른 사람의 풀이
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}

//배열을 거꾸로 만들고 구조분해할당 후 0번 1번째 크기비교후 배열풀어서 조건 추가 !!

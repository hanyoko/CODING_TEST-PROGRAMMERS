//나의 풀이
function solution(arr, delete_list) {
    return arr.filter(a => !delete_list.includes(a));
}

//filter를 이용해서 delete_list에 포함되지 않는 것을 리턴했다
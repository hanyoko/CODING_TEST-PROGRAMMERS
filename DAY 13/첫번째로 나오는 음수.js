//나의 풀이
function solution(num_list) {
    return num_list.findIndex(a => a < 0);
}

//findIndex

//다른 사람 풀이
function solution(num_list) {
    let result = -1;

    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0) {
            result = num_list.indexOf(num_list[i]);
            break;
        }
    }

    return result;
}

//for문에 조건문을 활용하고 indexOf
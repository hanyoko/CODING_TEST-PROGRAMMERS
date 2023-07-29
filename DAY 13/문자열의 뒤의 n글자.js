//나의 풀이
const solution = (my_string, n) => my_string.slice(-n);


//다른 사람 풀이
function solution(my_string, n) {
    var answer = '';
    let m = n * -1
    let str = [];
    str.push(...my_string)
    answer = str.splice(m, n)
    answer = answer.join().replaceAll(',','')
    return answer;
}

//배열을 사용해서 push 해주고 join으로 합쳐준 뒤에 replaceAll로 대체 !
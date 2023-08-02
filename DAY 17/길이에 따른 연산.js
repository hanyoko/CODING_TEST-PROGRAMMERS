//나의 풀이
function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        answer = num_list.reduce((acc, cur) => acc + cur);
    }else {
        answer = num_list.reduce((acc, cur) => acc * cur);
    }
    return answer;
}



//다른 사람의 풀이

const solution = num_list => num_list.reduce((a, v) => num_list.length>10 ? a+v : a*v)

//reduce 안에서 삼항연산자 메모 ....

function solution(num_list) {
    const mult = (acc, v) => acc * v;
    const add = (acc, v) => acc + v;

    return num_list.length > 10
        ? num_list.reduce(add, 0)
        : num_list.reduce(mult, 1);
}

//reduce식을 변수로 설정하고 return에서 삼항연산자 활용 !




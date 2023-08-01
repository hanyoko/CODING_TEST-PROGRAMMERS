//나의 풀이
const solution = num_str => num_str.split('').reduce((acc, cur) => acc + Number(cur), 0);

//num_str을 split으로 분할 후, reduce 매개변수로 초기값 숫자열 0에 더할 값을 Number함수로 숫자열로 변환해서 더해줬다.

//다른 사람의 풀이
function solution(num_str) {
    var answer = 0;

    num_str.split("").map((a)=>answer+=Number(a))

    return answer;
}
//split로 분할된 배열들을 map을 사용해서 answer에 출력된 값을 문자열을 숫자열로 바꿔주며 각각 더해주는 방법인 것 같다. !

function solution(num_str) {
    var answer = 0;

    num_str.split('');

    for(let i = 0; i < num_str.length; i++){
        answer += parseInt(num_str[i])
    }

    return answer;
}
//split까지는 동일하지만 map이 하는 과정을 for문을 이용해서 출력시키는 방법이다.
//answer변수에 for문을 이용해서 각 배열의 순서에 맞는 값을 더해준다 !



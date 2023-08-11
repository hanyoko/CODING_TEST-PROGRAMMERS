//나의 풀이
function solution(names) {
    var answer = [];
    for(let i=0; i<names.length; i++){
        if(i % 5 == 0){
            answer.push(names[i]);
        }
    }
    return answer;
}



//다른 사람의 풀이
const solution = names => names.filter((_, i) => !(i % 5))

//filter로 깔끔하게 .....

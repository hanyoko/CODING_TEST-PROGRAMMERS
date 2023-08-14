//나의 풀이
function solution(todo_list, finished) {
    var answer = [];

    for(let i=0; i<todo_list.length; i++){
        if(finished[i] === false){
            answer.push(todo_list[i]);
        }
    }
    return answer;
}

//for 문을 활용해서 todo list의 값에 따라 새로운 배열을 push

//다른 사람의 풀이
function solution(todo_list, finished) {
    return todo_list.filter((_, i) => !finished[i]);
}

//filter를 사용해서 만든 방법 ..
//이 방법을 이용해서 다시 만들어봐야겠다
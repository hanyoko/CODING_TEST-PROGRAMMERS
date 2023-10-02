//나의 풀이
function solution(arr, queries) {
    var answer = [...arr];
    for(let i=0; i<queries.length; i++){
        let box = answer[queries[i][0]]
        answer[queries[i][0]]=answer[queries[i][1]];
        answer[queries[i][1]]=box 
    }
    return answer;
}

/*
function solution(arr, queries) {
    var answer = [...arr];
        [answer[0],answer[3]]=[answer[3],answer[0]]; 
    }
    return answer;
}
let arr=[1,2];
[arr[0],arr[1]]=[arr[1],arr[0]];

console.log(arr) //[2,1]
*/

//다른 사람의 풀이
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}

//forEach 활용

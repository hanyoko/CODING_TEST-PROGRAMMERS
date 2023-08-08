//나의 풀이
function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 !== 0){
        for(let i=0; i<arr.length; i++){
            i % 2 == 0 ? answer.push(arr[i]+n) : answer.push(arr[i])
        }   
    }else{
        for(let i=0; i<arr.length; i++){
            i % 2 !== 0 ? answer.push(arr[i]+n) : answer.push(arr[i])
        } 
    }
    return answer;
}



//다른 사람의 풀이
const solution = (arr, n) => {
    if(arr.length%2){
        return arr.map((v,i)=>{
            if(i%2===0) return v+n;
            return v;
        })
    } else {
        return arr.map((v,i)=>{
            if(i%2) return v+n;
            return v;
        })
    }
}

//map을 이용하면 더 간단하게 작성할 수 있었는데 조건문에 반복문으로 너무 지저분하게 작성한 것일까 ....

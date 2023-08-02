//나의 풀이
function solution(arr) {
    return arr.map(num => {
        if(num >= 50 && num % 2 === 0) return Math.floor(num / 2);
        if(num < 50 && num % 2 === 1) return num * 2;
        return num
    })
} 



//다른 사람의 풀이
function solution(arr) {
    let answer = [];
    for (let i = 0; i<arr.length; i++){
        if(arr[i]>=50 && arr[i]%2===0){
            answer.push(arr[i]/2)
        } else if (arr[i]<50 && arr[i]%2!==0){
            answer.push(arr[i]*2)
        } else {
            answer.push(arr[i])
        }
    }
    return answer;
}

//map이 기억이 나지 않았더라면 이렇게 풀었을 것 같다 !
//for문을 활용한 풀이 방법.



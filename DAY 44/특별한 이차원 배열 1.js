//나의 풀이
function solution(n) {
    const answer = [];
    let arr =[]
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i===j){
                arr.push(1)
            }else{
                arr.push(0)
            }
        }
        answer.push(arr) // arr = [1, 0, 0], arr =[0, 1, 0],  arr =[0, 0, 1]
        arr=[] // 초기화
    }
    return answer;
}



//다른 사람의 풀이
function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0))
    
    return arr.map((a, i) => {
        return a.map((b, bi) => bi === i ? 1 : b)
    })
}

//Array(), fill() 그리고 map()을 활용해서 더 깔끔하게 .... !

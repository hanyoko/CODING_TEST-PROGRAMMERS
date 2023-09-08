//나의 풀이
function solution(myString) {
    return myString.split('x').filter(a => a !== "").sort()
}

//메소드들을 활용해서 풀었다 !!!!!
//spilt() / filter() / sort()

//다른 사람의 풀이
function solution(myString) {
    var answer = myString.split("x").sort();
    let aa = [];
    answer.map((a)=>{
        if(a!=""){
            aa.push(a)
        }
    })
    return aa;
}

//map()을 활용해서 빈배열에 push 해주는 방법

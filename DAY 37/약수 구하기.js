//나의 풀이
function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i++){
        if(n % i === 0){
            answer.push(i);
        }
    }
    return answer;
}

//for문을 이용해서 n을 i로 나눴을 때 나머지 값이 0인 i를 push 해주는 방법으로 풀었다.

//그런데..for를 웬만하면 사용하지않으려고 노력하고 있기에 다른 방법을 고민해봤다.

//다른 풀이
function solution(n) {
    let ans = [];
    
    let arr = new Array(n + 1).fill(0);
    
    arr.forEach((item, index) => {
        if(n % index == 0){
            ans.push(index);
        }
    })
    
    return ans;
}

//n + 1의 길이를 가지는 배열(0 ~ n까지의 인덱스를 가짐)을 생성하고 index를 활용하는 방법으로 forEach()를 사용했다.


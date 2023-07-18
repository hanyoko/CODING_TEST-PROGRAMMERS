//나의 풀이
function solution(n) {
    const result = [];
    
    for (let i=0; i<=n; i++){
        if(n%i===0){
            result.push(i)
        }
    }
    return result.length;
}

//다른 사람 풀이
function solution(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}

//방법은 잘 모르겠지만 .. 공부해보려고 !
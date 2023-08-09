//나의 풀이
function solution(n) {
    answer = [];
    for(let i=1; i<=n; i++){
        if(i % 2 !== 0){
            answer.push("수");
        }else
        answer.push("박");
    }
    return answer.join("");
}



//다른 사람의 풀이
const waterMelon = n => "수박".repeat(n).slice(0,n);

//repeat으로 무한 반복을 시키면서 slice로 n만큼 잘라주는 .. 내 코드 보다 훨씬 간단하다

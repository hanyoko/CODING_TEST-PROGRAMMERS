//나의 풀이
function solution(left, right) {
    let num = 0;
    
    for(let i=left; i<=right; i++){
        let divide = [];
        for(let j=0; j<=i; j++){
            if(i % j == 0){
                divide.push(j);
            }
        }
        num += divide.length % 2 == 0 ? i : -i;
    }
    return num;
}



//다른 사람의 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

//특정수의 제곱근을 했을때 결과값이 정수라면 약수의 갯수가 홀수 라는것을 생각하지 못했다 ..
//아니 정확히는 생각이 아마 절대 나지 않았을 것 같다..
//자기자신을 제곱하는 수가 1개 추가되는것 이니까 홀수 갯수가 나오고 이것으로 판별을 할 수 있었다니...
Math.sqrt() //이라는 제곱근을 계산해주는 함수가 있었지만 사용하지 못했네
//Math는 정말 알면알수록 함수갯수가 많은거 같다
//아마 첫번째 이유가 생각이 났더라면 제곱근을 구해주는 함수가 있는지 검색해보았을텐데 1을 몰랐으니 2도 생각이 났을리가 ..

//나눗셈, 나머지 연산자와 배열의 길이를 기용해서 어찌 문제를 풀긴했지만 수학적으로 접근해야하는 프로그램을 짤 때는 좀 더 생각을 해보고 프로그램을 만드는 것이 좋겠다
//단순히 계산을 해서 여러 변수에 담아서 답을 추출하니 좀 너저분하게 풀이가 된 것 같고
//함수를 제대로 활용하지 못한 것 같은 점이 좀 많이 아쉽고 앞으론 무작정 만들지 않고 생각을 좀 더 해보고 문제를 풀어나가야겠다 !!!!

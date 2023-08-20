//나의 풀이
function solution(arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<arr1.length; i++){ //[1,2][2,3]
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){ //arr1 안의 배열의 길이 (2번)
            sum.push(arr1[i][j] + arr2[i][j]) // 1번째 1+3, 2번째 2+4 / 3번째 2+5 4번째 3+6
        }
        answer.push(sum) // [4,6],[7,9]
    }
    return answer;
}

//간단하게 2차원 배열을 for문을 돌려 2개의 배열을 같은 인덱스끼리 덧셈해주기만 하면 된다.

//다른 사람의 풀이
function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

//나는 sum이라는 새로운 배열을 만들어 합한 값들을 넣어주고, sum에 담긴 합해진 배열들을 다시 answer에 넣어주어 풀었는데,
//다른 사람의 풀이에서 새로운 배열을 만들지 않고, answer 하나만을 이용하여 푸는 법을 배웠다.

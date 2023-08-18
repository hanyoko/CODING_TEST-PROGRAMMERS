//나의 풀이
function solution(numbers) {
    numbers.sort((a, b) => a-b);
    let answer = Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
    return answer;
}

//예를 들어 numbers = [1, 2, -3, 4, -5] 일 경우 최댓값은 15가 되어야 한다.
//음수, 양수, 0, 같은 수까지 경우의 수가 많아서 (특히 음수) 어떻게 해야 할지 고민했다..
//먼저 내림차순이든 오름차순이든 차순으로 정리를 한다 > 그러면 한쪽엔 양수/한쪽엔 음수가 있게 된다.

//예시를 오름차순으로 해보면 아래와 같다.
//이 때 큰수끼리 곱해보고 작은수끼리 곱했을 때 어느 것이 더 큰지 비교하면 된다.

[-5, -3, 1, 2, 4]

8 < 15

//좋아요가 제일 많았던 풀이방법과 똑같아서 뭔가 뿌듯했다 ... !

//다른 사람의 풀이
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}

//반복문에 반복문을 이용해서 배열에 push 해주는 방법
//Math.max() 를 이용해주는 것은 같았다 !

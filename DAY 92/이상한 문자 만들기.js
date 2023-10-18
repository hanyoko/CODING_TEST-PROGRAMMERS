//나의 풀이
function solution(s) {
    let answer = [];
	let result = s.split(" ");
    
    for (let i=0; i<result.length; i++) {
        let sum = '';
        
        for(let j=0; j<result[i].length; j++) {
            if (j%2 === 0) {
                sum += result[i][j].toUpperCase();
            } else {
                sum += result[i][j].toLowerCase();
            }
        }
        answer.push(sum);
    }
    return answer.join(' ');
}

/*
function solution(s) {
    let answer = [];
    // 먼저 s의 값을 공백을 기준으로 쪼갠다
    let result = s.split(" ");

    // 그리고 i가 0부터 result의 길이만큼 돌게 되는데
    // 이 때 sum이라는 변수를 새로 만들어 문자열을 넣어준다
    for (let i=0; i<result.length; i++) {
        let sum = '';
        // 다시한번 이중 for문을 이용하여 j가 result[i]의 길이만큼 돌게 되는데
        // 여기서 만약 j가 짝수라면 sum에 result[i][j]를 대문자로 붙여준다.
        // 만약 j가 홀수라면 sum에 result[i][j]를 소문자로 붙여준다.
        for(let j=0; j<result[i].length; j++) {
            if (j%2 === 0) {
                sum += result[i][j].toUpperCase();
            } else {
                sum += result[i][j].toLowerCase();
            }
        }
        // 다음 단계로는 answer에 sum을 push
        answer.push(sum);
    }
    // 마지막으로 분리된 배열을 공백을 기준으로 하나의 문자열로 합쳐서 return
    return answer.join(' ');
}
*/


//다른 사람의 풀이
function solution(s) {
    let answer = '';
    let index = 0;
    for (let spell of s) {
        answer += (index % 2 === 0) ? spell.toUpperCase() : spell.toLowerCase();
        index += 1;
        if (spell === ' ') index = 0;
    }
    return answer;
}

/*
for of 문 사용
for문으로 s를 한 글자 한 글자 체크하면서 index가 짝수이면 toUpperCase를 이용하여 대문자로, 홀수이면 toLowerCase를 이용하여 소문자로 변경한다.
단어 단위의 인덱스를 판단해야해서 공백이 나타나면 인덱스를 다시 0으로 초기화 시켜주었다.
처음에는 문제에 짝수 번째, 홀수 번째라고 되어 있어서 헷갈릴 뻔했는데 제한사항과 입출력 예시를 보면 인덱스를 이용하는 방법으로 푼 풀이다 !
*/


//다른 사람의 풀이 2
const solution = s => s.split(" ").map(x => x.split('').map((c, i) => c = i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join("")).join(" ");

/*
다른 사람의 풀이에서 만난 새로운 방식의 코드
공백을 기준으로 split한 배열로 map하고, 단어를 한 글자씩 잘라서 위의 예시처럼 인덱스 짝수 / 홀수 분류하기
split하고 map 메서드를 반복해서 써서 그런지 속도 측면에서는 위의 예시가 더 효율적으로 돌아간다 (오늘도 지식이 +1 되었습니다) !
*/
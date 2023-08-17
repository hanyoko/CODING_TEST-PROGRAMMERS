//나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let inputNum = Number(input);
    for(let i=1; i<=inputNum; i++){
        console.log('*'.repeat(i))
    }
});

//readline 모듈을 살펴보면 input이 문자열로 들어온다는 것을 알 수 있는데, 이 부분을 정수화 해주었다.
//문자열 * 정수의 경우 NaN이 떠서 이렇게는 안 되더라 ..
//대신 문자열을 원하는 정수만큼 반복해주는 repeat()을 써주면서 해결했다 !
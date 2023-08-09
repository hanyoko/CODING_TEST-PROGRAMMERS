//나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    
    n % 2 == 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});

//나머지 연산자를 활용해서 풀었다.
//2로 나누었을 때 나머지가 0이면 짝수이기 때문에 is even을 출력, 아니라면 홀수라는 소리이기에 is odd를 출력 !



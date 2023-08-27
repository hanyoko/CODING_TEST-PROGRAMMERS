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
    const aNum= Number(input[0]) // a, b를 각각 다른 변수에 담아주고
    const bNum = Number(input[1])
    
    console.log(`${aNum} + ${bNum} = ${aNum + bNum}`) // 출력
});

//입력값 각각 따로 변수를 만들어줘서 출력했다.

//다른 사람의 풀이
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const [a, b] = line.split(' ')
    console.log(a, '+', b, '=', Number(a) + Number(b))
})



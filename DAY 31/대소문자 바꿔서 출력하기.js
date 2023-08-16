//나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = [];
    const strValue = [...str];
    strValue.map(a => {
        if(a === a.toUpperCase()){
            answer.push(a.toLowerCase());
        }else{
            answer.push(a.toUpperCase());
        }
    })
    console.log(answer.join(''));
});

//정답률 73%를 보고 살짝 쫄았다 사실 ..
//그런데 문제를 봤을 때, 비슷한 알고리즘을 풀었던 기억이 났었다
//그때는 for문을 이용해서 풀었는데 다른 사람의 풀이를 공부했을 때 map으로 더 간단하게 푸는 방법을 공부했었다 !!
//그게 머릿속에 남아 있어서 다행히(?) 잘 활용해서 풀 수 있었다 !
//공부했던 걸 응용하는 것에 뿌듯함을 느꼈다 …. 다른 사람의 풀이도 공부하는 게 잘하고 있는 방법이구나 …
//빼먹지 말고 더 열심히 공부하자 !!!!!!!!

//다른 사람의 풀이
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = [...line];
}).on('close', () => {
  console.log(
    input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),
  );
});

//정규표현식을 활용해서 ... 푸는 방법 !

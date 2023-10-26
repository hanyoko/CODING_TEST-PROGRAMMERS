//나의 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let output = "";
    // b가 세로
    for(let i = 0; i < b; ++i){
        // a는 가로
        for(let k = 0; k < a; ++k){
            output += "*";
        }
        output += "\n";
    }
    console.log(output);
});

/*
출력하는 부분에서 처음에 리턴해야하나? 어떻게 하지? 고민하다가 
console.log(a);와 같이 작성되어 있길래 문자열에 합쳐서 console.log를 작성해보니 맞았다..
*/

//다른 사람의 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});

//다른 사람의 풀이 2
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const star = `${'*'.repeat(a)}\n`;
    console.log(star.repeat(b));
});

/*
String.repeat() : 문자열을 반복한 값을 반환하는 함수
`${}` : ES6(ES2015)에서 부터 지원하는 템플릿 문자열으로 백틱(`)사이에 ${}를 이용하여 변수, 함수, 조건문 등 기능을 작동하게 해준다.
이렇게 쉽게 푸는 방법도 있었다 .. 역시 자바스크립트는 지원하는 기능이 다양해서 배울 점이 많다!! 
*/


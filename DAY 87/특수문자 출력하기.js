//나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('close', function () {
    console.log(`!@#$%^&*(\\\'\"<>?:;`)
});

/*
역슬래시 사용해서 특수문자 표현하는 법

역슬래시 (＼) : ＼＼
큰따옴표(") : ＼"
작은따옴표(') : ＼'
*/
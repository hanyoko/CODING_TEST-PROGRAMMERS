//나의 풀이
function solution(n) {
    let answer = 0;
    for(i=1; i<=n; i++) {
        let counter = 0;
        for(j=1; j<=i ; j++) {
            if(i%j == 0) {
                counter += 1;
            }
        }
        if(counter > 2) {
            answer += 1;
        }
    }
    return answer;
}

//n이하의 합성수의 개수를 저장해줄 answer 변수를 전역으로 선언한다.
//기본적으로 0으로 선언해주는것으로 만약 n < 4일 경우 합성수가 하나도 없으니
//합성수가 없는 경우 0을 반환할 수 있도록 해주었다.

//i for문이 새로 시작할때마다 counter를 0으로 초기화해주기 위해
//counter를 0으로 선언해준다.

//그리고 만약 i % j가 0이라면 j는 i의 약수라는 뜻이니
//counter 의 값을 올려주고
//만일 counter가 3이상이라면 answer 값을 올려줬다.

//다른 사람의 풀이
function solution(n) {
    if (n === 1) return 0;
    if (n === 2) return 0;
    if (n === 3) return 0;
    if (n === 4) return 1;
    if (n === 5) return 1;
    if (n === 6) return 2;
    if (n === 7) return 2;
    if (n === 8) return 3;
    if (n === 9) return 4;
    if (n === 10) return 5;
    if (n === 11) return 5;
    if (n === 12) return 6;
    if (n === 13) return 6;
    if (n === 14) return 7;
    if (n === 15) return 8;
    if (n === 16) return 9;
    if (n === 17) return 9;
    if (n === 18) return 10;
    if (n === 19) return 10;
    if (n === 20) return 11;
    if (n === 21) return 12;
    if (n === 22) return 13;
    if (n === 23) return 13;
    if (n === 24) return 14;
    if (n === 25) return 15;
    if (n === 26) return 16;
    if (n === 27) return 17;
    if (n === 28) return 18;
    if (n === 29) return 18;
    if (n === 30) return 19;
    if (n === 31) return 19;
    if (n === 32) return 20;
    if (n === 33) return 21;
    if (n === 34) return 22;
    if (n === 35) return 23;
    if (n === 36) return 24;
    if (n === 37) return 24;
    if (n === 38) return 25;
    if (n === 39) return 26;
    if (n === 40) return 27;
    if (n === 41) return 27;
    if (n === 42) return 28;
    if (n === 43) return 28;
    if (n === 44) return 29;
    if (n === 45) return 30;
    if (n === 46) return 31;
    if (n === 47) return 31;
    if (n === 48) return 32;
    if (n === 49) return 33;
    if (n === 50) return 34;
    if (n === 51) return 35;
    if (n === 52) return 36;
    if (n === 53) return 36;
    if (n === 54) return 37;
    if (n === 55) return 38;
    if (n === 56) return 39;
    if (n === 57) return 40;
    if (n === 58) return 41;
    if (n === 59) return 41;
    if (n === 60) return 42;
    if (n === 61) return 42;
    if (n === 62) return 43;
    if (n === 63) return 44;
    if (n === 64) return 45;
    if (n === 65) return 46;
    if (n === 66) return 47;
    if (n === 67) return 47;
    if (n === 68) return 48;
    if (n === 69) return 49;
    if (n === 70) return 50;
    if (n === 71) return 50;
    if (n === 72) return 51;
    if (n === 73) return 51;
    if (n === 74) return 52;
    if (n === 75) return 53;
    if (n === 76) return 54;
    if (n === 77) return 55;
    if (n === 78) return 56;
    if (n === 79) return 56;
    if (n === 80) return 57;
    if (n === 81) return 58;
    if (n === 82) return 59;
    if (n === 83) return 59;
    if (n === 84) return 60;
    if (n === 85) return 61;
    if (n === 86) return 62;
    if (n === 87) return 63;
    if (n === 88) return 64;
    if (n === 89) return 64;
    if (n === 90) return 65;
    if (n === 91) return 66;
    if (n === 92) return 67;
    if (n === 93) return 68;
    if (n === 94) return 69;
    if (n === 95) return 70;
    if (n === 96) return 71;
    if (n === 97) return 71;
    if (n === 98) return 72;
    if (n === 99) return 73;
    if (n === 100) return 74;
    return undefined;
}

//와우 ............... 광기다 ....

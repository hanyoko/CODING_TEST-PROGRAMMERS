//나의 풀이
function solution(price) {
    if (price >= 500000){
        price *= 0.8;
    }else if (price >= 300000){
        price *= 0.9;
    }else if (price >= 100000){
        price *= 0.95;
    }
    return Math.trunc(price);
}

//다른 사람의 풀이
function solution(price) {
    return price >= 500000 ? Math.floor(price * 0.8) : price >= 300000 ? Math.floor(price * 0.9) : price >= 100000 ? Math.floor(price * 0.95) : price;
}

//삼항연산자 .... !!
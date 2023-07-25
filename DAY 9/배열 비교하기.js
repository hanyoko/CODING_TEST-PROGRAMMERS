//나의 풀이
function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length !== arr2.length) {
        if(arr1.length < arr2.length){
            return answer = -1;
        }else {
            return answer = 1;
        }
    }else {
        const num1 = arr1.reduce((acc, cur) => acc + cur);
        const num2 = arr2.reduce((acc, cur) => acc + cur);
        if( num1 > num2){
            return answer = 1;
        }else if(num1 == num2){
               return answer = 0;
        }else {
            return answer = -1;
        }
    }
}

//배열을 합치기 위해서 reduce()를 사용했고,
//조건문 안에 조건문으로 풀었다 약간 지저분한 느낌이 있어서 1점일 줄 알았는데 4점이다 .. (?)
//다른 사람들도 비슷하게 풀었더라 .. 
//다른 방법은 또 뭐가 있으려나
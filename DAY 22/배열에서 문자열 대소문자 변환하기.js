//나의 풀이
function solution(strArr) {
    var answer = [];
    for(let i=0; i<strArr.length; i++){
        if(i%2 == 0){
            answer.push(strArr[i].toLowerCase());
        }else{
            answer.push(strArr[i].toUpperCase());
        }
    }
    return answer;
}

//배열의 순서와 문자열을 대소문자로 변경하는 메소드를 활용해서 풀어보았다.
//홀수는 대문자로, 짝수는 소문자로 변경해야하기에 조건문을 나머지 연산자를 활용했다 !
//이렇게 하는 거겠지 하고 풀었는데 정답이라서 어안이 벙벙하면서도 뿌듯한 이 마음 ..

//다른 사람의 풀이
function solution(strArr) {
    return strArr.map((str,i)=>i % 2 === 1 ? str.toUpperCase() : str.toLowerCase())
 }

//아 .. map map map map map 계속 map 써봐야지 하면서 익숙한 방법으로만 머릿속에 그려지는 것 같다..
//map을 사용하는 방법으로도 다시 풀어봤다 !!
 
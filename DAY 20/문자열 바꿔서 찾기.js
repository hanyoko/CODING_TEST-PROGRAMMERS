//나의 풀이
function solution(myString, pat) {
    return myString
        .split("")
        .map((eng) => eng === "A" ? "B" : "A")
        .join("")
        .includes(pat)
        ? 1 : 0;
}

//생각했을 떄는, 배열을 나눈 후 map을 돌려서 A일 때는 B로, B일 때는 A로 바꿔지도록 한 후
//join으로 배열을 합치면 includes로 찾을 수 있을 거라고 생각해서 작성했다
//그리고 pat을 포함한다면 1을, 아니라면 0을 리턴 ..
//한번에 성공해서 뿌듯했다 뭔가
//써보는 메소드가 점점 늘어나면서 능력치가 올라가는 기분이라 좋다 .. 더 열심히 꾸준하게 공부하자 !

//다른 사람의 풀이
const solution = (myString, pat) => {
    const wordArr = [];
    for(let i=0; i<myString.length; i++){
        switch(myString[i]){
            case 'A':
                wordArr.push('B');
                break;
            case 'B':
                wordArr.push('A');
                break;
        }
    }
    if(wordArr.join('').includes(pat)) return 1;
    return 0;
}

//for 문과 switch를 활용하는 방법
//색다른 방법이라 같은 방법으로 다시 풀어봤다 !



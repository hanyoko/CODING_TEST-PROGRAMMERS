//나의 풀이
function solution(myString, pat) {
    const a = myString.lastIndexOf(pat);
    return myString.slice(0, a+pat.length);
}

//문제를 딱 보았을때, indexOf로 부분문자열 pat이 있는 인덱스는 알수있는데,
//pat이 여러번 등장한다면 마지막 인덱스를 알아야하는게 관건이였다.
//그래서 공부했던 걸 정리해뒀던 velog를 열어서 찾아봤는데 lastIndexOf()를 사용하면 될 것 같아서 사용해보았다 !
//lastIndexOf()에 pat을 담아주고, slice를 이용해서 잘라주면 끝 ! 

//다른 사람의 풀이
//거의 다 lastIndexOf()를 사용해서 풀었더라 !


//indexOf(검색할 값 , 시작위치) - 앞에서부터 검색할 값을 찾기 시작하는 속성
//여기서 시작할 위치가 생략이 될 경우에는 시작위치의 값을 0으로 인식하여 처음부터 검색을 시작
//일치하는 결과값이 없을 경우에는 -1로 결과를 리턴

//lastIndexOf(검색할 값 , 시작위치) - 끝에서부터 검색할 값을 찾기 시작
//lastIndexOf는 말 그대로 검색을 앞에서가 아니라 뒤에서부터 찾기 시작함
//여기서도 시작위치가 생략이 되었다고 하면 맨 끝에서부터 검색을 시작
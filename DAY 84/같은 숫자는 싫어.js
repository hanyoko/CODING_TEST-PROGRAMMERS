//나의 풀이
function solution(arr) {
    var answer = []; //새로운 배열
    
    for(var i=0; i < arr.length; i++) { //처음부터 끝까지 반복
        arr[i] == arr[i+1] ? '' : answer.push(arr[i]); 
        //현재와 다음의 문자가 같은문자인지 확인 후 다를경우에만 새 배열에 추가
    }
    
    return answer;
}

//for문으로 현재와 다음의 문자가 같은지를 체크하여 다른 경우만 새로운 배열에 추가

//다른 사람의 풀이
function solution(arr) {
    return arr.filter((el, i) => el != arr[i+1]);
}

//와... filter 쓸 수 있을 것 같다는 생각만 했다가 구체적으로 어떻게 써야할지 몰랐는데 감탄했다 ....

//현재 인덱스의 요소와 다음 인덱스의 요소가 다르면 통과하여 새로운 배열에 추가
//filter를 통해 알수있는 현재 요소와 인덱스로 문제 해결

//Array.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메소드
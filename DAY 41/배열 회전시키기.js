//나의 풀이
function solution(numbers, direction) {
    if(direction === "right"){
        let splicedArr = numbers.splice(0, numbers.length - 1);
        
        return [...numbers ,...splicedArr];
    }
    
    if(direction === "left"){
        let splicedArr = numbers.splice(1, numbers.length - 1);
        
        return [...splicedArr, ...numbers];
    }
}

//right가 나오면 오른쪽으로 한 칸씩 가야하므로, 맨 끝에 있는 원소만 앞으로 옮기고
//left가 나오면 왼쪽으로 한 칸씩 가야하므로, 맨 앞에 있는 원소만 뒤로 옮기면 된다.
//상당히 불편해보이는 방법이다. 더 간단하게 풀 수 있는 방법을 공부해봐야겠다 !

//다른 사람의 풀이
function solution(numbers, direction) {
    let answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}

//같은 방법을 구현하는데 pop(), shift()를 활용할 수 있을 것 같다.
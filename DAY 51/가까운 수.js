//나의 풀이
function solution(array, n) {
    let answer = [];
    
    array.forEach((item) => {
        answer.push(Math.abs(item - n));
    })
    
    const min = Math.min(...answer);
    
    let check = [];
    
    for(let index = 0; index < answer.length; index++){
        if(answer[index] === min){
            check.push(array[index]);
        }
    }
    
    return Math.min(...check);
}

//answer 배열에는 두 값의 차이가 들어가며, answer 배열의 최소값 min을 구한다.
//answer 배열의 길이만큼 반복하면서 answer의 원소값이 min과 같다면,
//같은 인덱스에 있는 array의 원소를 check 배열에 넣는다.
//따라서, check 배열에는 item - n 연산에서 같은 값을 가지는 원소들이 들어오게 된다.
//check 배열에서 최소값을 찾으면 그 것이 바로
//n과의 차이가 가장 작으면서, 그 후보들 중에서 가장 작은 값이 된다.
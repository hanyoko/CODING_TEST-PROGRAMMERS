//나의 풀이
function solution(num_list) {
    let answer = [];
    let a = 0
    let b = 0
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0){
            a++;
        }else {
            b++;  
        }
    }
    answer = [a,b];
    return answer;
}

//다른 사람 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}

//짝수 홀수의 나머지를 인덱스로 활용 .. for(let a of ) 형태
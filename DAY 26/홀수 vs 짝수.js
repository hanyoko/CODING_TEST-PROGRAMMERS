//나의 풀이
function solution(num_list) {
    let a = 0;
    let b = 0;
    
    for(let i=0; i<num_list.length; i++){
        if(i % 2 == 1){
            a += num_list[i];
        }else{
            b += num_list[i];
        }
    }
    return Math.max(a, b);
}

//저번에 공부했던 Math.max()를 사용해보았다 !!!

//다른 사람의 풀이
function solution(num_list) {
    const even =[]
    const odd =[]
    
   num_list.map((num,i)=>i%2===0?odd.push(num):even.push(num))
   
    const evenSum = even.reduce((acc,cur)=>acc+cur)
    const oddSum =odd.reduce((acc,cur)=>acc+cur)
    
    return Math.max(evenSum,oddSum)
}

//%연산자를 통해서 홀짝을 구분하고 push()로 even에는 짝수를, odd에는 홀수를 각각의 배열에 담아준다.
//map을 통해서 각각의 요소들을 돌면서 수행을 반복한다.
//이렇게하면 even = [짝수번째값들]만 담긴 배열이, odd = [홀수번째값들] 과 같이 홀수만 담긴 배열이 생긴다.
//여기서 주의할 점은 배열의 인덱스는 0부터 시작하기 때문에 인덱스의 홀짝과는 반대로 생각해서 배열에 넣어야한다.
//예를들면 배열의 두번째값의 인덱스는 이고 1로 나누었을때 나머지도 1이어서 배열odd에 push해야할 것 같지만,
//이 문제에서는 배열의 첫번째를 홀수, 두번째를 짝수 이런식으로 분류하였기때문에 이 값을 even에 push하여야 한다.

//그런 다음, reduce()를 통해서 각각의 합을 구한다.
//const를 통해서 reduce 코드를 변수를 따로 만들어주었다. 코드의 가독성 때문인 것 같다.
//짝수의 합은 evenSum에, 홀수의 합은 oddSum에 담긴다.
//마지막으로, Math.max()를 이용해서 더 큰값을 구한다.

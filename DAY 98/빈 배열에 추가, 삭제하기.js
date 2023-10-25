//나의 풀이
function solution(arr, flag) {
    let X = [];
    for(i = 0; i < flag.length; i++){
        if(flag[i]){
            X.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            X.splice(X.length-arr[i], arr[i]);
        }
    }
    
    return X;
}

/*
일단 X를 빈배열로 초기화한다.

그런 다음, for문을 통해서 반복문을 작성한다. i=0부터 시작해서 flag의 길이만큼 1씩 더한다.
if문을 통해서 flag의 각 요소가 true인지, false인지로 나눠서 처리한다.

만약 true라면 arr[i]로 arr[i]*2번만큼 배열을 채워야한다.
Array()안에는 배열의 길이가 들어간다. Array(arr[i]*2)를 통해서 arr[i]*2만큼의 길이를 가진 배열을 생성할 수 있다.
X라는 배열에 push를 통해 값을 넣어줘야하기 때문에 ...스프레드 연산자를 이용해서 값을 풀어준다.

만약 ...Array가 아니라 바로 값을 넣는다면, [ [3,3,3,3,3,3]]과 같이 배열안에 배열이 들어있는 이차원배열이 나올것이다.
배열의 길이를 정한다음에는 그 안을 arr[i]값으로 채운다. 
배열을 모두 같은 값으로 채우기 위해서 fill()을 사용한다.

이렇게 하면, true인 경우 arr[i]*2의 길이이고, 값은 모두 arr[i]인 값들을 X에 push할 것이다.
false인 경우는 else를 통해서 분기처리한다.
splice()의 1,2번째 인자는 어디부터 자를지, 몇개 자를지를 지정한다. 따라서 X.length-arr[i]를 통해서 X의 끝에서 arr[i]번째부터 arr[i]개를 잘라낼 수 있다.
마지막으로 X를 리턴한다.
*/

//다른 사람의 풀이
function solution(arr, flag) {
    let X = [];
    flag.forEach((el, index) => {
        if(el) {
            for(let i = 0; i < arr[index] * 2; i++) {
               X.push(arr[index]);
            }
        } else if (!el){
            for(let i = 0; i < arr[index]; i++){
                X.pop();
            }
        }
    })

    return X;
}

/*
forEach를 사용하고 for문을 각각 나눠서 범위를 지정했다. 가독성이 더 높은 코드같아서 공부했다.

우선 X를 빈배열로 초기화한다. 
그런 다음 flag를 forEach로 순회하는데, el(요소)와 index를 이용한다. 
만약 el(요소)가 true라면 그 안에서 for문을 돈다. 이때 i를 통해서 for문을 몇번 반복할지 정한다. 
(이때 i는 인덱스를 의미하는것이아니라, 단순하게 몇회반복할지 범위를 지정하는 역할을 한다. j나 다른 문자열로 바꿔도 된다)

true일 경우에는 arr[index]*2만큼의 길이를 가져야하기때문에 i는 0부터 arr[index]*2보다 작을때까지 1씩 더하면서 반복된다.
for문의 안에서는 X.push(arr[index])를 통해서 arr의 index와 일치하는 해당 요소가 X에 푸쉬되도록 해준다.

다음으로 else if를 통해서 false인 경우를 처리한다.
false인 경우에는 arr[index]만큼 삭제해야하기때문에 for문의 범위는 0부터 arr[index]보다 작을때까지이다.
범위안에서 반복하면서 X.pop()을 통해 맨 뒤의 값을 제거한다.

for문을 빠져나오면, 마지막으로 X를 리턴한다.
*/
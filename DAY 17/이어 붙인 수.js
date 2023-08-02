//나의 풀이
function solution(num_list) {
    let even = num_list.filter((a) => a % 2 === 0);
    let odd = num_list.filter((a) => a % 2 === 1);
    
    let evenSum = even.reduce((acc, cur) => acc + String(cur));
    let oddSum = odd.reduce((acc, cur) => acc + String(cur));
    
    return Number(evenSum) + Number(oddSum);
}

//우선 문제를 보고 num_list가 배열이기 때문에 filter를 통해서 홀수와 짝수를 구분해야겠다고 생각했다.
//그런 다음, 각각의 수를 더해주어야하기 때문에 reduce를 사용했다.
//각각의 숫자의 값들을 더하는 것이 아니라 문자열을 이어붙인 값을 더해야 하기때문에 reduce의 currentValue를 String으로 만들었다.
//마지막으로 홀수와 짝수의 합을 구할때는 Number를 통해서 두값을 모두 숫자로 만들어서 더했다.
//어려운 문제는 아니어서 코드를 짜면서 어려움은 없었지만
//처음에 문제를 자세히 읽지 않았는지 string으로 바꾸는 과정을 빼먹고 진행해서 오답이 나왔다.
//'아 내가 string으로 바꾸는 과정을 빼먹었구나' 하고 cur에 String으로 변환하는 코드를 추가하였다.
//그래도 전에는 reduce 사용법이 익숙치 않아서 저 안에서 바로 String으로 바꾸는 걸 바로 생각을 못했었는데,
//문제를 인식하고 바로 코드로 구현할 수 있어서 좋았다.

//다른 사람의 풀이
function solution(num_list) {
    let even = num_list.filter(n => n % 2 === 0).reduce((acc, cur) => acc+cur, '');
    let odd = num_list.filter(n => n % 2 === 1).reduce((acc, cur) => acc+cur, '');
    return Number(even) + Number(odd);
}

//내가 작성한 코드와 거의 똑같다.
//내 코드와의 차이점은 굳이 변수를 2개로 나눠서 선언하지 않고 한번만 선언한 뒤,
//filter()뒤에 바로 reduce를 연결하여 코드가 조금 더 간결하고 깔끔해 보인다. 그래서 공부해보았다. 
//나는 filter()와 reduce의 코드를 따로 만들었는데 이렇게 한번에 만들어서 써도 좋을 것 같다.
//다음에는 이런식으로 짜보도록 노력해야겠다.


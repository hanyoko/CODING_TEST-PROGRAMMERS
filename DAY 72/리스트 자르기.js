//나의 풀이
function solution(n, slicer, num_list) {
    if(n===1){
       num_list = num_list.slice(0, slicer[1]+1);
    } 
    if(n===2){
         num_list = num_list.slice(slicer[0]);
     }
    if(n===3){
         num_list = num_list.slice(slicer[0], slicer[1]+1);
    }
    if(n===4){
         num_list = num_list.slice(slicer[0], slicer[1]+1).filter((_, i) => i % slicer[2]===0);
    }
    return num_list;
}

//우선, 제일 처음으로는 if문을 이용해서 n===1, n===2, n===3, n===4인 경우로 경우를 모두 나눠주었다.
//그런 다음 num_list의 인덱스를 자르기 위해서 slice()를 사용했다. slice()는 begin, end 인덱스를 인자로 받아서 그만큼만 잘라낸다. 
//end인덱스는 미포함하는 특징을 가지고 있기때문에 end인덱스+1을 해주어야 end인덱스를 포함하여 자를 수 있다.

//n===1인 경우를 보면, num_list.slice(0,slicer[1]+1) 을 통해서 num_list의 0번 인덱스부터 b번 인덱스(slicer[1]+1)까지를 자른다.
//slice()는 새로운 값을 반환하기 때문에 num_list에 값을 담아서 새롭게 변경된 값을 다시 재할당해준다.
//n===2, n===3의 경우도 n===1의 경우와 비슷하게 slice()를 이용해서 인덱스만 바꿔서 풀면 된다.
//n===4의 경우에만 c간격으로라는 경우가 추가되었기 때문에, 식을 더 추가해준다.
//일단 slice()는 위와 동일한 방법으로 한다. slice()를 통해서 begin과 end인덱스를 지정하고 배열을 자르고 필요한 값만 filter()를 통해서 남긴다.
//간격으로 쓰이는 값은 c로 slicer의 2번째 인덱스를 의미한다. 이것을 식으로 표시하면 slicer[2]이다.
//filter를 이용해서 인덱스의 간격을 지정한다.
//i를 c로 나눠서 나머지가 0인 값들만 남기면 c간격의 인덱스값을 가지고 있는것만 남는다.
//그런 다음 num_list를 통해서 리턴한다.

//다른 사람의 풀이
function solution(n, slicer, num_list) {
    let [a, b, c] = [...slicer];

    switch(n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
    }
}

//switch문을 통해서 푼 코드이다.

//slicer의 인덱스를 이용하는 것이나, n===4인 경우 filter()를 통해서 간격을 지정하는 것도 동일하다. 전반적인 푸는 방법은 동일하지만 나는 if문을 사용한것과 달리 switch문을 사용했다.
//let [a, b, c] = [...slicer];
//우선, 배열의 구조분해할당을 이용하여 slicer의 각각의 요소들을 a,b,c라는 변수에 할당한다.
//(나는 이 과정을 하지않았지만 이렇게 만들면 코드의 가독성이 올라갈수 있어서 좋을것같다)
//그런 다음, switch문을 사용해서 case를 나눴다.
//그리고 각각의 case에 맞게 num_list를 자르는 과정을 진행한다.
//(이 과정자체는 if문을 사용한 내 코드와 동일하다)

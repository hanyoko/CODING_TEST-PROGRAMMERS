//나의 풀이
function solution(str_list, ex) {
    var answer = '';
    for(let i=0; i<str_list.length; i++){
        if(!str_list[i].includes(ex)){
            answer += str_list[i];
        }
    }
    return answer;
}

//자바스크립트에서 string을 붙이는 방법으로 += 연산자를 사용해서 answer 값을 출력시켰다
//배열의 요소를 돌면서 + 연산자를 통해서 값을 이어붙이는 것이 제일 기본적인 방법 !!!!

//다른 사람의 풀이
function solution(str_list, ex) {
    return str_list.filter(a => !a.includes(ex)).join('')
}

//배열 str_list를 하나하나 돌면서 검사를 해야하기 때문에 filter()를 사용하는 방법..
//filter로 str_list안의 값들을 일일이 검사하는데 str_list.filter(a => 
//이때 ex값을 포함하고 있다면  a.includes(ex)
//제외시키는 코드를 짜기위해서 !연산자를 사용했다. !a.includes(ex)
//그러고나서, join('') 연산자로 배열의 값들을 이어붙이는 방법인 것 같다.

//다른 사람의 풀이 2
const solution = (strs, ex) => strs.reduce((acc, cur) => acc + (cur.includes(ex) ? '' : cur), '')

//이 코드는 join()대신 reduce()를 이용해서 배열의 값들을 붙였다.
//includes()를 통해서 현재의 요소에 ex가 포함되는지 검사하는 것은 내 코드와 같다.
//나는 포함되지 않는 문자열이라면 포함된 문자열을 추가하지 않았다면
//이 코드는 cur를 ''빈값으로 바꾸는 방법으로 제거했다. 
//그런 다음 acc를 통해서 값을 축적하면서 join()과 같이 값들을 붙였다.
//나는 풀면서 reduce()는 생각하지 못했는데 요소의 제거와 이어붙이는 것을 reduce로도 할 수 있는 점이 재밌었다.
//다음에 이런 방법도 생각해보면 좋을 것 같다.
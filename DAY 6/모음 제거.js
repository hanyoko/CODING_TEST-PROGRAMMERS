//나의 풀이
function solution(my_string) {
    return my_string.replace(/['a','e','o','i','u']/g, '');
}

//정규 표현식 사용

//다른 사람의 풀이
function solution(my_string) {
    var answer = my_string.split('');
    for(let i = 0; i < answer.length; i++){
        switch(answer[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                answer.splice(i, 1);
                i--;
                break;
        }
    }

    return answer.join('');
}

//훨씬 복잡하고 긴 풀이지만, for문에 switch를 공부할 겸 ...
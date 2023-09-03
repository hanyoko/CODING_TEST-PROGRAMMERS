//나의 풀이
function solution(my_string) {
    const strLen = my_string.length;
    return [...my_string].reduce((acc, cur, idx) => {
        const curStr = my_string.slice(idx, strLen)
        return [...acc, curStr];
    }, []).sort();
}



//다른 사람의 풀이
function solution(my_string) {
    const dict = []
    for (let i = 0; i < my_string.length; i += 1) {
        dict.push(my_string.slice(i))
    }
    dict.sort()
    return dict
}

//for문으로 간단하게 풀 수도 있었던 문제를 너무 어렵게 생각했던 것 같다 ...
//간단하게 ! 가독성 좋게 풀 수 있도록, 코드를 작성할 수 있도록 .... !! 노력하자 !

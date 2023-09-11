//나의 풀이
function solution(arr, intervals) {
    const [[a, b], [c, d]] = intervals;
    return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}

//구조분해 할당으로 intervals를 변형하고 전체 식을 대괄호로 감싸서 반환하는 방법으로 풀었다 !

//다른 사람의 풀이
function solution(arr, intervals) {
    let arr1 = [];
    let arr2 = [];
    for(let i=intervals[0][0]; i<=intervals[0][1]; i++){
        arr1.push(arr[i]);
    }
    for(let i=intervals[1][0]; i<=intervals[1][1]; i++){
        arr2.push(arr[i]);
    }
    return arr1.concat(arr2);
}

//구조분해할당 대신 for문을 활용해서 배열을 돌려주고, push 한 후 concat으로 마무리하는 방법 
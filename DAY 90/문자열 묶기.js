//나의 풀이
function solution(strArr) {
    const dict = {};
    // key: 문자열 길이, value: 문자열 목록
    strArr.forEach(item => {
        const len = item.length;
        dict[len] = dict[len] ?? [];
        dict[len].push(item);
    })
    // 길이 별 목록 수의 최댓값
    const values = Object.values(dict).map(a => a.length);
    
    return Math.max(...values);
}



//다른 사람의 풀이
function solution(strArr) {
    const countMap = strArr.reduce((acc, el) => {
        const len = el.length;
        acc[len] = (acc[len] || 0) + 1;return acc;}, {});
    return Math.max(...Object.values(countMap));
}

//reduce 사용

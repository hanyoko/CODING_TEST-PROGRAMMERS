//나의 풀이
function solution(numLog) {
    return numLog.reduce((acc, cur, curIdx, originArr) => {
        if(!curIdx) return ""
        const prev = originArr[curIdx-1]
        switch(prev-cur) {
            case -1:
                return acc+'w'
            case 1:
                return acc+'s'
            case -10:
                return acc+'d'
            case 10:
                return acc+'a'
        }
    }, "")
}



//다른 사람의 풀이
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}




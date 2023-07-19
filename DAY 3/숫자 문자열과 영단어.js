//2021 카카오 채용연계형 인턴십
function solution(s) {
    var answer = Number(s.replace(/zero/gm,"0")
                .replace(/one/gm,"1")
                .replace(/two/gm,"2")
                .replace(/three/gm,"3")
                .replace(/four/gm,"4")
                .replace(/five/gm,"5")
                .replace(/six/gm,"6")
                .replace(/seven/gm,"7")
                .replace(/eight/gm,"8")
                .replace(/nine/gm,"9"));
    ;
    return answer;
}

//다른 사람의 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

//split, join을 이용해서 치환 ...
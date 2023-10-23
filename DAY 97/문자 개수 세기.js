//나의 풀이
function solution(my_string) {
    let answer = Array(52).fill(0);
    // 앞 26 대문자, 뒤 26 소문자
    [...my_string].forEach((str, idx) => {
        const charCode = my_string.charCodeAt(idx);
        // 대문자 A-Z 인 경우
        if (charCode >= 65 && charCode <= 90) {
            console.log('charCode >= 65 대문자', str);
            answer[charCode - 65] += 1;
        }
        // 소문자 a-z 인 경우
        else if (charCode >= 97 && charCode <= 122) {
            console.log('charCode >= 97 소문자', str);
            answer[charCode - 97 + 26] += 1;
        }
    });

    return answer;
}



//다른 사람의 풀이
function solution(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}

//영어 대, 소문자를 배열에 담은 후 map으로 돌리기 ..

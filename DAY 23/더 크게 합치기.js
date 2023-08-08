//나의 풀이
function solution(a, b) {
    const ab = String(a) + String(b);
    const ba = String(b) + String(a)
    
    return ab >= ba ? Number(ab) : Number(ba);
}

//String을 활용해서 문자열을 합치고 조건에 맞는 값을 Number을 이용해서 숫자로 만들어서 출력하는 방법 밖에 떠오르지 않았다 ..
//다른 방법이 궁금해서 얼른 제출하기를 눌렀던..

//다른 사람의 풀이
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}

//역시 쉽게 확인할 수 있는 메소드가 있었다 !
//``(백틱)을 이용해서 숫자를 출력시키고 두개의 숫자 중에서 큰 수를 가리는 max 메소드를 이용했다

//나의 풀이
function solution(a, b) {
    return Math.max(`${a}${b}`, (2 * a * b));
}

//Math.max() 메소드를 활용해서 a와 b를 백틱을 이용해서 그대로 출력시킨값과 2*a*b의 값 중 큰 값을 return 시켰습니다. !

//다른 사람의 풀이
function solution(a, b) {
    const answerA = Number(a.toString() + b.toString());
    const answerB = 2 * a * b;
  
    return answerA > answerB ? answerA : answerB;
  }

//a와 b를 string으로 만들어 준 후 문자열을 합쳐주었습니다.
//그 다음 숫자로 변환 후 삼항연산자를 활용해서 두 개의 상수 중에서
//A가 B보다 크면 A를 아니라면 B를 return 하도록 구현한 것 같습니다.

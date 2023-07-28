//나의 풀이 
function solution(n, control) {
    return [...control].reduce((acc, cur) => {
        switch(cur) {
            case 'w':
                return acc + 1;
            case 's':
                return acc - 1;
            case 'd':
                return acc + 10;
            case 'a':
                return acc - 10;
            default:
                return acc;
        }
    }, n)
}


//다른 사람의 풀이
const operations = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
  };
  
  function solution(n, control) {
    return [...control].reduce((prev, op) => operations[op](prev), n);
  }


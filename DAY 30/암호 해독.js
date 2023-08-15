//나의 풀이
function solution(cipher, code) {
    let answer = [];
    for(let i=0; i<=cipher.length; i++){
        if(i % code == 0){
            answer.push(cipher[i-1]);
        }
    }
    return answer.join("");
}



//다른 풀이
function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
  }

//filter는 콜백함수의 인자로 value, index, array를 받을 수 있다.
//나는 그 점을 이용해서 코드를 짜보았다.
//value는 사용 안하고 index만 사용할시 value 자리에 _를 넣어주면 된다.
//code 자릿수는 index + 1이므로 (index + 1) % code === 0인 조건을 filter를 통해서 찾아내면 된다.
//찾게 되면 join()을 이용해 배열을 문자열로 합쳐준 후 return!
//이제 문제를 보면 어떤 메소드를 사용하면 좋을지 떠오르는 게 신기하고 재밌고 뿌듯하다

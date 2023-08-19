//나의 풀이
function solution(array) {
    const arr = Math.max(...array);
    return [arr, array.indexOf(arr)]
}

//예를 들어 age가 23일 경우, result는 "cd"가 리턴되어야 한다.
//먼저 a~j를 어레이에 넣어주고, 정답을 나타낼 빈 문자열을 선언한다.

a = ['a','b','c','d','e','f','g','h','i','j'];

//들어오는 age는 정수이기 때문에 toString()으로 문자화해준다.
//for문을 돌려서 age의 인덱스에 해당되는 수만큼 알파벳이 들어있는 어레이에서 인덱스를 맞춰준다.

age = "23"
age[0] = 2
age[1] = 3

a[age[0]] = 'c'
a[age[1]] = 'd'

//선언해둔 빈 문자열에 위 값들을 계속 더해주면 된다.

//다른 사람의 풀이
function solution(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])
      .join("");
  }

//문자열 자체도 인덱스[] 접근 가능
//문자열 자체도 인덱스가 있으니 바로 [v] 가능하다..
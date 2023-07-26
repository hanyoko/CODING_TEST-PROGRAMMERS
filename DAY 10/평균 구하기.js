//나의 풀이
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}

//reduce() 메소드를 활용해서 풀었다 

//다른 사람의 풀이
function solution(arr){
  let sum = 0;
    for(let i = 0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum/arr.length;
  }

//처음에는 for 문으로 풀려고 했었는데 역시 for문으로 푼 사람도 있었다 !
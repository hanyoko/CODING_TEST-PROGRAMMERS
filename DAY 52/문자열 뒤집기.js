//나의 풀이
function solution(my_string, s, e) {
    let arr = my_string.split('');
    let newArr = arr.slice(s, e + 1).reverse();
 
    arr.splice(s, newArr.length, ...newArr);
    return arr.join('');
}

// my_string을 split()을 사용해 배열로 만들고,
//slice()로 뒤집을 부분을 자른 뒤 reverse()로 뒤집어서 newArr 배열에 저장하고,
//splice()로 arr의 s부터 newArr의 길이까지의 값들을 newArr의 요소들로 변경한 뒤 join('')하여 return
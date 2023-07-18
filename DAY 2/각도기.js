//나의 풀이
const solution = angle => angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4

//다른 사람 풀이
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
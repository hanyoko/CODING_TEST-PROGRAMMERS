//나의 풀이
function solution(order) {
    let money = 0;
    for(let i=0; i<order.length; i++) {
        if(order[i] == "iceamericano" || order[i] == "hotamericano" || order[i] == "americanoice" || order[i] == "americanohot" || order[i] == "anything" || order[i] == "americano") {
            money += 4500;
        }
        else {
            money += 5000;
        }
    }
    return money;
}

// 아메리카노 가격 4500
// 카페라떼 가격 5000
// 아무거나는 아메리카노로
// 각 직원이 적은 메뉴 문자열 배열 order
// 카페에서 결제하게 될 금액 return

//다른 사람의 풀이
const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)

//reduce를 사용하여 조건문을 최소화 한 풀이.

//내풀이
function solution(n, k) {
  let service = Math.floor(n/10);
  //전체 먹은 양꼬치 수를 10으로 나눴다. 이때 소숫점은 모두 버려서 10이 몇번 나오는지 계산했다.
  let dink = k - service;
  // 서비스로 받은 음료는 전부 마신다는 조건이 있다. 때문에 전체 음료에서 서비스로 받은 음료의 수만 간단히 빼주었다.
  let answer = (n*12000)+(dink*2000);
  // 답은 전체 양꼬치의 값에 서비스를 제외한 음료수의 수*값이다.
  return answer;
}
//쉬운 문제였다. Math.floor를 떠올린다면?

//*다른사람의 풀이. 많은 사람이 푼 방식을 가져왔다.

function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
    //전체 양꼬치값 + 전체 음료수 값 - 서비스로 받은 음료수 값이다.
    //내가 한 방식보다 훨씬 짧게 끝났다. 무슨차이냐면 난 서비스와 기존 음료수의 양을 따로 다 함수로 지정했는데,
    //이 방식은 그렇게 한것이 아니라 변수를 최소화하고 바로바로 계산해준것이다. 
    //parseInt는 자바스크립트에 내장되어있는 함수로 문자열을 숫자로 반환한다.이때 n은 딱히 문자열은 아니기에 parseInt의 정수만 반환하는 성질을 이용하려 한듯하다.
}
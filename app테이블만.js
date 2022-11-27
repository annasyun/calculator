// inp 인풋 변수할당 (대출금액, 대출기간, 대출금리 인풋)
const inpLoanAmount = document.querySelector(".put-loan-amount");
const inpLoanPeriod = document.querySelector(".put-loan-period");
const inpLoanInterest = document.querySelector(".put-loan-interest-rate");

// btn 버튼 변수할당 (계산버튼, 리셋버튼)
const btnCal = document.querySelector(".cal");
const btnReset = document.querySelector(".reset");

// 상환방법 라디오 버튼(만기, 원금균, 원리금균)
const inpMethodFirst = document.querySelector("#method-first");
const inpMethodSecond = document.querySelector("#method-second");
const inpMethodThird = document.querySelector("#method-third");

// 계산결과 (총납입금액, 총이자)
const valuePayment = document.querySelector(".value-payment");
const valueInterest = document.querySelector(".value-interest");


const 세부항목 = {원금:0 , 이자:1 , 납입금액:2 , 잔금:3}


const rowCnt = 5;

function 테이블만드는함수() {
  document.write('<table border="1">');
  for (let i = 0; i < rowCnt; i++) {
    document.write('<tr>');
      document.write('<td>');
      document.write(세부항목['원금'], 세부항목['이자'],세부항목['납입금액'] , 세부항목['잔금']);
      document.write('</td>')
    document.write('</tr>')
  }
  document.write('</table>');  
}


// const 세부항목 = {원금:0 , 이자:0 , 납입금액:0 , 잔금:0}
// const 세부항목계산 = function() {
//   document.write('<table border="1">');
//   for (let 회차 = 0; 회차 < 12*inpLoanPeriod.value; 회차++) {
//   /* for(let i = 0; i<5 ; i++){ */
//   document.write('<tr>');
//     for(key in 세부항목){
//       // console.log(key)
//       if (key === '회차'/* && 세부항목['회차'] === 0 */) {
//         세부항목['회차'] = 회차실행()
//       } else if(key === '원금' /* && 세부항목['원금'] === 0 */) {
//         세부항목['원금'] = 원금실행()
//       } else if (key === '이자'/*  && 세부항목['이자'] === 0 */) {
//         세부항목['이자'] =이자실행()
//       } else if (key === '납입금액' /* && 세부항목['납입금액'] === 0 */) {
//         세부항목['납입금액']= 납입금액실행()
//       } else/*  if(세부항목['잔금'] === 0) */ {
//         세부항목['잔금']=잔금실행()
//       } 
//     }
//     document.write('</tr>')
//   }
//   document.write('</table>');
// }
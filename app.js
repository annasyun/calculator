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

const contModal = document.querySelector(".cont-modal");


const trDetailedResult =  document.querySelector('.tr-detailed-result')
// const tdDetailedResult = document.createElement( 'td' );
const tdDetailedResult = document.querySelectorAll( '.td-detailed-result' );
const createTdTextnode = document.textContent

const 회차실행 = function() {
  console.log('회차계산식') 
}
const 원금실행 = function() {
  console.log('원금계산식')
  let 원금결과 = tdDetailedResult.textContent
  원금결과 = inpLoanAmount.value + inpLoanInterest.value
  // tdDetailedResult.textContent = "제발";
  return;
}
const 이자실행 = function() {
  console.log('이자계산식')
  
}
const 납입금액실행 = function() {
  console.log('납입금액계산식')
  
} 
const 잔금실행 = function() {
    console.log('잔금계산식')
}



const 세부항목 = {원금:0 , 이자:0 , 납입금액:0 , 잔금:0}
const 세부항목계산 = function() {
  for (let 회차 = 0; 회차 < 12*inpLoanPeriod.value; 회차++) {
  /* for(let i = 0; i<5 ; i++){ */
    for(key in 세부항목){
      // console.log(key)
      if(key === '원금' /* && 세부항목['원금'] === 0 */) {
        // 세부항목['원금'] = 원금실행()
        // tdDetailedResult.textContent = 세부항목['원금'];
        원금실행();
      } else if (key === '이자'/*  && 세부항목['이자'] === 0 */) {
        세부항목['이자'] =이자실행()
        tdDetailedResult.textContent = '2'/* 리턴값 */;
      } else if (key === '납입금액' /* && 세부항목['납입금액'] === 0 */) {
        세부항목['납입금액']= 납입금액실행()
      } else/*  if(세부항목['잔금'] === 0) */ {
        세부항목['잔금']=잔금실행()
      } 
    }
  }
}





// 계산결과 디테일 (회차, 납입금액, 원금, 이자 ,잔금) - 보류

// 콤마찍기, 문자열 입력시 0 출력 기능
function comma(e) {
    let value = e.target.value;
    value = Number(value.replaceAll(',', ''));
    if(isNaN(value)) {         //NaN인지 판별
        inpLoanAmount.value = 0;   
    }else {                   //NaN이 아닌 경우
      const formatValue = value.toLocaleString('ko-KR');
      inpLoanAmount.value = formatValue;
    }
  }

inpLoanAmount.addEventListener('keyup', comma)

// 대출기간 범위 지정 
function range () {
  if (inpLoanPeriod.value > 5 ) {
    alert("최대 대출 기간은 5년 입니다.");
  } else if (inpLoanPeriod.value < 0) {
    alert("잘못된 기간입니다.");
  } else if (inpLoanPeriod.value == "") {
    alert("기간을 숫자로 입력하세요.");
  }
}

inpLoanPeriod.addEventListener('blur', range)

 function 만기일시상환(){
  console.log(valuePayment)
  console.log(valueInterest)
  세부항목계산()
 
    // const inpMethodFirstNodeList= document.getElementsByName('repayment-type');
    // inpMethodFirstNodeList.forEach((node)=>{
    //   if(node.checked){
    //     console.log('wow');
    //     inpLoanAmount.value = Number(inpLoanAmount.value.replaceAll(',', ''));
    //     valueInterest.innerHTML = (inpLoanAmount.value)*(inpLoanPeriod.value)*(inpLoanInterest.value*(0.01));
    //   }
    // }
  }

  function 원금균등상환() {

    console.log(valuePayment)
    console.log(valueInterest)
    세부항목계산()
  }
  
  function 원리금균등상환() {
    console.log(valuePayment)
    console.log(valueInterest)
    세부항목계산()
    // console.log(회차실행)
    // console.log(납입금액실행)
    // console.log(원금실행)
    // console.log(이자실행)
    // console.log(잔금실행)
  }
  
  function 메인계산함수(){
    // console.log('')
    
    if (inpMethodFirst.checked === true ){
      만기일시상환()
    } else if (inpMethodSecond.checked === true){
      원금균등상환()
    } else if (inpMethodThird.checked === true){
      원리금균등상환()
    }
    modal()

  } 


  // function 테이블만드는함수() {
  //   document.write('<table border="1">');
  //   for (let 회차 = 0; 회차 < 12*inpLoanPeriod.value; 회차++) {
  //     document.write('<tr>');
  //     document.write('<td>');
  //     document.write(세부항목['원금'], 세부항목['이자'],세부항목['납입금액'] , 세부항목['잔금']);
  //     document.write('</td>')
  //     document.write('</tr>')
  //   }
  //   document.write('</table>');  
  // }

  
  function 인풋리셋함수() {
    inpLoanInterest.value = 0
    inpLoanAmount.value = null
    inpLoanPeriod.value = null
  }

  function modal(){
    contModal.style.display = "inline-block";

    // const trDetailedResult =  document.querySelector('.tr-detailed-result')
    // // const tdDetailedResult = document.createElement( 'td' );
    // const tdDetailedResult = document.querySelector( '.td-detailed-result' );
    // const createTdTextnode = document.textContent

    // for (i = 0; i<회차; i++) {
    // trDetailedResult.appendChild(tdDetailedResult)
    // contModal.appendChild(trDetailedResult);
      // tdDetailedResult.createTdTextnode();
      // tdDetailedResult.createTdTextnode = 'hello';
      // tdDetailedResult.textContent = 'hello';
    // }
  }

// ---------------------------------------------
  // function 테이블만드는함수() {
  //   const resultTable = document.querySelector('.table-detailed-result')
  //   const myTr = document.createElement('tr') 
  //   const dataContentToTable = document.createTextNode(object.values(세부항목)) 
  //   for (let 회차 = 0; 회차 < 12*inpLoanPeriod.value; 회차++){
  //     resultTable.appendChild(myTr)
  //     document.body.appendChild(dataContentToTable)
  //   }

btnCal.addEventListener('click',메인계산함수);
// btnCal.addEventListener('click',modal);
btnReset.addEventListener('click',인풋리셋함수);

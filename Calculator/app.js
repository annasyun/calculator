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
const shortResult = document.querySelector(".sec-short-result div");
const loading = document.querySelector(".img-loading");
const valuePayment = document.querySelector(".value-payment");
const valueInterest = document.querySelector(".value-interest");

const contModal = document.querySelector(".cont-modal");

const trDetailedResult =  document.querySelector('.tr-detailed-result')


function 원리계산최종 () {


  const 원리월납입원금계산 = function () {
    let 원리월납입금액 = Math.floor(parseInt(inpLoanAmount.value) / parseInt(inpLoanPeriod.value))
    return 원리월납입금액
  }

  let 원리월납입금액최종 = 원리월납입원금계산()

  const 원리달이자계산 = function () {
    let 원리달이자금액 = Math.floor(Number(inpLoanInterest.value / 1200) * Number(inpLoanAmount.value))
    return 원리달이자금액
  }
  let 원리달이자금액최종 = 원리달이자계산()


  const 원리월합상환금계산 = function (원리달이자계산, 원리달이자금액) {
    let 원리월합상환금액 = 원리달이자계산 + 원리달이자금액
    return 원리월합상환금액
  }
  let 원리월합상환금액최종 = 원리월합상환금계산(원리월납입원금계산(),원리달이자계산())

  const 원리대출잔금계산 = function (원리월합상환금액최종) {
    let 원리대출잔금 = inpLoanAmount.value - 원리월합상환금액최종
    return 원리대출잔금
  }

let 원리대출잔금최종 = 원리대출잔금계산(원리월합상환금액최종)
console.log("bobobobobobo",[원리월납입금액최종,원리달이자금액최종, 원리월합상환금액최종, 원리대출잔금최종])

return [원리월납입금액최종,원리달이자금액최종, 원리월합상환금액최종, 원리대출잔금최종]
}




// 원리금균등상환 -> 월납입원금 , 달마다 낼이자, 월상환금, 대출잔금

function 원리금균등계산최종(회차) {


const 대출금액넘버 = Number(inpLoanAmount.value);
const 대출이율넘버 = Number(inpLoanInterest.value)/1200;
const 대출기간넘버 = Number(inpLoanPeriod.value);

// 원리금월납입원금계산 ---

const 원리금월납입원금계산 = function () {
  원리금월납입금액 = (원리금월합상환금액 - (대출금액넘버*대출이율넘버)) * ((1+ 대출이율넘버)^(회차-1));
  return 원리금월납입금액;
}
let 원리금월납입금액최종 = 원리금월납입원금계산(대출기간넘버);

// 원리금달이자계산 ---

const 원리금달이자계산 = function (회차) {
  원리금달이자금액 = [대출금액넘버 - (((원리금월합상환금액-(대출금액넘버*대출이율넘버)) * (((1+대출이율넘버)**(회차-1))-1))/대출이율넘버)] * 대출이율넘버;
  return 원리금달이자금액;
}

let 원리금달이자금액최종 = 원리금달이자계산(회차);

// 원리금월합상환금계산 ---

const 원리금월합상환금계산 = function () {
  // 원리금월합상환금액 = Number(대출금액.value)*(Number(대출이율.value)/1200)*((1+(Number(대출이율.value)/1200))**Number(대출기간.value)) / ((1+(Number(대출이율.value)/1200))**Number(대출기간.value)) -1
  원리금월합상환금액 = (대출금액넘버*대출이율넘버*((1+대출이율넘버)**대출기간넘버)) / (((1+대출이율넘버)**대출기간넘버) -1);
  return 원리금월합상환금액;
}

let 원리금월합상환금액최종 = 원리금월합상환금계산();

const 원리금대출잔금계산 = function (회차) {
  원리금대출잔금 = 대출금액넘버 - (((원리금월합상환금액-(대출금액넘버*대출이율넘버)) * (((1+대출이율넘버)**(회차-1))-1))/대출이율넘버);
  return 원리금대출잔금액;
}

let 원리금대출잔금계산최종 = 원리금대출잔금계산(회차);


return [원리금월납입금액최종, 원리금달이자금액최종, 원리금월합상환금액최종, 원리금대출잔금계산최종];
}


// 계산결과 디테일 (회차, 납입금액, 원금, 이자 ,잔금) 

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
    return false;
  } else if (inpLoanPeriod.value < 0) {
    alert("잘못된 기간입니다.");
    return false;

  } else if (inpLoanPeriod.value == "") {
    alert("기간을 숫자로 입력하세요.");
    return false;
  }
    return true;

}

inpLoanPeriod.addEventListener('blur', range)

 function 만기일시상환(){
  console.log(valuePayment)
  console.log(valueInterest)
 
    // const inpMethodFirstNodeList= document.getElementsByName('repayment-type');
    // inpMethodFirstNodeList.forEach((node)=>{
    //   if(node.checked){
    //     console.log('wow');
    //     inpLoanAmount.value = Number(inpLoanAmount.value.replaceAll(',', ''));
    //     valueInterest.innerHTML = (inpLoanAmount.value)*(inpLoanPeriod.value)*(inpLoanInterest.value*(0.01));
    //   }
    // }
  }


  
  function 메인계산함수(){    
    if (inpMethodFirst.checked === true ){
     return 만기일시상환()
    } else if (inpMethodSecond.checked === true){
      let 원리계산최종값 = 원리계산최종(); 
        return 원리계산최종값
    } else if (inpMethodThird.checked === true){
      let 원리계산최종값 = 원리계산최종(); 
        return 원리계산최종값
    }
    modal()

  } 
  
  function 리셋함수() {
    inpLoanInterest.value = 0;
    inpLoanAmount.value = null;
    inpLoanPeriod.value = null;
    shortResult.style.display = 'none'
    contModal.style.display = 'none';

  }

  function modal(){
    contModal.style.display = "inline-block";

    // for (i = 0; i<5; i++) {
      const tdDetailedResult = document.createElement( 'td' );
      trDetailedResult.appendChild(tdDetailedResult);
      tdDetailedResult.textContent = 'hello';
    // }
  }


  const 회차테이블한줄만드는함수=(회차,납입금액,이자,월상환금,대출잔금)=>{
    const 한줄 = document.createElement("tr");
    const 회차칸 = document.createElement("td");
    회차칸.innerText = 회차
    const 납입금액칸 = document.createElement("td");
    납입금액칸.innerText = 납입금액
    const 이자칸 = document.createElement("td");
    이자칸.innerText = 이자
    const 월상환금칸 = document.createElement("td");
    월상환금칸.innerText = 월상환금
    const 대출잔금칸 = document.createElement("td");
    대출잔금칸.innerText = 대출잔금
    한줄.append(회차칸, 납입금액칸, 이자칸, 월상환금칸, 대출잔금칸)
  
    return 한줄
  
  }

  function 회차테이블만드는함수1(result) {
    console.log(result)
    const ele = document.querySelector("tbody");
    ele.innerHTML = ''
    for (let i =1; i <= Number(inpLoanPeriod.value); i++){
      ele.append(회차테이블한줄만드는함수(i,...result))
    }
  }

function 간단결과(){
  shortResult.style.display = 'block'
  loading.style.display = 'none'
}

/* 버튼 실행 기능 */
btnCal.addEventListener("click",(e)=> {
  console.log(e)
  if(range()){
    const result = 메인계산함수()
    console.log("하이", result)
    회차테이블만드는함수1(result)
    // console.log("안녕",회차테이블만드는함수1(result));
    
  } else {
    range()
    console.log(range());
  }
})

btnCal.addEventListener('click',메인계산함수);
btnCal.addEventListener('click',간단결과);
btnCal.addEventListener('click',modal);
btnReset.addEventListener('click',리셋함수);

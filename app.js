// inp 인풋 변수할당 (대출금액, 대출기간, 대출금리 인풋)
const inpLoanAmount = document.querySelector(".put-loan-amount");
const inpLoanPeriod = document.querySelector(".put-loan-period");
const inpLoanInterest = document.querySelector(".put-loan-interest");

// btn 버튼 변수할당 (계산버튼, 리셋버튼)
const btnCal = document.querySelector(".cal");
const btnReset = document.querySelector(".reset");

// 상환방법 라디오 버튼(만기, 원금균, 원리금균)
const inpMethodFirst = document.querySelector(".method-first");
const inpMethodSecond = document.querySelector(".method-second");
const inpMethodThird = document.querySelector(".method-third");

// 계산결과 (총납입금액, 총이자)
const valuePayment = document.querySelector(".value-payment");
const valueInterest = document.querySelector(".value-interest");

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



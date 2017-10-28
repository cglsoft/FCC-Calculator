// Native
// Check if the DOMContentLoaded has already been completed
/* if (document.readyState === "complete" || document.readyState !== "loading") {
eventHandler();
} else {
document.addEventListener('DOMContentLoaded', eventHandler);


addbits(s) {
  return (s.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || [])
  .reduce(function(sum, value) {
    return parseFloat(sum) + parseFloat(value);
  });
}

} */

 class Calculadora {
  constructor(){
    this.cNumber = "";
    this.cCalc = "";
    this.bLimpar = false;
  }

  addNumber(cNumber){
    if (this.bLimpar){
      this.bLimpar = false;
      this.cNumber = "";
    }
    this.cNumber +=cNumber;
    this.cCalc += cNumber;
  }

  getNumber(){
    return this.cNumber;
  }

  getHistory(){
    return this.cCalc;
  }

  operationNumber(cOperator){
    this.bLimpar = true;
    if ((cOperator === this.cNumber ) || (cOperator === "/" && this.cNumber ==="")){
      return;
    }
    this.cCalc += cOperator;
    this.cNumber = cOperator;
  }

  equalNumber(){
    let sum =  eval( this.cCalc);

    if (sum % 1 !== 0){
      sum.toFixed(2);
    }

    this.cNumber = sum;
    this.cCalc = sum;

    this.bLimpar = true;
    return sum;
  }

  clearMem(){
    this.bLimpar = true;
    this.cNumber = "0";
    this.cCalc = "0";
  }

}

var calcMem = new Calculadora();

//logic that has to be executed on page load
document.addEventListener("DOMContentLoaded",() => {

  [...document.querySelectorAll("button")].forEach((button) => {
    button.addEventListener("click", onButtonClick);
  });

  function onButtonClick(){
    // let buttonContent = this.textContent;
    let buttonValue   = this.value;
    //get button type from data attribute
    let buttonType = this.getAttribute("data-type");

    switch (buttonType) {
      case "ac" : {
        calcMem.clearMem();
        break;
      }
      case "number":{
        calcMem.addNumber(buttonValue);
        break;
      }
      case "calc":{
        calcMem.operationNumber(buttonValue);
        break;
      }
      case "equal":{
        calcMem.equalNumber(buttonValue);
        break;
      }
      default:
    }

    document.getElementById("answer").textContent = calcMem.getNumber();
    document.getElementById("history").textContent = calcMem.getHistory();

  }
});

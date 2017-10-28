export default class Calculadora {
  constructor(){
    this.cNumber = "";
    this.cCalc = "";
    this.bLimpar = false;
  }

  Calculadora(){
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

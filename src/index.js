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

 const Calculadora = require("./Calculadora.js").default;
//import Calculadora from "./Calculadora";

var moment = require('moment')

var calcMem = new Calculadora();

//logic that has to be executed on page load
document.addEventListener("DOMContentLoaded", function(event) {

  [...document.querySelectorAll("button")].forEach( function(button){
    button.addEventListener("click", onButtonClick);
  });

  function onButtonClick(event){
    // let buttonContent = this.textContent;
    var buttonValue   = this.value;
    //get button type from data attribute
    var buttonType = this.getAttribute("data-type");

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

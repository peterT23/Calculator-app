let num1 = "";
let num2 = "";
let operator = null;
let previousbutton = null;
let display = document.getElementById("display");
let result = "";
// previousnum = "number";
// console.log(previousnum);

function addNumber(num) {
  if (operator === null) {
    num1 += num;
    display.innerHTML = num1;
    console.log(num1);
  } else {
    num2 += num;
    display.innerHTML = num2;
    console.log(num2);
  }
  previousbutton = "number";
}

function GotoOperator(operatorin) {
  // let message;

  switch (operatorin.id) {
    case "plus":
      operator = "plus";
      previousbutton = "plus";
      calculate();
      console.log("plus");
      break;
    case "subtract":
      operator = "subtract";
      previousbutton = "subtract";
      calculate();
      console.log("subtract");
      break;
    case "multiply":
      operator = "multiply";
      previousbutton = "multiply";
      calculate();
      console.log("multiply");
      break;
    case "divide":
      operator = "divide";
      previousbutton = "divide";
      calculate();
      console.log("divide");
      break;
    case "equal":
      calculate();
      console.log("equal");
      break;
    case "clear":
      num1 = "";
      num2 = "";
      operator = null;
      display.innerHTML = "0";
    case "del":
      if (!operator && previousbutton === "number") {
        if (num1.length > 1) {
          display.innerHTML = num1.slice(0, -1);
          num1 = display.innerHTML;
          console.log("num1:" + num1);
        } else {
          display.innerHTML = "0";
          num1 = "";
          console.log("num1:" + num1);
        }
      }
      if (operator !== null && previousbutton === "number") {
        if (num2.length > 1) {
          display.innerHTML = num2.slice(0, -1);
          num2 = display.innerHTML;
          console.log("num2:" + num2);
        } else {
          num2 = "";
          display.innerHTML = "0";
          console.log("num2:" + num2);
        }
      }

    default:
      break;
  }
}
function calculate() {
  if (num2) {
    if (operator === "plus") {
      display.innerHTML = parseFloat(num1) + parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "subtract") {
      display.innerHTML = parseFloat(num1) - parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "multiply") {
      display.innerHTML = parseFloat(num1) * parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "divide") {
      display.innerHTML = parseFloat(num1) / parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
  }
}

const operatorLi = [
  "plus",
  "subtract",
  "multiply",
  "divide",
  "equal",
  "clear",
  "del",
];
const operatorList = operatorLi.map((o) => {
  let k = document.querySelector(`#${o}`);
  return k;
});
console.log(operatorList);

operatorList.forEach((ope) => {
  ope.addEventListener("click", () => {
    if (previousbutton === "number") {
      GotoOperator(ope);
    }

    console.log(ope);
  });
});

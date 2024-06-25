function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("firstOperand").value = "";
  document.getElementById("secondOperand").value = "";
  document.getElementById("operation").value = "+";
}

function calculate() {
  const firstOperand = parseFloat(
    document.getElementById("firstOperand").value
  );
  const secondOperand = parseFloat(
    document.getElementById("secondOperand").value
  );
  const operation = document.getElementById("operation").value;

  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      if (secondOperand === 0) {
        alert("Division by zero is not allowed.");
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  document.getElementById("display").value = result;
}

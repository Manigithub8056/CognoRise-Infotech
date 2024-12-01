const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn:not(.operator):not(#clear):not(#equals):not(#delete)");
const operatorButtons = document.querySelectorAll(".btn.operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("delete");

let currentInput = "";
let previousInput = "";
let operator = "";

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.getAttribute("data-value");
    display.textContent = currentInput;
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput) {
      if (previousInput && operator) {
        currentInput = performCalculation(operator).toString();
      }
      operator = button.getAttribute("data-value");
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

// Add event listener to equals button
equalsButton.addEventListener("click", () => {
  if (currentInput && previousInput && operator) {
    currentInput = performCalculation(operator).toString();
    operator = "";
    previousInput = "";
    display.textContent = currentInput;
  }
});

// Add event listener to clear button
clearButton.addEventListener("click", () => {
  clearCalculator();
});

// Add event listener to DEL button
deleteButton.addEventListener("click", () => {
  if (currentInput) {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    display.textContent = currentInput || "0"; // Update the display; show 0 if input is empty
  }
});

// Function to perform calculations
function performCalculation(operator) {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "%":
      return num1 % num2;
    default:
      return 0;
  }
}

// Function to clear the calculator
function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.textContent = "0";
}
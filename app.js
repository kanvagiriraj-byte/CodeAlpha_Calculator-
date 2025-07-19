const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

equalBtn.addEventListener("click", () => {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch {
    display.value = "Error";
    expression = "";
  }
});

clearBtn.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = /[0-9+\-*/.=]/;
  if (allowedKeys.test(e.key)) {
    if (e.key === "=" || e.key === "Enter") {
      try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else if (e.key === "Backspace") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else {
      expression += e.key;
      display.value = expression;
    }
  } else if (e.key === "Escape") {
    expression = "";
    display.value = "";
  }
});

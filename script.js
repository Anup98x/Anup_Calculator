let display = document.getElementById("display");

function append(char) {
  if (display.textContent === "0") {
    display.textContent = char;
  } else {
    display.textContent += char;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent.length === 1 || display.textContent === "Error") {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch (e) {
    display.textContent = "Error";
  }
}
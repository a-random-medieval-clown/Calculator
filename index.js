const screenDisplay = document.getElementById("display");

function display(input) {
  screenDisplay.textContent += input;
}
function allClear() {
  screenDisplay.textContent = "";
}
function equal() {
  try {
    screenDisplay.textContent = eval(screenDisplay.textContent);
  } 
  catch (error) {
    screenDisplay.textContent = "Syntax Error";
    console.error(error);
  }
}
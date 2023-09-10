const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let output = "";
const specialChars = ['/', '+', '-', '*']; 

const calculate = (btnValue) => {
  if (btnValue === '=' && output !== '') {
    output = eval(output);
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else if (output === "0" && !specialChars.includes(btnValue)) {
    output = btnValue;
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    calculate(event.target.value);
  });
});

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
  output = "0";
  display.value = output;
});

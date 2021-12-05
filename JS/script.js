function getPin() {
  const pin = Math.round(Math.random() * 100000);
  const pinString = pin + "";
  //   console.log(pin);
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("type-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

/// pin verify

function verifyPin() {
  const generatedPin = document.getElementById("display-pin").value;

  const typeNumbers = document.getElementById("type-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-failed");
  if (generatedPin == typeNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    successMessage.style.display = "none";
  }
}

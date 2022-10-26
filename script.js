const clientName = document.getElementById('clientName');
const clientAge = document.getElementById('clientAge');
const clientWeight = document.getElementById('clientWeight');
const clientHeight = document.getElementById('clientHeight');
const sendData = document.getElementById('sendData');

sendData.addEventListener("click", registration);

function registration () {
  let nameValue = clientName.value;
  let ageValue = clientAge.value;
  let weightValue = clientWeight.value;
  let heightValue = clientHeight.value;

  if (nameValue == 0 || ageValue == 0 || weightValue == 0 || heightValue == 0) {
    alert("Будь ласка, заповніть форму до кінця!");
  } else if (ageValue < 18 || ageValue > 60) {
    alert("Зважаючи на Ваш вік, ми змушені повідомити, що Ви не зможете відвідувати наш зал");
    clearAll ();
  } else if (weightValue < 60 || weightValue > 120) {
    alert("Зважаючи на Вашу вагу, ми змушені повідомити, що Ви не зможете відвідувати наш зал");
    clearAll ();
  } else if (heightValue < 160 || heightValue > 195) {
    alert("Зважаючи на Ваш зріст, ми змушені повідомити, що Ви не зможете відвідувати наш зал");
    clearAll ();
  } else {
    alert("Вітаємо, " + nameValue + "! Ви зареєстровані.");
    clearAll ();
  }
}

function clearAll () {
  clientName.value = "";
  clientAge.value = "";
  clientWeight.value = "";
  clientHeight.value = "";
}
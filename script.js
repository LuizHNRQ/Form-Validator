const form = document.querySelector('#form');
const user = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  formControl.querySelector('small').innerHTML = `${message}`;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
}

function checkEmail(input) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email not valid');
  }
}

//check required fields

function checkRequired(inputArray) {
  inputArray.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Must have: ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `Must have maximum: ${max}`);
  } else {
    showSuccess(input);
  }
}

//check password confirmation
function checkPassword(input1, input2) {
  if (input1.value === input2.value) {
    showSuccess([input1, input2]);
  } else {
    showError(input2, 'Password is not equal');
  }
}

//Event Listener
form.addEventListener('submit', e => {

  e.preventDefault();
  checkRequired([user, email, password, password2]);
  checkLenght(user, 3, 12);
  checkLenght(password, 6, 16);
  checkEmail(email);
  checkPassword(password, password2);

});
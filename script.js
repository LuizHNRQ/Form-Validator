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

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event listner
form.addEventListener('submit', e => {
  e.preventDefault();

  if (user.value === '') {
    showError(user, 'Username is required');
  } else {
    showSuccess(user);
  }
  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is invalid');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '' || password2.value !== password.value) {
    showError(password2, 'Password is required');
  } else {
    showSuccess(password2);
  }
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUp_2Button = document.getElementById('signUp_2');
const signIn_2Button = document.getElementById('signIn_2');
const container = document.getElementById('container');
const container_2 = document.getElementById('container_2');


signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signUp_2Button.addEventListener('click', () =>
container_2.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

signIn_2Button.addEventListener('click', () =>
container_2.classList.remove('right-panel-active'));


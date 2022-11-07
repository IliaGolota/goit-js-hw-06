const messageInput = document.querySelector('#name-input');
const messageName = document.querySelector('#name-output');

messageInput.addEventListener('input', (event) => {
  if (event.currentTarget.value === '') {
    messageName.textContent = 'Anonymus';
  } else {
    messageName.textContent = event.currentTarget.value;
  }
});

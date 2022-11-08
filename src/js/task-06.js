const messageInput = document.querySelector('#validation-input');
const inputDataLength = Number(messageInput.dataset.length);

messageInput.addEventListener('blur', (event) => {
  const inputValueLength = event.currentTarget.value.length;

  if (inputDataLength === inputValueLength) {
    messageInput.className = 'valid';
  } else if (event.currentTarget.value === '') {
    messageInput.className = '';
  } else {
    messageInput.className = 'invalid';
  }
});

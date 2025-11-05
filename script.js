document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    valid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '' || !email.match(emailPattern)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate Password
  if (password.length < 10) {
      document.getElementById('passwordError').textContent = 'Password should be at least 8 characters.';
      valid = false;
    }
    // Validate Message
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message should be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  }
});

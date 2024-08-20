function validateLogin() {
    var userCredentials = {
        'Benutzer1': 'Passwort1',
        'Benutzer2': 'Passwort2'
    };
  
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
  
    if(userCredentials[usernameInput] === passwordInput) {
        window.location.href = 'index.html';
    } else {
        alert('Benutzername oder Passwort falsch!');
    }
  
    return false;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const usernameField = document.getElementById('username');
      const passwordField = document.getElementById('password');
      const usernameContainer = usernameField.closest('.single_input_field_box');
      const passwordContainer = passwordField.closest('.single_input_field_box');
      const passwordToggle = document.querySelector('.password-toggle');
      const eyeIcon = passwordToggle.querySelector('.eye-icon');
  
      function toggleActiveClass(inputField, container) {
          if (inputField.value.trim() !== '') {
              container.classList.add('active');
          } else {
              container.classList.remove('active');
          }
      }
  
      usernameField.addEventListener('input', function() {
          toggleActiveClass(usernameField, usernameContainer);
      });
  
      passwordField.addEventListener('input', function() {
          toggleActiveClass(passwordField, passwordContainer);
      });
  
      passwordToggle.addEventListener('click', function() {
          if (passwordField.type === 'password') {
              passwordField.type = 'text';
              eyeIcon.src = '../src/eye-hide-icon.png'; // Pfad zum geschlossenen Auge-Icon
          } else {
              passwordField.type = 'password';
              eyeIcon.src = '../src/eye-icon.png'; // Pfad zum offenen Auge-Icon
          }
      });
  });
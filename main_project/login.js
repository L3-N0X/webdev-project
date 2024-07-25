function validateLogin() {
  // Variable, in der mehrere Passwörter gespeichert werden können, die später in Kombination abgeglichen werden können
  var userCredentials = {
      'Benutzer1': 'Passwort1',
      'Benutzer2': 'Passwort2'
      // Hierbei handelt es sich um ein Dictionary und es können beliebig viele weitere Kombinationen wie folgt eingefügt werden:
      // 'Benutzername': 'Passwort',
  };

  var usernameInput = document.getElementById('username').value; // Variable, die den Wert des Benutzername-Input-Feldes beinhaltet
  var passwordInput = document.getElementById('password').value; // Variable, die den Wert des Passwort-Input-Feldes beinhaltet

  // Prüfe, ob der eingegebene Benutzername im Objekt existiert und das jeweilige Passwort übereinstimmt
  if(userCredentials[usernameInput] === passwordInput) {
      window.location.href = 'index.html';
  } else {
      alert('Benutzername oder Passwort falsch!');
  }

  return false; // Verhindere das normale Absenden des Formulars
}
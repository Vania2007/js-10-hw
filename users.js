let users = { artem: "password1", olga: "password2" };

function check(n = prompt("Уведіть им'я для перевірки:", "")) {
  let exist = false;
  for (let key in users) {
    if (key == n) {
      exist = true;
      break;
    }
  }
  if (exist) {
    alert("Такий користувач зареєстрований");
  } else {
    alert("Такий користувач не зареєстрований");
  }
  return exist;
}
function add() {
  let user = prompt("Введіть логін");
  if (!check(user)) {
    let password = prompt("Введіть пароль");
    while (password == "") {
      password = prompt(
        "Без паролю неможливо додати користувача.\nНапишіть пароль!"
      );
    }
    users[user] = password;
    alert("Користувача успішно додано");
  }
}
function show() {
  let str = "";
  for (let key in users) {
    str += `${key}: ${users[key]}<br/>`;
  }
  document.getElementById("output").innerHTML = str;
}

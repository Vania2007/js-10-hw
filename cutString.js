function cutString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "…";
  }
  return str;
}

let str = prompt("Введіть рядок");
let maxLength = prompt(
  "Вкажіть максимальну кількість символів, які повернуться"
);

document.getElementById("output").innerHTML = cutString(str, maxLength);

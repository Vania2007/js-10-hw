let str = prompt("Input string");
function isStringSpam(str) {
  str = str.toLowerCase();
  if (str == "spam") {
    alert(str.replace(`${str}`, "***"));
    return true;
  } else {
    alert(str.replace(`${str}`, "false"));
    return false;
  }
}
isStringSpam(str);

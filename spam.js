let str = prompt("Input string");
function isStringSpam(str) {
  str = str.toLowerCase();
  if (str.includes("spam")) {
    alert(str.replaceAll("spam", "***"));
    return true;
  } else {
    return false;
  }
}
isStringSpam(str);

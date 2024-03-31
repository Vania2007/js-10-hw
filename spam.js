let str = prompt("Input string");
function isStringSpam(str) {
  str = str.toLowerCase();
  if (str == "spam") {
    alert("***");
    return true;
  } else {
    alert("false");
    return false;
  }
}
isStringSpam(str);

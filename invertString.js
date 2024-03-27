function invertString(str) {
  let invertedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }
  return invertedStr;
}

const myString = "Olá, mundo!";
const invertedString = invertString(myString);
console.log(invertedString);

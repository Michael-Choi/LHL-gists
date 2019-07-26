let camelCase = function(input) {
  // Your code here
  let newStr = "";
  let temp = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      i++;
      temp = input[i].toUpperCase();
      newStr += temp;
    } else {
      newStr += input[i];
    }
  }
  return newStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

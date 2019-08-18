function squareCode(message) {
  let arr = [];
  let code = [];

  //cleans string so there are no spaces
  message = message.replace(/ /g, "");

  //gets length of message (without spaces)
  let messageLength = message.length;

  //gets the code number
  let codeNumber = Math.ceil(Math.sqrt(messageLength));

  //sets word into separate lines in arr array
  for (let i = 0; i < codeNumber; i++) {
    arr[i] = message.slice(i * codeNumber, i * codeNumber + codeNumber);
  }

  //for each line in arr array
  for (let i = 0; i < arr.length; i++) {
    if (code[i] == null) {
      code[i] = "";
    }
    //for each letter in each line
    for (let j = 0; j < codeNumber; j++) {
      if (arr[j][i] !== undefined) {
        code[i] += arr[j][i];
      }
    }
  }
  return code.join(" ");
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);

/** expected output
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/

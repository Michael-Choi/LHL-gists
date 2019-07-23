const urlEncode = function(text) {
  // Put your solution here
  let newtext = "";
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newtext += "%20";
    } else {
      newtext += text[i];
    }
  }
  return newtext;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

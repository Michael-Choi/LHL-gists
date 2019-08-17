function urlDecode(text) {
  let jsonObj = {};
  text = text.replace(/%20/g, " ");
  let splitText = text.split("&");
  for (let i = 0; i < splitText.length; i++) {
    let arr = splitText[i].split("=");
    jsonObj[arr[0]] = arr[1];
  }
  return jsonObj;
}
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

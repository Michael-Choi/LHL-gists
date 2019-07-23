const repeatNumbers = function(data) {
  // Put your solution here
  let result = "";
  let final = "";

  //goes through array
  for (let i = 0; i < data.length; i++) {
    result = String(data[i][0]).repeat(String(data[i][1]));
    if (data.length == 1) {
      return result;
    } else {
      final += result + ", ";
    }
  }
  return final.slice(0, -2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

const organizeInstructors = function(instructors) {
  // Put your solution here
  // sorted dictionary with courses as keys and names as values (names in an array)
  let sortedDict = {};
  for (let i = 0; i < instructors.length; i++) {
    // if the course is Not in the object: set the value to be an array of the names
    if (!(instructors[i].course in sortedDict)) {
      sortedDict[`${instructors[i].course}`] = [];
      sortedDict[`${instructors[i].course}`].push(`${instructors[i].name}`);
    } else {
      sortedDict[`${instructors[i].course}`].push(`${instructors[i].name}`);
    }
  }
  return sortedDict;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);

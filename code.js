const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: You could create a function which renders any result to the DOM,
// then just call this function inside each kata!  That way you only have to write code to render
// to the DOM once :)

function createHeader(kataNum) {
  let header = document.createElement("h3");
  header.innerText = `Kata ${kataNum}`;
  document.body.appendChild(header);
}

// Write a function that returns an array with the cities in 'gotCitiesCSV'.
function kata1() {
  // Your Code Here
  createHeader(1);
  let array1 = gotCitiesCSV.split(",");
  let array1display = document.createElement("div");
  array1display.innerText = JSON.stringify(array1);
  document.body.appendChild(array1display);
  return array1;
}
// Render to the DOM.
// Return your result.
kata1(); // Remember to execute your function!

// Write a function that returns an array of words from the sentence in 'bestThing'.
function kata2() {
  createHeader(2);
  let array2 = bestThing.split(" ");
  let array2display = document.createElement("div");
  array2display.innerText = JSON.stringify(array2);
  document.body.appendChild(array2display);
  return array2;
}

kata2();

// Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.
function kata3() {
  createHeader(3);
  let string3 = gotCitiesCSV.split(",").join(";");
  let string3display = document.createElement("div");
  string3display.innerText = string3;
  document.body.appendChild(string3display);
  return string3;
}

kata3();

// Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.
function kata4() {
  createHeader(4);
  let array4 = lotrCitiesArray.join(",");
  let array4display = document.createElement("div");
  array4display.innerText = array4;
  document.body.appendChild(array4display);
  return array4;
}

kata4();

// Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.
function kata5() {
  createHeader(5);
  let array5 = lotrCitiesArray.slice(0, 5);
  let array5display = document.createElement("div");
  array5display.innerText = JSON.stringify(array5);
  document.body.appendChild(array5display);
  return array5;
}

kata5();

// Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.
function kata6() {
  createHeader(6);
  let array6 = lotrCitiesArray.slice(-5);
  let array6display = document.createElement("div");
  array6display.innerText = JSON.stringify(array6);
  document.body.appendChild(array6display);
  return array6;
}

kata6();

// Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
function kata7() {
  createHeader(7);
  let array7 = lotrCitiesArray.slice(2, 5);
  let array7display = document.createElement("div");
  array7display.innerText = JSON.stringify(array7);
  document.body.appendChild(array7display);
  return array7;
}

kata7();

// Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'.
function kata8() {
  createHeader(8);
  let index8 = lotrCitiesArray.indexOf("Rohan");
  let array8 = lotrCitiesArray;
  array8.splice(index8, 1);
  let array8display = document.createElement("div");
  array8display.innerText = JSON.stringify(array8);
  document.body.appendChild(array8display);
  return array8;
}

kata8();

// Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'.
function kata9() {
  createHeader(9);
  let index9 = lotrCitiesArray.indexOf("Dead Marshes");
  let array9 = lotrCitiesArray;
  array9.splice(index9 + 1);
  let array9display = document.createElement("div");
  array9display.innerText = JSON.stringify(array9);
  document.body.appendChild(array9display);
  return array9;
}

kata9();

// Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the new modified 'lotrCitiesArray'.
function kata10() {
  createHeader(10);
  let index10 = lotrCitiesArray.indexOf("Gondor");
  let array10 = lotrCitiesArray;
  array10.splice(index10 + 1, 0, "Rohan");
  let array10display = document.createElement("div");
  array10display.innerText = JSON.stringify(array10);
  document.body.appendChild(array10display);
  return array10;
}

kata10();

// Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'.
function kata11() {
  createHeader(11);
  let index11 = lotrCitiesArray.indexOf("Dead Marshes");
  let array11 = lotrCitiesArray;
  array11.splice(index11, 1, "Deadest Marshes");
  let array11display = document.createElement("div");
  array11display.innerText = JSON.stringify(array11);
  document.body.appendChild(array11display);
  return array11;
}

kata11();

// Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
function kata12() {
  createHeader(12);
  string12 = bestThing.slice(0, 14);
  string12display = document.createElement("div");
  string12display.innerText = string12;
  document.body.appendChild(string12display);
  return string12;
}

kata12();

// Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
function kata13() {
  createHeader(13);
  let string13 = bestThing.slice(-12);
  let string13display = document.createElement("div");
  string13display.innerText = string13;
  document.body.appendChild(string13display);
  return string13;
}

kata13();

// Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
function kata14() {
  createHeader(14);
  let string14 = bestThing.slice(23, 38);
  let string14display = document.createElement("div");
  string14display.innerText = string14;
  document.body.appendChild(string14display);
  return string14;
}

kata14();

// Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
function kata15() {
  createHeader(15);
  let string15Length = bestThing.length;
  let string15 = bestThing.substring(string15Length - 12, string15Length);
  let string15display = document.createElement("div");
  string15display.innerText = string15;
  document.body.appendChild(string15display);
  return string15;
}

kata15();

// Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
function kata16() {
  createHeader(16);
  let string16 = bestThing.substring(23, 38);
  let string16display = document.createElement("div");
  string16display.innerText = string16;
  document.body.appendChild(string16display);
  return string16;
}

kata16();

// Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the new array.
function kata17() {
  createHeader(17);
  let array17 = lotrCitiesArray;
  array17.pop();
  let array17display = document.createElement("div");
  array17display.innerText = JSON.stringify(array17);
  document.body.appendChild(array17display);
  return array17;
}

kata17();

// Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the new array.
function kata18() {
  createHeader(18);
  let array18 = lotrCitiesArray;
  array18.push("Deadest Marshes");
  let array18display = document.createElement("div");
  array18display.innerText = JSON.stringify(array18);
  document.body.appendChild(array18display);
  return array18;
}

kata18();

// Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the new array.
function kata19() {
  createHeader(19);
  let array19 = lotrCitiesArray;
  array19.shift();
  let array19display = document.createElement("div");
  array19display.innerText = JSON.stringify(array19);
  document.body.appendChild(array19display);
  return array19;
}

kata19();

// Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the new array.
function kata20() {
  createHeader(20);
  let array20 = lotrCitiesArray;
  array20.unshift("Mordor");
  let array20display = document.createElement("div");
  array20display.innerText = JSON.stringify(array20);
  document.body.appendChild(array20display);
  return array20;
}

kata20();

// ----------------------------------------------------------------------
// Bonus Problems - Complete these for Extra Credit
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of 'only' in 'bestThing'.
function kata21() {
  createHeader(21);
  let index21 = bestThing.indexOf("only");
  let index21display = document.createElement("div");
  index21display.innerText = index21;
  document.body.appendChild(index21display);
  return index21;
}

kata21();

// Write a function that finds and returns the index of the last word in 'bestThing'.
function kata22() {
  createHeader(22);
  let array22 = bestThing.split(" ");
  let array22Length = array22.length;
  let lastIndex = array22[array22Length - 1];
  let index22 = bestThing.indexOf(`${lastIndex}`);

  let index22display = document.createElement("div");
  index22display.innerText = index22;
  document.body.appendChild(index22display);
  return index22;
}

kata22();

// Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).
function kata23() {
  // Your Code Here
}
// Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'.
function kata24() {
  // Your Code Here
}
// Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
function kata25() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'.
function kata26() {
  createHeader(26);
  let MirkwoodItem = lotrCitiesArray.includes("Mirkwood");
  let MirkwoodDisplay = document.createElement("div");
  if (MirkwoodItem == true) {
    MirkwoodDisplay.innerText = "Yes";
  } else {
    MirkwoodDisplay.innerText = "No";
  }
  document.body.appendChild(MirkwoodDisplay);
  return MirkwoodItem;
}

kata26();
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'.
function kata27() {
  createHeader(27);
  let hollywoodItem = lotrCitiesArray.includes("Hollywood");
  let hollywoodDisplay = document.createElement("div");
  if (hollywoodItem == true) {
    hollywoodDisplay.innerText = "Yes";
  } else {
    hollywoodDisplay.innerText = "No";
  }
  document.body.appendChild(hollywoodDisplay);
  return hollywoodItem;
}

kata27();

// Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'.
function kata28() {
  createHeader(28);
  let index28 = lotrCitiesArray.indexOf("Mirkwood");
  let index28display = document.createElement("div");
  index28display.innerText = index28;
  document.body.appendChild(index28display);
  return index28;
}

kata28();

// Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
function kata29() {
  // Your Code Here
}
// Write a function that reverses the order of 'lotrCitiesArray' and returns the new array.
function kata30() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' alphabetically and returns the new array.
function kata31() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the new array.
function kata32() {
  // Your Code Here
}

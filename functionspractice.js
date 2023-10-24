//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                  FUNCTIONS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// A. PRINTGREETING
//---------------------------------------------------------------------------------

//1. Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

function printGreeting(param_name) {
  return `Hello there, ${param_name}`;
}
console.log(printGreeting("Myfriend"));

//B. PRINT COOL
//--------------------------------------------------------------------------------------

printcool = (param_name) => {
  return `${param_name} is cool`;
};
console.log(printcool("My Friend"));

//C. CALCULATE CUBE
//-------------------------------------------------------------------------------------
function calculatecube(side) {
  return Math.pow(side, 3);
}
console.log(calculatecube(3));

//D. isVowel
//-------------------------------------------------------------------------------------
//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
const isVowel = (single_char) => {
  let vowelarray = ["a", "e", "i", "o", "u"];
  if (typeof single_char == "string" && single_char.length === 1) {
    if (vowelarray.includes(single_char.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Enter a valid character";
  }
};

console.log(isVowel("A"));

//E. GET TWO LENGTHS
//---------------------------------------------------------------------------------------------------

//Write a function getTwoLengthsthat accepts two parameters (strings).
//The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(first_string, second_string) {
  let array_lengths = [];
  if (typeof first_string === "string" && typeof second_string === "string") {
    array_lengths.push(first_string.length, second_string.length);
    return array_lengths;
  } else {
    return "Please enter a valid string";
  }
}

console.log(getTwoLengths("Meenakshi", "Suresh"));

//F. GET MULTIPLE LENGTHS
//------------------------------------------------------------------------------------------------------------

//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings.
//The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (string_arr) => {
  let array_lengths = [];
  for (string_element of string_arr) {
    if (typeof string_element === "string") {
      array_lengths.push(string_element.length);
    } else {
      array_lengths.push("Not a string");
    }
  }
  return array_lengths;
};
console.log(getMultipleLengths(["Hi", "This", "is", "Meenakshi", 2]));

//G. MAX OF THREE
//------------------------------------------------------------------------------------------

//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3) {
  if (
    typeof num1 == "number" &&
    typeof num2 == "number" &&
    typeof num3 == "number"
  ) {
    return num1 > num2 && num1 > num3
      ? num1
      : num2 > num1 && num2 > num3
      ? num2
      : num3;
  } else {
    return "Not a valid number(s)";
  }
};

console.log("The maximum number is :" + maxOfThree(3, 2, 4));

//H. PRINT LONGEST WORD
//--------------------------------------------------------------------------------------------

//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array.

const longestStringInArray = function (...str) {
    let longString = str[0];
    for(let i=0;i< str.length;i++){
        if(str[i].length > longString.length){
            longString = str[i];
        }
    }
    return longString;
  };
  console.log(
    "The longest string of the array is :" +
      longestStringInArray("Meena", "MERN", "JPMorgan", "Javascript")
  );

  

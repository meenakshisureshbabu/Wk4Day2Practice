//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          VARIABLES AND DATATYPES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  A. Q & A

//1. How do we assign a value to a variable?

let myname = "Meena";

//2. How do we change the value of a variable?

myname = "Suresh";

//3. How do we assign an existing variable to a new variable?

let new_name = myname;

//4. Remind me, what are declare, assign, and define?

let num; // declare
num = 10; // assign and define the variable

//5. What is pseudocoding and why should you do it?

// Psudocoding is the step by step solution explanation of a problem in simple English words. 
//It is helpful to program effectively to cover all the requirements and cover all the test cases without fail.

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// I think it should be 70% of time to be spent on how the problem to be solved. Remaining 30% should be done coding effectively.

// B. STRINGS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//1. Create a variable called firstVariable
let firstVariable;

//2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";

//3. Change the value of this variable to some number

firstVariable = 10;

//4. Store the value of firstVariablein a new variable called secondVariable

let secondvariable = firstVariable;

//5. Change the value of secondVariableto any string.

secondvariable = "Television";

//6. What is the value of firstVariable?

console.log(firstVariable);// prints 10

//7. Create a variable called yourNameand set it equal to your name as a string. 
//Then, write an expression that takes the string "Hello, my name is " 
//and the variable yourNameso that it returns a new string with them concatenated.

let yourName = "Meenakshi";
let greetmyName = `Hello , my name is ${yourName}`;
console.log(greetmyName);// Prints "Hello, my name is Meenakshi"

//C. BOOLEANS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. 
//Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a+b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a*a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


  // D. THE FARM
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //1. Declare a variable animal. Set it to be either "cow" or something else

  let animal = "cow";

  //2.Write code that will print out "mooooo" if the it is equal to cow

  if(typeof animal == "string" && animal === "cow"){
    console.log("Mooooooooooo");
  }

  //3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

  if(typeof animal == "string" && animal === "cow"){
    console.log("Mooooooooooo");
  }
  else{
    if(typeof animal == "string"){
        console.log("Hey ! You're not a cow");
    }
    else{
        console.log("Not a valid string")
    }
  }
  
  // E. DRIVERS'S ED

  //1. Make a variable that holds a person's age; be semantic

  let age_num = 16;

  //2. Write code that will print out "Here are the keys!", 
  //if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

  if(typeof age_num == "number" && age_num >= 16){
    console.log("Here are the keys!");
  }
  else{
    if(typeof age_num == "number"){
        console.log("Sorry, you're too young.")
    }
    else{
        console.log("Not a valid number");
    }
  }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                  OBJECTS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//A. MAKE A USER OBJECT
//-----------------------------------------------------


//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
const user = {"name":"Meena","email":"meenakshi.pradev@gmail.com","age":36,"purchased":[]};
console.log(user);

//B. UPDATE THE USER
//------------------------------------------------------
//Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = "meenakshi@gmail.com";
user.age++;
console.log(user);

//C. ADDING KEYS AND VALUES
//------------------------------------------------------

//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "Jersey City";
console.log(user);


//D. SHOPAHOLIC
//-----------------------------------------------------
//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
//Console.log just the "Merino jodhpurs" from the purchasedarray.
user.purchased.push("Carbohydrates","Peace of Mind","Merino Jodhpurs");
console.log(user.purchased[2])

//E. OBJECT WITHIN OBJECT
//-----------------------------------------------------
//1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name:"Tree",
    age:80,
    location:"New York",
    purchased:[]
}

//2. Console.log just the friend's name
console.log(user.friend.name)

//3. Console.log just the friend's location
console.log(user.friend.location)

//4. CHANGE the friend's age to 55
user.friend.age = 90;
console.log(user)

//5. The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
//6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

user.friend.purchased.push("The One Ring","A latte");
console.log(user)

//7. Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1])

// F. LOOPS
//-----------------------------------------------------------------------------------------

//1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
user.purchased.forEach((item) => {
    console.log(item);
})

//2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
user.friend.purchased.forEach((item) => {
    console.log(item);
})

// G. FUNCTIONS CAN OPERATE ON OBJECTS
//---------------------------------------------------------------------------------------------
//1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
//increment the user's age by 1
//make the user's name uppercase

function updateUser(){
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser();
//console.log(user);


//2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of 
//hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object 
//that is passed in as an argument when the function is called. 
//Call your oldAndLoudfunction with useras the argument.

function oldAndLoud(person){
    person.age++;
    person.location = person.location.toUpperCase();
}
oldAndLoud(user);
console.log(user);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          CAT COMBINATOR
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. MAMA CAT

//---------------------------------------------------------------------------------
//Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {catname:"Kittny",breed:"Persian", age:5};
console.log(cat1.age);
console.log(cat1.breed);

// 2. PAPA CAT

//-----------------------------------------------------------------------------------
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {catname:"Pappy",breed:"Siamese",age:6}


// 3. COMBINE CATS

//Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

//Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

const combineCats = (mama,papa) => {
    console.log(mama);
    console.log(papa);
}

combineCats(cat1,cat2);

//Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

const combineCatsJoin = (mama,papa) => {
    const combined_obj = {
        catname : mama.catname+papa.catname,
        age :1,
        breed: mama.breed+"-"+papa.breed
    }
    return combined_obj;
}

console.log(combineCatsJoin(cat1,cat2));


//4. CAT BRAIN BENDER

//If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
//catCombinatorcan use itself as its own argument.

console.log(combineCatsJoin(combineCatsJoin(cat1,cat2),combineCatsJoin(cat1,cat2)))
//Write a console.log that is three levels deep of combineCats. 
//combineCats should have two arguments, each which are combineCats, 
//each which have two arguments, each which are combineCats.
console.log(combineCatsJoin(combineCatsJoin(combineCatsJoin(cat1,cat2),combineCatsJoin(cat1,cat2)),combineCatsJoin(combineCatsJoin(cat1,cat2),combineCatsJoin(cat1,cat2))));
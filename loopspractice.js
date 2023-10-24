//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                      LOOPS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// A. THE BASICS
//------------------------------------

//1. Write a loop that will print out all the numbers from 0 to 10, inclusive

for(let counter=0;counter<=10;counter++){
    console.log(counter);
}

//2. Write a loop that will print out all the numbers from 10 up to and including 400

for(let counter=10;counter<=400;counter++){
    console.log(counter);
}

//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

 for(let counter=12;counter<4000;counter+=3){
         console.log(counter);
 }

// B. GET EVEN
//-----------------------------------------------------------------

//1. Print out the numbers that are within the range of 1 - 100

for(let counter = 0;counter<= 100;counter++){
    if(counter%2 == 0){
        console.log(counter);
    }
}

//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


for(let counter = 0;counter<= 100;counter++){
    if(counter%2 == 0){
        console.log(`${counter} is an even number`);
    }
}

//  C. GIVE ME FIVE
//----------------------------------------------------------------------------

//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

for(let counter = 0;counter<=100;counter++){
    if(counter%5 ===  0){
        console.log(`I found a ${counter}. High five!`);
    }
    if(counter%3 === 0){
        console.log(`I found a ${counter}. Three is a crowd`);
    }
}



// D. SAVINGS ACCOUNT
//----------------------------------------------------------------------

//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account

let bank_account = 0;
for(let counter=0;counter<=10;counter++){
    bank_account += counter;
}
console.log(`$${bank_account}`);

//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let bank_account_bal = 0;
for(let counter=1;counter<=100;counter++){
    bank_account_bal += counter;
}
console.log(bank_account_bal*2);
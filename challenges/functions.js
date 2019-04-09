// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
  * 
  * 
  * TARGET TO WORK BACK FROM
  * //consume(2,2,add); // 4
  * 
*/

const consume= function (param1, param2, cb) {
  return cb(param1, param2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add= function (num1, num2){
  return num1+num2;
}
//console.log(add(1,3));  // works

const multiply= function (num3, num4){
  return num3*num4;
}
//console.log(multiply(1100,3));  // works

const greeting = function (first, last){
  return `Hello ${first} ${last}, nice to meet you`
}
//console.log(greeting("indiana", "jones"));  // works


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!. EXPLANATION: this is about closure. the internal variable is outside, higher up the scope chain of the nested function. nestedFunction can reach out and get access to internal because it's in it's lexical scope";

  function nestedFunction() {
    console.log(internal);
  };

  nestedFunction();
}

myFunction();
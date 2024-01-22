// 12-FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions
//1. What is a Function Statement in JS?
// ->this way of creating function is called function statement.
// eg-1:
// function a(){
//      console.log("a called"); 
// }
// a();

//2.  What is a Function Expression
// ->function can assigned to varaible also.
// ->functions acts like a value to varaible.

// eg-2:
// var b=function(){
//     console.log("b called")
// }
// b();


//3. Difference between Function Statment and Function Expression
// ->major difference between functions statement and function expression is hoisting.
// ->during hoisting phase or memory craetion phase 
// memory is created for "a" and assigned with function a().
// ->In case of function expression b is treated as any other variable.
// ->it undefined intially until variable get executed.
// ->then function is assigned to varaible b.

// eg-1:

// a();
// b();

// // Function Statement
// function a(){
//     console.log("a called"); 
// }

// // Function Expression
// var b=function(){
//     console.log("b called")
// }


// Output:
// a called
// Uncaught TypeError: b is not a function
    
//4. What is a  Function Declaration?
// ->function statement and declaration are Same.

//5. What is an Anonymous Function in JavaScript
// 1. Anonymous function
// ->a function without name is anonymous function.
// ->they does not have own identity.


//6. Syntax Error & Anonymous functions
// ->According ecma script specification a function should always have a name.

// eg-1: it leads to syntax error
// function(){

// }

// Output:
// Uncaught SyntaxError: Function statements require a function name (at functions.js:59:1)




//7. Use/ Advantages of Anonymous Functions
// ->Anonymous functions are used in a place where functions are used as values.
// ->use it to assign to a variable.
// eg:
// var a=function(){
//     console.log("Hello World");
// }


//8. What are Named Function Expressions in JS
// ->we can have name of the function and give it as value to a varaible.

// eg-1:
// var b=function getName(){
//     console.log("b is called");
// }

// b(); 

// Output:
// b is called



//9. Corner Case Gotcha using Named Function Expression
// ->When we call function by its name it gives reference error because if function is used as value then function getName is not created in outer scope or global scope.
// ->function getName cannot be accessed in globally.

// eg-1:
// var b=function getName(){
//     console.log("b is called");
// }

// b(); 
// getName();

// Output:
// b is called
// Uncaught ReferenceError: getName is not defined
//     at functions.js:89:1

// ->getName() function can be accessed inside getName() function.

// eg-2:
// var b=function getName(){
//     console.log(getName);
    
// }

// b();

// Output:
// ƒ getName(){
//     console.log(getName);
    
// }


//10. What is the difference between Parameters & Arguments?

//1. Arguments - the value we pass inside an function is known as arguments.
//2. Parameters - identifiers or varaibles which get those values are parameters.

//->Function parameters are the names listed in the function definition. 
//->Function arguments are the real values passed to (and received by) the function.

// eg-1:

// function getName(parameters){

// }

// getName(arguments)


//11. First-Class Functions in JavaScript
// 1. First class functions - the ability to use functions as values is known as first class functions.

// or

// ->the ability of functions to be used as value ans assicgn to variable, can be passed as an argument to another  function and can be returned from the function.
// ->this abilty is known as first call functions.

//11.1 function can be passed as argument to other function.

// eg-1:
// function getFun(para1){
//   console.log(para1)
// }

// getFun(function(){
//      console.log("function a argument")
// });

// alter
// function getFun(para1){
//     console.log(para1)
//   }

// function argumentFun(){
//     console.log("function a argument")
// }
  
//   getFun(argumentFun);

//   Output:
// ƒ argumentFun(){
//     console.log("function a argument")
// }


// 11.2 a function can returned from a function.

// eg-2:
// var b=function(para1){
//     return function(){
//         console.log("hello")
//     }
// }
// b();
// console.log(b());


//12. Functions are First-Class Citizens
// ->the ability to function to be used like values makes the function as first class citizens in JavaScript.

//13. Info about Arrow Functions
// ->function statemnts or declatrations and function expression these can be written using arrow functions.
// ->Arrow functions come up as a part of es6 or Ecmascript 2015
// ->let, const and arrow functions are introduced in es6.

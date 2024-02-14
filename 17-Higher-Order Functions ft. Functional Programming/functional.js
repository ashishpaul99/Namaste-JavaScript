// 17-Higher-Order Functions ft. Functional Programming
// Dt:05/02/24 Time:12:45PM
// 1. What is Higher Order Functions?
// 1. Higher Order function- A function which takes other function as an argument or returns a functions is known as higher order function.


// 2. Code demonstration of Higher-Order Function
// eg-1:
// function x() {
//     console.log("Namaste");
// }

// function y(x) {
//     x();
// }

// ->y takes  x as argument. function y is known as higher order function.
// ->x is call back function.

// y - higher order function
// x - call back function


// 3. Introduction to Functional Programming
// eg-2:Area, perimeter and diameters of circles with differnet radius
// const radius =[3,2,5,4,1];
// const calculateArea=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// const calculateCircum=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }
// const calculateDiameter=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }

// console.log("Circumference of circles:");
// console.log(calculateCircum(radius));
// console.log("Area of circle:");
// console.log(calculateArea(radius));
// console.log("Diameters of circle:")
// console.log(calculateDiameter(radius));

// Output:
// Circumference of circles:
// [18.84955592153876, 12.566370614359172, 31.41592653589793, 25.132741228718345, 6.283185307179586]
// Area of circle:
// [28.274333882308138, 12.566370614359172, 78.53981633974483, 50.26548245743669, 3.141592653589793]
// Diameters of circle:
// [6, 4, 10, 8, 2]

// 4. Mistakes people make in a Coding Interview
// ->What interviewer expects in coding roung.
// ->What is modular and reusable code?
// ->How we can wirte it in function way.


// 5. DRY Principle - Don't Repeat Yourself
// ->we are repeating a lot while writing above code.
// ->we have principle in softwqre engineering which dry priciple(Don't Repeat Yourself).
// ->All 90% of code is same but logic is different.

// 6. How to optimize our code
// ->optimizing above code.
// ->Writing generic functions.
// const radius = [3, 2, 5, 4, 1];
// const area = function (radius) {
//     return Math.PI * radius * radius;
// }
// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius) {
//     return 2 * radius;
// }
// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log("Area of the circles:" + calculate(radius, area));
// console.log("Circumference of the circles:" + calculate(radius, circumference));
// console.log("Diameter of the circles:" + calculate(radius, diameter));


// Output:
// Area of the circles:
// 28.274333882308138,12.566370614359172,78.53981633974483,50.26548245743669,3.141592653589793
// Circumference of the circles:
// 18.84955592153876,12.566370614359172,31.41592653589793,25.132741228718345,6.283185307179586
// Diameter of the circles:6,4,10,8,2


// 7. Beauty of Functional Programming
// ->write code using functional programming.
// ->we abstracted code into smaller function and it has it's own resposnsibility.
// ->no repitation in code.
// ->writing all the logic code into small resusable componenets which are functions.
// -> Reusability, Modularity and Passing functions into different functions are crucial thing in functional programming.
// ->functional programming deals with pure functions, composition of functions, reusability, modularity.
// ->In interview wirte code in this style and breaking logic into samller functional units.

// 8. Pollyfil for map function in JavaScript
// ->fuction calculate in above code is similar to function map.
// ->Map is very common higher order functuion.
// ->map functions create an new iterate over each elements in radus arraya and returns the output

// const radius = [3, 2, 5, 4, 1];
// const area = function (radius) {
//     return Math.PI * radius * radius;
// }
// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// map function maps the whole array with some logic(area, circumference, diameter)
// console.log("Map function output:" + radius.map(area));
//    or
// console.log("Normal function output:" + calculate(radius, area));

// Output:
// Map function output:
// 28.274333882308138,12.566370614359172,78.53981633974483,50.26548245743669,3.141592653589793
// Normal function output:
// 28.274333882308138,12.566370614359172,78.53981633974483,50.26548245743669,3.141592653589793

// eg-2:
// ->make calculate function exactly similar to map.
// ->put array.prototype on function.
// ->calculate will available on the all the arrays in code.
// ->Ployfill for map

// const radius = [3, 2, 5, 4, 1];
// const area = function (radius) {
//     return Math.PI * radius * radius;
// }
// Array.prototype.calculate = function (logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.map(area));
// //  or
// console.log(radius.calculate(area));

// 9. Recap of the episode
// ->Higher order function.
// ->call back function
// ->functions are first class citizens in js.
// ->functional programming- thinking of logic in terms of smaller functions and passing them into another function.



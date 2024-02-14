// 18-map, filter & reduce  Time:2:21PM Dt:5/2/24
// 1. Array.map() function in JavaScript
// ->Map function is used to transform an array.
// ->function has to pass in map function.


// Example 1 - for double the values
// ->Transform and get a new array out of it.
// Double -[6,10,12,8,16]
// Triple -[9,15,18,12,24]
// Binary -["11","101","110","100","1000"]
// ->transformation function is passed into map function.
// ->it will run this function over each value of array and creates a new array out of it.
// ->new array will be inside output.

// =>code
// const arr = [3, 5, 6, 4, 8];
// function double(x) {
//     return x * 2;
// }
// const output = arr.map(double);
// console.log(output); //  [6, 10, 12, 8, 16]


// Example 2 - for triple the values
// function triple(x){
//     return x*3;
// }

// const output = arr.map(triple);
// console.log(output);  //[9, 15, 18, 12, 24]


// Example 3 - for getting binary values
// const arr = [5, 1, 3, 2, 6];
// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

// =>by passing function
// const output=arr.map(function binary(x){
//      return x.toString(2);
// });
// console.log(output); //['101', '1', '11', '10', '110']

// =>by using arrow functions
// const output=arr.map((x)=>
//     x.toString(2)
// );

// console.log(output); // ['101', '1', '11', '10', '110']


// Output:
// ['101', '1', '11', '10', '110']

// ->it is mapping each and every value and transforms.


// 2. Array.filter() function in JavaScript
// ->filter function used to filter the values in array.
// ->filter each and every elements whihc are grater than than 4 in an array
// ->filetering even numbers in an array.
// ->filtering the numbers whihc are divisible by 3.
// ->array which has only values whihc are filtered based on logic.
// ->call filter function over array and filter logic should be written in it.


// eg-4: filter odd values
// ->for 2 and 6 it returns false.
// const arr = [5, 1, 3, 2, 6];
// function isOdd(x){
//     return x%2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// Output:[5, 1, 3]


// eg-5: filter values which are greater than 4
// const arr = [5, 1, 3, 2, 6];
// function greater4(x){
//     return x>4;
// }
// const output = arr.filter(greater4);
// console.log(output);

// Output:
// [5, 6]

// eg-6: alternative for above code
// const arr = [5, 1, 3, 2, 6];
// const output = arr.filter(function greater4(x){
//     return x>4;
// });
// console.log(output); //[5, 6]

// or

// const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((x)=>
//      x>4
// );
// console.log(output); //[5, 6]




// 3. Array.reduce() function in JavaScript
// ->it is used at a place where all elements of the array are taken and come up with single value out of them.
// ->In order to get single value out of multiple values reduce() function is used.




// eg:
//->finding sum of all the elements of the array.
//->finding maximum number in out of all elements in an array.

// eg-7:
//7.1 Writing code in non functional way
// const arr = [5, 1, 3, 2, 6];
// const sum = function arraySum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(sum(arr)); //Output:17

// 7.2 finding sum using reduce function.
// ->function inside reduce function takes two parameters.
// 1. accumulator
// 2. current
// eg-1:
// arr.reduce(function(acc,curr){

// });

// ->reduce iterates this function over each and evey elements of the array.
//1. current represents the vlaue of array inside reduce function.
//2. accumulator- which accumulates the result what we have to get.
// ->accumulator acts as sum variable
// ->Accumulator appending sum of current value to itself.
// ->Accumultor should be intialized with intial value.
// ->intial value for accumulator is passed as second argument for reduce function.
// ->accumulator is intialized with 0 in this program.

// eg:
// const arr = [5, 1, 3, 2, 6];
// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// },0);

// console.log(output);//17


// eg-8:find max number in array
//7.1 Writing code in non functional way
// const arr = [5, 1, 3, 2, 6];
// const sum = function arraySum(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(sum(arr));


// 7.2 finding maximum using reduce function
// const arr = [5, 1, 3, 2, 6];
// const output=arr.reduce(function(acc,cur){
//     if(cur>acc){
//         acc=cur;

//     }
//     return acc;
// },0);
// console.log(output); 

// Output:
// 6


//eg-9: tricky map()
// const users=[
//     {firstName:"Ashish",lastName:"PAul",age:24},
//     {firstName:"Naveen",lastName:"Kumar",age:24},
//     {firstName:"Ravi",lastName:"kanth",age:26},
// ];

//=>9.1 List of full name of all users
// ["Ashish Paul","Naveen Kumar","Ravi Kanth"]

// function userName(x){
//   return x.firstName+x.lastName;
// }
// const output=users.map(userName);
// console.log(output);

// or

// const output=users.map(function(x){
//     return x.firstName+x.lastName;
// });
// console.log(output);

// or
// const output=users.map((x)=>x.firstName+x.lastName);
// console.log(output);

// Output:
// ['AshishPAul', 'NaveenKumar', 'Ravikanth']


//eg-10: tricky reduce()
// ->finding how many people are there for particular age
// eg:
// {24:2,26:1}
// 2 members with age 24
// 1 member with age 26


// const users=[
//     {firstName:"Ashish",lastName:"Paul",age:24},
//     {firstName:"Naveen",lastName:"Kumar",age:24},
//     {firstName:"Ravi",lastName:"kanth",age:26},
// ];
// ->reduce will run the function on each of the values.

// const output=users.reduce(function (acc,cur){
//     if(acc[cur.age]){
//         acc[cur.age]=++acc[cur.age];
//     }
//     else{
//         acc[cur.age]=1;
//     }
//     return acc;
// },{});
// console.log(output);


// eg-1: Chaining map, filter & reduce
// ->filter firstname of the users whose age less than 30 using filter function
// const users = [
//     { firstName: "Ashish", lastName: "Paul", age: 24 },
//     { firstName: "Naveen", lastName: "Kumar", age: 41 },
//     { firstName: "Ravi", lastName: "kanth", age: 26 },
// ];

// const output=users.filter((x)=>{
// if(x.age<30){
//     console.log(x.firstName);
// }
// });
//  or

// const output = users.filter(x => x.age < 30).map(x=>x.firstName);
// console.log(output);

// Output:
// ['Ashish', 'Ravi']

// Homework - Challenge
// ->filter firstname of the users whose age less than 30 using reduce function

// const output = users.reduce(function (acc, cur) {
//     if (cur.age < 30) {
//         acc.push(cur.firstName);
//     }
//     return acc;

// }, []);
// console.log(output);

// Output:
// ['Ashish', 'Ravi']
// 11. setTimeout + Closures Interview Question 
// 1. Code Begins - Easy Question
// ->setTimeout function takes call back functions
// and time.
// ->function x () forms closure.
// ->whereever setTimeout goes it takes i along with it.
// ->setTimeout function takes the call back function and stores it in some place and attach timer to it.

// ->setTimeout function takes the call back function and stores it in some place and attach 3000ms timer to it and js proceeds to executiong things after setTimeout function.
// after completing 3 sec ot timer expires it takes the function and puts in call stack.
// ->js will not wait at setTimeout function but it executes next statement.

// eg-1:
// function x(){
//     var i=10;
//     setTimeout(function(){
//         console.log(i);
       
//     },3000);
//     console.log("Namste Javascript")
// }
// x();

//Output:
// Namste Javascript
// 10

// 2. How setTimeout actually works in JS
// ->setTimeout function takes the call back function and stores it in some place and attach 3000ms timer to it and after completing 3 sec ot timer expires it call backs the function.
// ->js will not wait for setTimeout function but it executes next statement.



// 3. Most asked Tricky JS Interview Question
// ->printing 1 after 1sec, 2 after 2sec...
// eg-1:
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namste js")
// }
// x();


// output:
// Namste js
// 6
// 6
// 6
// 6
// 6

// 4.  Importance of Closures
// ->even if function is taken out it still maintains it lexical scope.

// =>why 6 is printing 6 times?
// setTimeout function is takes call back functions and keep in othet place until timer get expires. after time expires it call back the function.
//->js will not wait for setTimeout to complete the execution. loop start executing and
//->by the time call back function is called i value becomes 6.
//->i is refering to same spot of memory or same value i=6.


// ->it remembers the reference to i.
// eg-1:
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namste js")
// }
// x();

// output:
// Namste js
// 6
// 6
// 6
// 6
// 6

// 4. solution to the problem
// ->by using let we can solve the problem.
// ->let has block scope.
// ->whenever loop runs each time i is new varaible altogether.
// ->each time setTimeout meothod is called function inside the setTimeout forms calls closure with it.
// ->copy i in each iteration is new.
// ->setTimeout forms closure with i for each iteration.
// ->it is working with let because let is blockscoped and it created new copy for every iteration.

// 5. Extension of the interview question
// ->if interviewer say only var is allowed to use.
// ->we use to closure to solve this problem.
// ->every time close function is called it creates a new copy of i.



// eg-1:
// function x(){
//     for(var i=1;i<=5;i++){
//         function close(newCopy){
//             setTimeout(function(){
//                 console.log(newCopy);
//             },newCopy*1000)
//         }
        
//         close(i);
//     }
//     console.log("Namaste js")
// }
// x();

// Output:
// Namaste js
// 1
// 2
// 3
// 4
// 5


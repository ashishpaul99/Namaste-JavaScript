// 1. How function invocation behaves behind the secens?
// ->We can invoke function before intializing them hust becuase of hoisting.

// eg-1:
// var x=1;
// a();
// b();
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x)
// }

// function b(){
//     var x=100;
//     console.log(x);
// }

// Output:
// 10
// 100
// 1

// =>How this code run behind the scene

// 1.  Before running the code.
// ->global execution context is created.

//  a. Exectuiton context
// Memory              |    Code
// x:undefined         |   
// a:function a(){     |
//     var x=10;       |
//     console.log(x)  |
// }                   |

// b:function b(){     |
//     var x=100;      |
//     console.log(x); |
// }


// b. Call stack
// 1. Whenever js code runs global execution context is created and put in call stack
// |               |
// |               |
// |               |
// |     GEC       |          
// |_______________|


// =>while executing

// a. Exectuiton context
// 1. intializing var x=10
// ->value 1 is given to varaible x.

// Memory              |    Code
// x:1                 |   var x=1
//                     |
//                     |       Memory                             |    Code        a() function exection context
// a:function a(){     |      X:undefined(B.E)-->x:10(A.E)        |  conosole.log(x)
//     var x=10;       |
//     console.log(x)  |
// }                   |

// b:function b(){     |      Memory                             |    Code        B() function exection context
//     var x=100;      |      X:undefined(B.E)-->x:100(A.E)      |  conosole.log(x)
//     console.log(x); | 
// }                   |

//                     |       console.log(x)

// 2. exectuin of function a()
// ->When function a() is invoked new exectuion context is created and pushed into call stack
// ->the value of x in function a() is printed on console.


// |               |
// |               |
// |      a()      |        
// |     GEC       |          
// |_______________|

// ->after prinitng x the whole execution context of function a() is deleted from call stack.
// |               |
// |               |
// |               |        
// |     GEC       |          
// |_______________|

// 3. exectuin of function b()
// ->When function b() is invoked new exectuion context is created and pushed into call stack
// ->the value of x in function b() is printed on console.

// |               |
// |               |
// |      b()      |        
// |     GEC       |          
// |_______________|

// ->after prinitng x in console the whole execution context of function b() is deleted from call stack.
// |               |
// |               |
// |               |        
// |     GEC       |          
// |_______________|

// 4. execution of console.log(x)
// ->here value x in global execution context is printed on console.

// ->After execution is completed whole call stack will be empty.
// |               |
// |               |
// |               |
// |               |          
// |_______________|


// Output:
// 10
// 100
// 1

// =>see how code call stack works in browser using debugger.
// ->every execution context maintains it's own space.







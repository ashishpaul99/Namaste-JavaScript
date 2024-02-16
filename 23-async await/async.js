// 23-async await  Date: 16/02/24 time:11:00 AM
// 1. Introduction
// ->topics to be covered.
// What is aync?
// what is await?
// how async await works behind the secnes?
// example of using async/await
// error handling
// interviews
// async await vs promises.then/catch


// 2. What is async in JS
// 2.1 Async
// ->async is keyword that is used before function to create a async function.
// ->async is a keyword used to create async function.
// ->async function always returns promise.
// eg-1:
// async function getData() {

// }

// 2.2 How it is different from normal function?
// ->this async function always returns a promise.
// ->by property of an async function it always returns promise.
// ->if not promise value is returned then the value is wrapped in promise and then promise will be returned.
// ->In any case it returns a promise.
// eg-1: returning a promise
// const pr = new Promise(function (resolve, reject) {
//     resolve("Promise resolved value");
// });
// async function getData() {
//     return pr;
// }

// // getting promise
// const dataPromise = getData();
// // printing promise
// console.log(dataPromise);

// // printing data of the promise
// dataPromise.then(function (response) {
//     console.log(response);
// });

// Output:
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Promise resolved value"
//  Promise resolved value


// eg-2: returning non promise value
// async function getData() {
//     return "Javascript";
// }

// // getting promise
// const dataPromise = getData();
// console.log(dataPromise);

// // getting data out of promise ->here "namaste string was the data in promise"
// dataPromise.then(function (response) {
//     console.log(response);
// });


// Output:
// Promise {<fulfilled>: 'Javascript'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Javascript"
// Javascript

// 2.3 Using await with async?
// ->async and await combo used to handle promises.
// ->Compare handling promises before async await and after async await.
// ->await is the keyword that can only be used in asyc function.

// 2.3.1 handling promises before async await
// ->it is handled by normal function

// eg-1:
// const p=new Promise(function(resolve,reject){
//     return resolve("Promise Resolved Value")
// });

// function getData(){
//     p.then(function(resolve){
//         console.log(resolve);
//     })
// }

// getData();

// Output:
// Promise Resolved Value

// 2.3.2 handling promises using  async await
// ->await keyword is used infront the promise that hase to be resolved.
// ->val -> contains the value of the resolved promise.
// eg-1:
// const p = new Promise((resolve, reject) => {
//     return resolve("Promise resolved value");
// })

// //
// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// }

// // calling async function
// handlePromise();

// Output:
// Promise resolved value


// 2.4 Definition of async and await
// 1. async is keyword that is used before function to create a async function.

// 2.await is the keyword that can only be used in asyc function.


// 3. Using Await with async
// ->difference between  handling promises normally and handling promises using async await.

// eg-1: handling promise using normal function
// ->resolving promise after sometime
// ->In this case Namaste Javascript prints first then setTimeout function executes after 10sec.
// ->In this case js will not wait for promise to resolved but it moves to next line.
// ->as soon as the handlePromise() function executed it will resgister promise and takes call back funtion and keep it seperately till it is resolved.
// js engine will not wait for promise to resolved it moves to the next line and it prints "Namaste Javascript"
// once promise is resolved it will log of resolved value which is in setTimeout function.


// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise is resolved")
//     }, 10000)
// })

// function handlingPromise() {

//     // js engine will not wait for promise to resolved it moves to the next line and it prints "Namaste Javascript"
//     p.then(function (res) {
//         console.log(res);
//     })

//     console.log("Namaste Javascript")
// }

// handlingPromise();

// Output:
// Namaste Javascript
// Promise is resolved



// eg-2:handling promise using async await

// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise is resolved")
//     }, 10000)
// })

// async function handlePromise() {
//     const val = await p;
//     console.log("Namaste Javascript");
//     console.log(val);
// }
// handlePromise();

// Output:
// Namaste Javascript
// Promise is resolved


// 4. Diving deep into async/await
// ->In this case after 10sec "Namaste Javascript" prints first then  Promise is resolved printed.
// ->code waiting at await p until promise get resolved.
// -> js engine was waiting for promise to resolved and it will go to the next line only after 10sec once await get value.
// ->In this case js will wait for promise to get resolved then it goes to the next line.

// eg-1:

// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise is resolved")
//     }, 10000)
// })

// async function handlePromise() {
//     // js engine was waiting for promise to resolved
//     const val = await p;
//     console.log("Namaste Javascript");
//     console.log(val);
// }
// handlePromise();

// Output:
// Namaste Javascript
// Promise is resolved

// eg-2: What if we have another console log above await p
// ->In this case line above the await prints immediately and at line await p js engine waits for promise to get resolved. once promise get resolved "Namaste Javascript" printed first then "Promise is resolved" get printed.

// ->async await waits at particular line of code.

// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise is resolved")
//     }, 10000)
// })

// async function handlePromise() {

//     console.log("Above await")
//     const val = await p;
//     console.log("Namaste Javascript");
//     console.log(val);
// }
// handlePromise();

// eg-3:resolving promise two times.
// ->In this case after 10sec both the promises were resolved.

// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise is resolved")
//     }, 10000)
// })

// async function handlePromise() {

//     console.log("Above await")
//     const val1 = await p;
//     console.log("Namaste Javascript 1");
//     console.log(val1);

//     const val2 = await p;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
// }
// handlePromise();

// Ouput:
// Above await
// Namaste Javascript 1
// Promise is resolved
// Namaste Javascript 2
// Promise is resolved

// eg-4:creating two promises
// ->p1 is 10sec
// ->p2 is 5sec

// ->In this case first "Above await" after 10sec everything get printied.
// ->Promise p2 is resolved after 5sec but still it has to wait to p1 which is resolved after 10sec.
// ->After resolving both promises everything get printed.
// ->async function is waiting for all the promises to get resolved.


// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-1 is resolved")
//     }, 10000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-2 is resolved")
//     }, 5000)
// })


// async function handlePromise() {

//     console.log("Above await")
//     const val1 = await p1;
//     console.log("Namaste Javascript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
// }

// handlePromise();

// Output:
// Above await
// Namaste Javascript 1
// Promise-1 is resolved
// Namaste Javascript 2
// Promise-2 is resolved

// eg-5:
// ->In this case p1 takes 5sec and p2 takes 10secs.
// ->In this case p1 is resolved first and result will be printed after 5sec and p2 is resolved after 10sec and result will be printed after 10sec.
// ->when order is resversed the behaviour is changed completely

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-1 is resolved")
//     }, 5000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-2 is resolved")
//     }, 10000)
// })


// async function handlePromise() {

//     console.log("Above await")
//     const val1 = await p1;
//     console.log("Namaste Javascript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
// }

// handlePromise();

// // Output:
// Above await
// Namaste Javascript 1
// Promise-1 is resolved
// Namaste Javascript 2
// Promise-2 is resolved


//=>4.1 Conclusion
// ->Actually In above cases js engine is not waiting for promises to get resolved.
// ->it look like js engine is waiting 
// ->js engine is appears to be waiting here.
// ->js engine is not consuming any memory here.
// ->it is not occupied the call stack.
// ->if it waits webpage get frozen.

//4.2 How this code works when async function used?
// ->when function get executed it will go line by line.
// ->js is single threaded language.


// 4.2.1 see what happens behind scenes
// ->see the call stack
// ->Put a debugger above line await p1, below p1 and below p2.
// ->call stack is where every function get executed.
// ->When handlePromise() function is called it sees two promises which needs to be resolved. these promise are taking there own time for resolving.
// ->these are async Promises -> p1,p2
// ->Intially call stack is empty.
// ->as soon as handlePromise() function is called it comes inside call stack.


// =>Resolving Promise p1
// ->it starts executing handlePromise function line by line.
// ->In this case it prints "Above await" string first.
// ->At line const val1=await p1 js will not wait for promise to resolved but handlePromise() execution will suspend for the time and it handlePromise() execution context moves out of call stack. 
// ->after suspending it will wait till p1 get resolved then it will move ahead. In this case p1 will resolved after 5sec. 
// ->after 5 sec handlePromise() function again comes inside call stack and again start execution but it will start executing from where it left. 
// ->it starts executing line after await p1 which is
// console.log("Namaste Javascript 1");
// console.log(val1);
// ->After resolving p1 it goes to p2 and sees wheather it resolved or not.
// ->it again suspend the execution of handlePromise() function and it will move out of call stack.

// =>Resolving Promise p2
// ->Once promise p2 is resolved after 10sec now handlePromise() again comes to call stack and it starts executing from the place it left execution that is line  " console.log("Namaste Javascript 2");".

// ->here handlePromise() execution context will not the block the main thread or freeze the webpage if other events are happening they will execute in call stack.
// ->here when promise is not resolved then execution handlePromise() function is suspended.

// // eg-1:
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-1 is resolved")
//     }, 5000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-2 is resolved")
//     }, 10000)
// })


// async function handlePromise() {

//     console.log("Above await")
//     const val1 = await p1;
//     console.log("Namaste Javascript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
// }

// handlePromise();

// Output:
// Above await
// Namaste Javascript 1
// Promise-1 is resolved
// Namaste Javascript 2
// Promise-2 is resolved



// 5. Behind the scenes of async await

// ->In this case "console.log("Above await")" prints immedaitely after calling function.
// ->handlePromise() function saw p1 is not resolved yet. here p1 takes 10 sec to get resolved. 
//->then handlePromise() execution context moves out of call stack and it will wait for p1 to be resolved.
// ->p1 will resolved after 10sec.
// ->js was synchronous language. p2 resolved already.
// but js engine waits p1 to be resolved then only it will go to line "const val2 = await p2;".
// ->after 10sec handlePromise() function moves to call stack and executes from where it left(at line "console.log("Namaste Javascript 1")"
// ->after p1 resolved then it goes to promise p2.
// ->p2 was already resolved. it was resolved before p1. all the lines after p2 will be printed after 10sec.
// ->these how async function execution works.
// ->here main thread is not blocked by handlePromise() function execution context.
// ->when promises are not resolved then handlePromise() function will get suspended from call stack. it comes into call stack when promises get resolved.

// ->debug the code by pointing before promise and after promises p1 and p2.

// eg-1:
// ->p1 takes 10sec and p2 takes 5sec
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-1 is resolved")
//     }, 5000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise-2 is resolved")
//     }, 10000)
// })


// async function handlePromise() {

//     console.log("Above await")
//     const val1 = await p1;
//     console.log("Namaste Javascript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
// }

// handlePromise();

//6. Real world examplese of async/await
// ->making api call using fetch function.
// ->fetch function makes api call.
// ->go to api.github.com
// ->use user url -> https://api.github.com/users/{user}
// ->https://api.github.com/users/ashishpaul99
// ->it gives information of user.
// ->make api call to above url.

// 6.1 How fetch function or API works?
// ->fetch() function returns promise.
// ->fetch returns a response.
// ->fetch function is promise when it is resolved it gives response object.
// ->Response object has a body which is in readable stream.
// ->for converting readable stream to json 
// fetch()----> Response.json() ==>result(json value)
// ->.json is again a promise.
// ->when it resolved it gives the result.
// ->After promise resolved the data whatever data we got is stored in variable.


// Code explaination
// ->handlePromise() function start executing await over here.
// ->it waited promise to be resolved.
// ->In network we will how much time fetch api took to resolve the promise. it took 464ms for resolving promise.
// ->handlePromise() function will be suspended at line " const data=fetch(API_URL);". it waited for 464ms and resumed its execution.
// ->handlePromise() function will resume only after fetch call has been successfully fullfilled.
// ->once promise resolved then handlePromise()function exectuiton resumes.
// ->once fetch promise was resolve then it moves to data.json to get resolved.
// ->here data will get result(Response object).
// ->Response body is converted into json.
// ->it can be converted into string or text.
// ->data.json got resolved then we will get json value then it logged to console.


// eg-1:
// const API_URL = "https://api.github.com/users/ashishpaul99";
// async function handlePromise() {

//     // reciving Response object from fetch() API
//     const data = fetch(API_URL);

//     // converting readable stream(Response object ) to json (json value)
//     const jsonValue = await (await data).json();
//     console.log(jsonValue);

//     // alter above code
//     // fetch().then(res=>{
//     //     res.json
//     // }).then(res=>{
//     //     console.log
//     // })

// }
// handlePromise();

// Output:
// {login: 'ashishpaul99', id: 63112090, node_id: 'MDQ6VXNlcjYzMTEyMDkw', avatar_url: 'https://avatars.githubusercontent.com/u/63112090?v=4', gravatar_id: '', …}

// 7. Error Handling in async/await
// 7.1 handling error using try/catch block
// ->In normal promises in order to handle errors catch method is used.
// ->In async/await we use try/catch method to handle errors.
// ->where async await is there wrap it inside try block the there is catch whihc takes error.
// ->if api call is successful then try block will be executed.
// ->if api url is invalid then it gives error. program jumps to catch block.
// ->we can handle error in catch block.

// eg-1:
// const API_URL = "http://invalidurl";
// async function handlePromise() {

//     // reciving Response object from fetch() API
//     try {
//         const data = fetch(API_URL);
//         const jsonValue = await (await data).json();
//         console.log(jsonValue);
//     } catch (err) {
//         console.log(err);
//     }


// }
// handlePromise();

// Output:
// GET http://invalidurl/ net::ERR_NAME_NOT_RESOLVED
// TypeError: Failed to fetch
//     at handlePromise (async.js:538:22)
//     at async.js:547:1


// =>7.2 handling error using catch method(traditional method)
// ->handlePromise() function is async function and it returns promise.
// ->.catch() is attached to promise to handle error.
// eg-2:
const API_URL = "http://invalidurl";
async function handlePromise() {

    // reciving Response object from fetch() API
    try {
        const data = fetch(API_URL);
        const jsonValue = await (await data).json();
        console.log(jsonValue);
    } catch (err) {
        console.log(err);
    }


}
handlePromise().catch((err) => console.log(err));

// Output:
// GET http://invalidurl/ net::ERR_NAME_NOT_RESOLVED
// TypeError: Failed to fetch
//     at handlePromise (async.js:566:22)
//     at async.js:575:1

// 8. interview Tips
// 1. What is async await?
// ->async is keyword used with function.
// ->await can be used only in async function to handle promises.
// ->promises are asynchronous.
// ->tell the interviewer about behind the scene of async await.

// 9. async await vs promise then/catch
// ->async await is syntactic sugar over then/catch.
// ->behind the scene js used then/catch only.
// ->only effect happending in the code how it is coded.
// ->both are better.
// ->async await is new of writing code.
// ->async/await make sense to use.
// ->no need to do promise chaining when async await is used.
// ->it makes easier to read.





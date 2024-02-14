// 21-Creating a Promise, Chaining & Error Handling
// 1. Introduction
// ->Creating a promise
// ->Handling errors inside promises
// ->Promise chaining

// 2. Consuming Promises
// 1. creating Order
// 2. Proceed to payment
// 3. show order summary
// 4. update wallet

// eg-1:
// const cart = ["shoes", "pants", "kurtha"];

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//     return proceedToPayment(orderId);
// });

// ->createOrder api is async operation it returns promise.
// ->callback function is attached to promise. that function call the proceedToPayment function.

// 3. Creating a Promise
// ->How does createOrder() and return promise.
// ->developer will write createOrder api.
// ->creating new promise and send to new consumer.
// ->write own create order function.


// =>creating promise
// ->new keyword is used to create a promise.
// ->it is promise constructor
// ->Promise constructor will take two paramenters.
// 1. resolve
// 2. Reject
// ->this the way to create promise.
// ->resolve and reject are the functions which are given by javascript to build promises.
// ->if we invoke this constructor using new keyword and passing function over here with resolve and reject paramere. now we can return this promise.
// ->Inside promise writing logic of handling whatever we need to do inside createOrder() function.
//createOrder
//validateCart
//make api call to create an order
// orderId will be retuned. that will returned as success
// success would be returning an order
// failure would be through an error

// eg-1:
// const cart = ["shoes", "pants", "kurtha"];

// // Consuming promise
// const promise = createOrder(cart);
// console.log(promise);

// promise.then(function (orderId) {
//     console.log(orderId);
//     //  proceedToPayment(orderId);
// });

// // creating promise
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //createOrder
//         //validateCart
//         // orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for creating order
//         const orderId = "12345";
//         if (orderId) {

//             // resolving the promise after 5sec
//             setTimeout(function(){
//                 resolve(orderId);
//             },5000);

//         }

//     });

//     return pr;
// }

// // defining validate cart

// function validateCart(cart) {
//     //logic for checking wheather cart is empty  or checking what it contains more

//     return true;

// }

// Output:12345


//=>Code Explaination
//-> createOrder api is created.once it is called it will just create promise and return it.
//->we creator of the api have two things to do
// 1. we get cart items
// 2. we can resolve or approve and reject the promise.
// ->promise can be rejected or resolved.
// ->if cart is validated then promise will be resolved.
// ->if cart is not validated then promise will be rejected and error is thrown
// ->after write logic for creating order id.
// ->if orderId is valid then promise will be resolved.
// ->promise either be fullfilled or resolve and rejected.

// 4. Promise Rejection
// ->rejecting promise
// ->if cart is not valid then promise will be rejected.



// eg-1:
// const cart = ["shoes", "pants", "kurtha"];

// // Consuming promise
// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     console.log(orderId);
//     //  proceedToPayment(orderId);
// });

// // if promises is rejected then this will be executed
// // promise.catch(function(err){
// //     console.log("Cart is not valid");
// // })

// // creating promise
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //createOrder
//         //validateCart
//         // orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for creating order
//         const orderId = "12345";
//         if (orderId) {

//             // resolving the promise after 5sec
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }

// // defining validate cart
// function validateCart(cart) {
//     //logic for checking wheather cart is empty  or checking what it contains more

//     return false;

// }

// Output:
// Promise {<rejected>: Error: Cart is not valid
//     at http://127.0.0.1:5500/21-Creating%20a%20Promise,%20Chaining%20and%2…}

// 5. Error Handling
// ->error handling is not done in above code.
// ->developer should handle errors.
// ->if this code pushes to production this will fail in users computer and user silently get error in ther browser console.
// ->developer should always gracefully handle the errors.
// ->while creating promise or consuming promise catch statement should be written.
// ->for validation fail code is written using catch function.
// ->promises also had catch() function to handle this errors. it is just like then function. it can also attached failure callback to it. so that promise object can also attached with failure callback as well.
// ->if promise fails then failure callback will be invoked.

// 5.1 if promise is resolved then function which returns will be called.
// eg:
// promise.then(function (orderId) {
//     console.log(orderId);
//     //  proceedToPayment(orderId);
// });

// 5.2 if promise is rejected then failure callback is called.
// eg:
// promise.catch (function(err) {
//   console.log("Cart is not valid");
// });



// eg-1:
// const cart = ["shoes", "pants", "kurtha"];

// // Consuming promise
// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     console.log(orderId);
//     //  proceedToPayment(orderId);
// });

// // if promises is rejected then this will be executed
// promise.catch(function (err) {
//     console.log("Cart is not valid");
// })

// // creating promise
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //createOrder
//         //validateCart
//         // orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for creating order
//         const orderId = "12345";
//         if (orderId) {

//             // resolving the promise after 5sec
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }

// // defining validate cart
// function validateCart(cart) {
//     //logic for checking wheather cart is empty  or checking what it contains more

//     return false;
// }

// Output:
// Cart is not valid


// 6. Promise Chaining
// ->After order is created then it proceeds to payement page.
// ->taking proceed to payment in picture.
// ->createOrder api creates order and returns orderId.
// ->with orderId it proceeds to payment.
// ->proceedToPayment returns promise.

// eg-1:
// const cart = ["shoes", "pants", "kurtha"];

// // Consuming promise
// createOrder(cart).then(function (orderId) {
//     console.log(orderId);
//     //  proceedToPayment(orderId);
// }).then(function (orderId) {
//     proceedToPayment(orderId);
// }).catch(function (err) {
//     console.log("Cart is not valid");
// });

// // creating createOrder api
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //createOrder
//         //validateCart
//         // orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for creating order
//         const orderId = "12345";
//         if (orderId) {

//             // resolving the promise after 5sec
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }


// // creating proceedToPayment api
// function proceedToPayment(orderId) {
//     return new promise(function (resolve, reject) {
//         resolve("Payment Successfull");
//     });
// }

// // defining validate cart
// function validateCart(cart) {
//     //logic for checking wheather cart is empty  or checking what it contains more

//     return false;
// }


// 7. Advanced Promise Chaining
// eg-1:
// const cart = ["shoes", "pants", "kurtha"];

// // Consuming promise
// createOrder(cart).then(function (orderId) {
//     console.log(orderId);
//     // returning orderId to proceedToPayment() function
//     return orderId;

// }).then(function (orderId) {

//     // returning promise
//     return proceedToPayment(orderId);
// }).then(function (paymentInfo){
//       console.log(paymentInfo);
// }).catch(function (err) {
//     console.log("Cart is not valid");
// });

// creating createOrder api
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //createOrder
//         //validateCart
//         // orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for creating order
//         const orderId = "12345";
//         if (orderId) {

//             // resolving the promise after 5sec
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

//     return pr;
// }

// // creating proceedToPayment function
// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve("Payment Successful");
//     });
// }

// // defining validate cart
// function validateCart(cart) {
//     //logic for checking wheather cart is empty  or checking what it contains more

//     return true;
// }

// Output:
// 12345
// Payment Successful





// =>Code exeplaination
// ->response of proceedToPayment function will be passed to next call back function of this chain.
// ->whenever chaining thing we need to returning things from one chain to other.
// ->orderId shoul be retruned and it is recieved by
// proceedToPayment. 
// ->we can return any data or promise that can be resolved.
// ->"proceedToPayment" retruned to next chain and it is attached to it. function taking paymentInfo and proceedToPayment are attached.
// ->whenever we have promise like this we have to handle it next level of the chain.
// ->promises are returned an handled it in next level of the chain.
// eg:
// createOrder(cart).then(function (orderId) {
//     console.log(orderId);
//     // returning data
//     return orderId;
//     //  proceedToPayment(orderId);
// }).then(function (orderId) {
//     // retunring promise
//     return proceedToPayment(orderId);
// }).then(function (paymentInfo) {
//     console.log("Payment Successful");
// }).catch(function (err) {
//     console.log("Cart is not valid");
// });

// alter ->above code can be written like this. it results in promise hell.
// createOrder(cart).then(function (orderId) {
//     console.log(orderId);
//     // returning data
//     return orderId;
//     //  proceedToPayment(orderId);
// }).then(function (orderId) {
//     // retunring promise
//     return proceedToPayment(orderId).then(function(){
//            console.log(paymentInfo);
//     })
// }).catch(function (err) {
//     console.log("Cart is not valid");
// });

// ->Promise api designed to not to fall into callback hell or pyramid of doom.


// 8. Advanced Error Handling
// => what if cart validation is false and wanted to proceed to payment.
// ->if any of the step fail then everything will be failed.
// ->keep the catch after createOrder api. then catch will have resposibility only to check createOrder api.
// ->errors handled successfully in this case.
// ->Whenever catch statement is present then whatever happens after the catch will be executed.
// ->catch handles all the errors before catch. 
// ->for handling error of each function create catch for each function.
// ->we can also have generic catch.



// eg-2:
// creating createOrder api
const cart = ["shoes", "pants", "kurtha"];

// Consuming promise
createOrder(cart).then(function (orderId) {
    console.log(orderId);
    // returning orderId to proceedToPayment() function
    return orderId;

}).catch(function (err) {
    console.log("Cart is not valid");
}).then(function (orderId) {

    // returning promise
    return proceedToPayment(orderId);
}).then(function (paymentInfo) {
    console.log(paymentInfo);
}).then(function (orderId) {
    console.log("No matter what I will called after catch")
}).catch(function (err) {
    console.log(err);
});

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //createOrder
        //validateCart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // logic for creating order
        const orderId = "12345";
        if (orderId) {

            // resolving the promise after 5sec
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}



// creating proceedToPayment function
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}

// defining validate cart
function validateCart(cart) {
    //logic for checking wheather cart is empty  or checking what it contains more

    return false;
}

// Output:
// Cart is not valid
// Payment Successful


// 9. Homework for this episode
// ->all are async functions
// createOrder
// proceedToPayment
// showOrderSummary
// updateWalletBalance
// ->we have to create promise chain. these 4 things happen one by one.
// ->all these will return a promise.
// ->handle error.


createOrder(cart).then(function(){
    setTimeout(function(){
    console.log("error")
    },50000)
})



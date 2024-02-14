// 19-Callback Hell  Time:6:21PM  Dt:5/2/24
// -> How callbacks are important while writing asynchtonous code in js?
// ->Callbacks let's us to face issues.
// 1. Callback hell
// 2. Inversion of control

// ->Js is single threaded language. it can do one thing at a time.
// ->it has just one call stack. it can execute one thing at a time.
// ->whatever code given to js engine it executed quickly. it does not wait for anything.
// eg-1:
// console.log("Start")
// setTimeout(function(){
//     console.log("setTimeout")
// },5000);
// console.log("End");

// Output:
// Start
// End
// setTimeout


// 1. Callback functions
// ->using call back is powerful way to do asynchronous thing in js.
// ->we can take piece of code in a function and we can pass it as call back which can be executed later point of time.

// eg-2:
// 1. create an order
// 2. Payment
// 3. Order Summary
// 4. Update Wallet

// ->we use two backend api's
// ->we have use createOrder api
// ->Then we can proceed to payment.
// ->it is resposible of createOrder api to create a order and to call the call back function back once the order id is created.
// ->after payment is successful summary order id should be displayed.
// ->now it is resposibility proceedToPayment api to complete the payment and call the showOrderSummary  back.

// 2. Update Wallet
// ->after order summary wallet has to be updated by walletUpdate api.
// eg-1:
// const cart = ["shoes", "pants", "kurta"];
// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet();
//         })
//     });
// }
// );

// ->when we have large codebase there are so many api's and api's are dependent on after the other. in this case we may end up into falling into call back hell.
// ->code starts grow horizontally instead of vertically.

// 3. Callback hell(13:01)
// ->call back function inside another call function and multiple api's inside function will cause this call back hell.
// ->this type of code structure is unreadable and unmaintainable.
// ->this structure is called pyramid of DOOM

// eg-1:
// const cart = ["shoes", "pants", "kurta"];
// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet();
//         })
//     });
// }
// );


// 5. Inversion of control(13:10)
// ->inversion of control is another problem while we use call backs.
// ->loose control of the code when we are using call backs.
// eg-1:
// const cart = ["shoes", "pants", "kurta"];
// api.createOrder(cart, function () {
//     api.proceedToPayment();
// });

// ->we creating an order.
// ->proceedToPayment() api is given to creater order api.
// ->we are blindly trustinf create order api.
// ->we are expecting that createOrder api creates order and call orocessToPayment function. it is very risky.
// ->we don't wheather code is written whom or it is in other service.
// ->What if call back function never called.
// ->what if call back function called twice.
// ->whenever we have call function and pass it to some other function means we are giving control of our piece code to other piece of code. we don't know what happens behind the scenes.

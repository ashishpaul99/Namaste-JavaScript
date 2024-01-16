var a=10;   // Inside global space
function b(){
    var x=100;  //it is not in global space
    console.log(x);
}
console.log(window.a); //10
console.log(a);       //10
console.log(this.a);  //10
console.log(this.b()) //100
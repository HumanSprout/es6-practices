// Exercise 1: Write an arrow function that returns the string 'Hello World!'.

let func = () => {
    return "Hello World!"
}

// Exercise 2: Write an arrow function that expects an array of integers, and returns the sum of the elements of the array. Use the built-in method reduce on the array argument.

let reduceIt = (arr) => arr.reduce((a,b) =>  a + b )


// Exercise 3: Rewrite the following code by using arrow functions wherever it makes sense to use them:

/*
var Entity = function( name, delay ) {
  this.name = name;
  this.delay = delay;  
};
 
Entity.prototype.greet = function() {
    setTimeout( function() {
        console.log( 'Hi, I am ' + this.name );
    }.bind( this ), this.delay );
};
 
var java = new Entity( 'Java', 5000 );
var cpp = new Entity( 'C++', 30 );
 
java.greet();
cpp.greet();
*/

let Entity = function( name, delay ) {
    this.name = name 
    this.delay = delay
}

Entity.prototype.greet = function() {
    setTimeout( () => {
        console.log( 'Hi, I am ' + this.name)
    }), this.delay
}

let java = new Entity( 'Java', 5000);
var cpp = new Entity( 'C++', 30 )

java.greet()
cpp.greet()
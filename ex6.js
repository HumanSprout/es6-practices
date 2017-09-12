// Exercise 1. Make a shallow copy of an array of any length in one destructuring assignment! If you don’t know what a shallow copy is, make sure you read about it, as you will need these concepts during your programming career. I can highly recommend my article on Cloning Objects in JavaScript.

let arr = [1,2];

let [...copy] = arr;

console.log(copy)

// Exercise 2: Determine the value logged to the console on Google Chrome without running it. Write down the mechanism behind it using your own words.

let f = () => [..."12345"];

let A = f().map( f );

console.table( A );
 
// Exercise 3. Create an 10×10 matrix of null values.

// Exercise 4. Rewrite the sumArgs function of this tutorial in ES2015, using a rest parameter and arrow functions.


function sumArgs() {
    var result = 0;
    for( var i = 0; i < arguments.length; ++i ) result += arguments[i];
    return result;
}
 
function sumArgs() {
    var result = 0;
    for( var i = 0; i < arguments.length; ++i ) result += arguments[i];
    return result;
}
 
// Exercise 5. Complete the following ES2015 function that accepts two String arguments, and returns the length of the longest common substring in the two strings. The algorithmic complexity of the solution does not matter.



let maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) => {
    if ( typeof head1 === 'undefined' || typeof head2 === 'undefined' ) /* Write code here */
    if ( head1 === head2 ) /* Write code here */
    let firstBranch = /* Write code here */
    let secondBranch = /* Write code here */
    return Math.max( ...[len, firstBranch, secondBranch ] );
}

maxCommon( '123', '1' );
// 1

maxCommon( '11111', '11f111g');
// 3

maxCommon( 'abc', '111cab' );
// 2
 
let maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) => {
    if ( typeof head1 === 'undefined' || typeof head2 === 'undefined' ) /* Write code here */
    if ( head1 === head2 ) /* Write code here */
    let firstBranch = /* Write code here */
    let secondBranch = /* Write code here */
    return Math.max( ...[len, firstBranch, secondBranch ] );
}
 
maxCommon( '123', '1' );
// 1
 
maxCommon( '11111', '11f111g');
// 3
 
maxCommon( 'abc', '111cab' );
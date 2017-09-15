// Exercise 1. Make a shallow copy of an array of any length in one destructuring assignment! If you don’t know what a shallow copy is, make sure you read about it, as you will need these concepts during your programming career. I can highly recommend my article on Cloning Objects in JavaScript.

let arr = [1,2];

let [...copy] = arr;

console.log(copy)

// Exercise 2: Determine the value logged to the console on Google Chrome without running it. Write down the mechanism behind it using your own words.

let f = () => [..."12345"];

let A = f().map( f );

console.log( A );

// it transformed each element of the returned array of f into an array of the same values
// for each element of the functor being mapped (in this case the array returned from f), it invokes the function
 
// Exercise 3. Create an 10×10 matrix of null values.

let nulls = () => new Array(10).fill( null )

let matrix = nulls().map( nulls )

// Exercise 4. Rewrite the sumArgs function of this tutorial in ES2015, using a rest parameter and arrow functions.


/*function sumArgs() {
    var result = 0;
    for( var i = 0; i < arguments.length; ++i ) result += arguments[i];
    return result;
}*/
 
let sumArgs = (...args) => {
    return args.reduce( (total, arg) => {
        return total + arg
    })
}

// Exercise 5. Complete the following ES2015 function that accepts two String arguments, and returns the length of the longest common substring in the two strings. The algorithmic complexity of the solution does not matter.


//official answer

let maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) => {
    if ( typeof head1 === 'undefined' || typeof head2 === 'undefined' ) return len;
    if ( head1 === head2 ) return maxCommon( tail1, tail2, len+1)
    let firstBranch =  maxCommon( tail1, [head2, ...tail2], 0)
    let secondBranch = maxCommon( [head1, ...tail1], tail2, 0);
    return Math.max( ...[len, firstBranch, secondBranch ] );
}

console.log( maxCommon( '123', '1' ) )
// 1

console.log( maxCommon( '11111', '11f111g') )
// 3

console.log( maxCommon( 'abc', '111cab' ) )
// 2
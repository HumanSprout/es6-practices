//Exercise 1. Write a function that executes a callback function after a given delay in milliseconds. The default value of delay is one second.

let daleyedFunc = (callback, delay = 1000) => {
    setTimeout(callback(), delay)
}

//Exercise 2. Change the below code such that the second argument of printComment has a default value that’s initially 1, and is incremented by 1 after each call.

/*function printComment( comment, line ) {
    console.log( line, comment );
}
*/

let lineNumber = 1;
 
function printComment( comment, line = lineNumber++ ) {
    console.log( line, comment );
}

// better solution:
/*
let lineNumber = 0;
 
let getLineNumber = function() {
    lineNumber += 1;
    return lineNumber;
}
 
function printComment( comment, line = getLineNumber() ) {
    console.log( line, comment );
}*/


//Exercise 3 Determine the values written to the console.

/*function argList( productName, price = 100 ) {
    console.log( arguments.length ); // 1
    console.log( productName === arguments[0] ); // true
    console.log( price === arguments[1] ); // false
};
 
argList( 'Krill Oil Capsules' );*/
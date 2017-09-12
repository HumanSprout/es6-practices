"use strict"

// Exercise 1. Swap two variables using one destructuring assignment.

let a = 1, b = 2;

[a, b] = [b, a];

console.log(a) // 2
console.log(b) // 1

// Exercise 2. Complete the below function that calculates the nth fibonacci number in the sequence with one destructuring assignment! The definition of Fibonacci numbers is the following:

// fib( 0 ) = 0
// fib( 1 ) = 1
// fib( n ) = fib( n-1 ) + fib( n-2 );

function fib( n ) {
    let fibCurrent = 1;
    let fibLast = 0;  
 
    if ( n < 0 ) return NaN;
    if ( n <= 1 ) return n; 
 
    for ( let fibIndex = 1; fibIndex < n; ++fibIndex ) {
        // Insert one destructuring expression here
        [fibLast, fibCurrent] = [fibCurrent, fibCurrent + fibLast]
    }
 
    return fibCurrent; // 1 1 2 3 5 8 13 etc...
}

// Exercise 3. Determine all the bindings in the following assignment, and describe the execution of the destructuring assignment. Notice that loft is not the same variable name as left.

let node = { left : { left: 3, right: 4 }, right: 5 };
 
let { loft, right : val } = node; // error thrown as loft is not defined

// Exercise 4. Create one destructuring expression that declares exactly one variable to retrieve x.A[2].


let x = { A: [ 't', 'e', 's', 't' ] };

let { A : [ , , y ] } = x; // y=s

// Exercise 5. Suppose the following configuration object of a financial chart is given (see: config)

//Complete the function signature below such that the function may be called with any config objects (null and undefined are not allowed as inputs). If any of the four keys are missing, substitute their default values.

// Exercise 6. Modify your solution in Exercise 5 such that the user may omit the option parameter, making its value undefined.

let config = {
    chartType : 0,
    bullColor : 'green',
    bearColor : 'red',
    days      : 30
};

function drawChart(data, {
        chartType = 0,
        bullColor = 'green',
        bearColor = 'red',
        days = 30 } = {} ) {
    // do not implement the function body
    console.log( chartType, bullColor, bearColor, days );
};

drawChart( [], {} ); // 0, green, red, 30
drawChart( [], { chartType: 1, days: 60 } ); // 1, green, red, 60
drawChart( [] ) // 0, green, red, 30
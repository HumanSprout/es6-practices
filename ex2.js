// Exercise 1: Check the following riddle:

 /*
'use strict';
 
var guessMe1 = 1;
let guessMe2 = 2;
 
{
    try {
        console.log( guessMe1, guessMe2 ); // (A) // undefined
    } catch( _ ) {}
 
    let guessMe2 = 3;
    console.log( guessMe1, guessMe2 ); // (B) // 1 3
}
 
console.log( guessMe1, guessMe2 ); // (C) // 1 2
 
() => {
 
    console.log( guessMe1 ); // (D) // never called
    var guessMe1 = 5;
    let guessMe2 = 6;
    console.log( guessMe1, guessMe2 ); // (E) // never called
};
 
console.log( guessMe1, guessMe2 ); // (F) // 1 2 
*/



// Exercise 2: Modify the code such that all six console logs print out their values exactly once, and the printed values are the following

'use strict';
 
var guessMe1 = 1;
let guessMe2 = 2;
 
{
    let guessMe2 = 3;
    console.log( guessMe1, guessMe2 ); // (A)
    console.log( guessMe1, guessMe2 ); // (B)
}
 
console.log( guessMe1, guessMe2 ); // (C)
 
(() => {
    var guessMe1 = 5;
    let guessMe2 = 6;
    console.log( guessMe1 ); // (D)
    console.log( guessMe1, guessMe2 ); // (E)
} )();
 
console.log( guessMe1, guessMe2 ); // (F)
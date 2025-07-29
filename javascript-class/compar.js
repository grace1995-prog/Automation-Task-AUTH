//let isloggedIn = true,hasPermission = false;
//using && AND Operator
//console.log(isloggedIn && hasPermission)
// AND operator -both valuses or all values must be true
let a =2,b= 9,c =15
let z =2 < 9;
let p = 9 > 2;
console.log(z && p );

// OR OPERATOR-at least one of the value must be true
let isloggedIn = true,hasPermission = false;

console.log(isloggedIn || hasPermission)

//conditional ternary operator

let age = 10
let message = (age >= 10) ?"you are a minor": "you are a baby"
console.log(message)

//let val;
//let firstname;
firstname = "Grace Eze"
val = "Mfonma";
// console.log(val);
val = firstname.length
// console.log(val);
val = firstname[3]
// console.log(val);

// String methods at glance

//val = firstname.indexOf("e") // indexof will only check for the first occuring value.
console.log(val);
//val = firstname.lastIndexOf("E") // lastIndexOf will print the last occurence
console.log(val);

// * Similarities between [indexOf] and [lastIndexOf] -> they are both case sensitive.

let val;
let firstname = "ibraheemomikunle";
val = firstname

val = firstname.length;
// console.log(val);

val = firstname.charAt(firstname.length - 1);
console.log(val);


                    // "i b r a h e e m o m i  k  u  n  l  e"
                    //  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15




                    // "i b r a h e e m o  m i  k  u  n  l  e"
                    //  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16


// ** SubString , extracting part of a string.

/**
// * it start from 0, it has start and end parameter
// * the last character is always excluded.

*/

                    // "i b r a h e e m o m i  k  u  n  l  e"
                    //  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

                    val = firstname.substring(7, 12); // momik
                    console.log(val);
                    
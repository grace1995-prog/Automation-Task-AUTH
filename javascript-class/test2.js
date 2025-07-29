
//Declare a variable userName and assign it the value "Frank".

let userName = "Frank"
//Declare a constant userSurname and assign it the value "Smith".
const userSurname =" Smith"
//Declare a constant userAge and assign it the value 35.
const age = 35
//Use concatenation to create a new variable userFullName which 
//combines userName and userSurname with a space in between
let userFullName =  userName + userSurname
console.log(userFullName)
//Calculate the length of the userFullName string and 
//store it in a variable called fullNameLength.
let fullNameLength = userFullName.length
console.log(fullNameLength)
//Implement logical AND (&&) and OR (||) operators using variables isOldEnough and hasAccess
let isOldEnough = true, hasAccess = false;
console.log(isOldEnough && hasAccess)

//let isOldEnough = true,hasAccess = false;

console.log(isOldEnough || hasAccess)

const airline = 'TAP Nigeria AirWays'; // 19
console.log(airline.slice(10, airline.indexOf(' ')));
console.log(airline.slice(0,6));
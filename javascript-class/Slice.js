// const test1 = 'ibraheem';
// console.log(test1.indexOf('e', 1))

// const x = "100";
// const y = "10";


// * [+] operator doesnt perform any mathematical operation,
// * But other operators like [-, *, **, /, %, .....]
// const z = x *  y; // 10010
// console.log(typeof z);
// console.log(z)


let val;
let firstname = "ibraheemomikunle";

val = firstname.slice(0, -4); // the slice method accept negative parameters
console.log(val);


let sec;
let secondname = "ibraheemomikunle";

val = secondname.slice(0,7);// delete the last no on 7
console.log(val);
// let val;
// let firstname = "ibraheemomikunle";

// val = firstname.slice(0, 7); // the slice method accept negative parameters
// val = firstname.slice(-4); // the slice method accept negative parameters
// val = firstname.slice('0', '7'); // the slice method accept negative parameters
// console.log(val);

const airline = 'TAP Nigeria AirWays'; // 19
console.log(airline.slice(10, airline.indexOf(' ')));
// console.log(airline.indexOf(' ')) // indexof returns number, as position.


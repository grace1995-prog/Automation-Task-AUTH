'use strict';

function calculateArea(length,width){
    const area =length * width;
    return area;

}
    const calculate = calculateArea(5,3);
    console.log(calculate)




//no 2 example

    function fullname(firstname,surname){
        const namecheck = firstname + surname;
        return namecheck;

        
    }
    const naming = fullname( "uko","mfonma");
    console.log(naming)

    //task
    //Test data:
    //Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

    function calcAverage( score1,score2,score3){
        const checkWinnerDolphin = score1 +score2 +score3 /3;
        return checkWinnerDolphin;

    }

    const checkscore = calcAverage(44,23,71/3);
    console.log(checkscore)
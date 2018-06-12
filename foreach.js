'use strict';

function average(numbers){

    let sum =0;  
    numbers.forEach( number =>  sum += number);

    return sum/numbers.length;

}

let numArray=[1,2,3,4,400];

console.log(average(numArray));
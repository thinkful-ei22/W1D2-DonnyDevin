'use strict';

let turtleMovements=[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


//filter out any movements that are backwards or to the right (have a negative value)
let forwardLeftMovements = turtleMovements.filter(steps =>  steps[0]>=0 && steps[1] >= 0); 

console.log(forwardLeftMovements);

//Create an array containing how many steps the turtle makes in total with each movment (the sum)
// Use Absolute Value? to
let totalSteps = turtleMovements.map(steps => Math.abs(steps[0]) + Math.abs(steps[1]) ); 

console.log(totalSteps);

//For each loop how many steps

let logSteps = totalSteps.forEach( totalSteps => console.log(totalSteps));
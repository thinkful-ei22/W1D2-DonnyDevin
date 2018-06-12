
'use strict'

function max(numbers) {
    // your code here
    let maxNum=numbers[0];
   let i =0;
    while (i < numbers.length ){
        if(numbers[i] >maxNum ){
            maxNum=numbers[i];
        }
        ++i;
    }
   return maxNum;
}
  
  function min(numbers) {
    // your code here
  
    let minNum=numbers[0];
    let i =0;
     while (i < numbers.length ){
         if(numbers[i] < minNum ){
             minNum=numbers[i];
         }
         ++i;
     }
    return minNum;


}

let numArray=[4,3,-1,9,10,12,99];

console.log(max(numArray));
console.log(min(numArray));

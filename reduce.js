'use strict';

let myString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function reducerHelper(string, word){
  return (word.length === 3 ? string + ' ' : string + word[word.length-1].toUpperCase());
}

function reduceString(myString){
  return myString.split(' ').reduce(reducerHelper, '');
}

console.log(reduceString(myString));
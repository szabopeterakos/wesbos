console.log("konami");

let wordArray = [];
const secretWord = 'konami';
const secretWord2 = 'iddqd';

function handleKeyboardEvent(e){
  wordArray.push(e.key);
  wordArray.splice(-secretWord.length-1, wordArray.length - secretWord.length); // pop the first element in the array
  // wordArray = wordArray - first element

  if(wordArray.join('').includes(secretWord) || wordArray.join('').includes(secretWord2) ){
    console.log('%c cheat code is activated ',"color:red; background-color: lightgrey");
  }

}

window.addEventListener('keydown',handleKeyboardEvent);
'use strict';

var howManyCorrect = 0;

//initial question to start game
var userName = prompt('Thank you for visiting. What name would you like to be known by?');


//first question var and if statement
var dogOwnership = prompt(userName + ', do you think I have any dogs? Please answer with yes or no.');

if (dogOwnership.toLowerCase() === 'yes') {
  alert('Sadly, I do not have any dogs.');
} else if (dogOwnership.toLowerCase() === 'no') {
  alert('While you are correct, it still makes me sad. I want a dog!');
  howManyCorrect ++;
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have any dogs?   ' + userName + '\'s Answer: ' + dogOwnership.toLowerCase());


//second question var and if statement
var collegeDegree = prompt(userName + ', do you think I have a college degree? Please answer with yes or no.');

if (collegeDegree.toLowerCase() === 'yes') {
  alert('Yes! You are correct. I have a bachelor\'s in Legal Office Administration.');
  howManyCorrect ++;
} else if (collegeDegree.toLowerCase() === 'no') {
  alert('You are incorrect. I earned a bachelor\'s in Legal Office Administration.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have a college degree?   ' + userName + '\'s Answer: ' + collegeDegree.toLowerCase());


//third question var and if statement
var commuteToClass = prompt(userName + ', do you think I drive to class?  Please answer with yes or no.');

if (commuteToClass.toLowerCase() === 'yes') {
  alert('Thankfully not. Driving and parking in the city is so expensive! I take the bus.');
} else if (commuteToClass.toLowerCase() === 'no') {
  alert('You are correct. I take 3 different buses to get to class.');
  howManyCorrect ++;
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I drive to class?   ' + userName + '\'s Answer: ' + commuteToClass.toLowerCase());


//fourth question var and if statement
var likeSewing = prompt(userName + ', do you think I like to sew? Please answer with yes or no.');

if (likeSewing.toLowerCase() === 'yes') {
  alert('ABSOLUTELY!!!');
  howManyCorrect ++;
} else if (likeSewing.toLowerCase() === 'no') {
  alert('That is so sad. I absolutely LOVE to sew!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like to sew?   ' + userName + '\'s Answer: ' + likeSewing.toLowerCase());


//fifth question var and if statement
var likeCamping = prompt(userName + ', do you think I like camping? Please answer with yes or no.');

if (likeCamping.toLowerCase() === 'yes') {
  alert('The short answer is "yes". The longer answer is I would prefer to go "glamping" or go with just my family, but we usually have a large group.');
  howManyCorrect ++;
} else if (likeCamping.toLowerCase() === 'no') {
  alert('You are incorrect. I do enjoy going camping.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like camping?   ' + userName + '\'s Answer: ' + likeCamping.toLowerCase());


//sixth question in a while loop with a nested if statement

var bookChance = 4;
var qtyBooksOwned = 3968;
while (bookChance > 0) {
  var howManyBooks = parseInt(prompt('How many physical (not digital) books do you think I own? Please answer with a whole number.'));
  if(howManyBooks === qtyBooksOwned){
    alert('How did you know?! I am an avid reader and perfer my books in hard copy due to current legislation...also I cannot get over the wonderful feel and smell of books.');
    console.log(userName + ' answered ' + howManyBooks + ' on chance number ' + bookChance);
    howManyCorrect ++;
    break;
  } else if (howManyBooks <= 2000) {
    alert('That number is waaaaay too low.');
  } else if (howManyBooks >= 2000 && howManyBooks < qtyBooksOwned) {
    alert('That is a lot less than I have but you\'re thinking in the right direction.');
  } else if (howManyBooks > qtyBooksOwned) {
    alert('While that would be totally awesome, sadly it is not true. I have less than you have guessed.');
  } else {
    alert('Hmmm...something went wrong.  Did you enter a strictly numerical number?');
  }
  console.log(userName + ' answered ' + howManyBooks + ' on chance number ' + bookChance);
  bookChance --;
  if (bookChance === 0) {
    alert('I\'m sorry, ' + userName + ', but you have used the alloted amount of guesses. I have 3,968 hard copy books.');
  }
}

//seventh question using an array and a loop
//totally saved by Timea. THANKS!!!
var arrayOfStates = ['florida', 'nevada'];
var chances = 6;

while (chances > 0) {
  var whatStates = prompt('Please guess a state other than Washington that I\'ve lived in. You have 6 tries to get it correct.').toLowerCase();

  for (var i = 0; i < arrayOfStates.length; i++) {
    if (whatStates === arrayOfStates[i]) {
      alert('Correct! I\'ve lived in a total of 3 states; Washington, Florida, and Nevada.');
      console.log(userName + ' answered ' + whatStates + ' correctly.');
      howManyCorrect ++;
      chances = 0;
      break;
    }
  }
  chances --;

  if (chances === 0) {
    alert('I\'m sorry, ' + userName + ', but you have used the alloted amount of guesses. I have lived in a total of 3 states: Washington, Florida, and Nevada.');

    console.log(userName + ' has used the alloted amount of guesses. I have lived in a total of 3 states: Washington, Florida, and Nevada.');
  }
}

alert('Thank you for playing, ' + userName + ' You got ' + howManyCorrect + ' questions correct out of 7.');
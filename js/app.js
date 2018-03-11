'use strict';

var howManyCorrect = 0;

//initial question to start game

var userName = prompt('Thank you for visiting. What name would you like to be known by?');
var invalidAnswer = 'You have entered an invalid answer. Please limit your responses to "yes" or "no".';

function dogOwnership() {
//first question var and if statement
  var dogOwnership = prompt(userName + ', do you think I have any dogs? Please answer with yes or no.');

  if (dogOwnership.toLowerCase() === 'yes') {
    alert('Sadly, I do not have any dogs.');
  } else if (dogOwnership.toLowerCase() === 'no') {
    alert('While you are correct, it still makes me sad. I want a dog!');
    howManyCorrect ++;
  } else {
    alert(invalidAnswer);
  }
  console.log('Question #1:\nI asked, "Do you think I have any dogs?"\n' + userName + ' answered with ' + dogOwnership.toLowerCase());
  return dogOwnership;
}
dogOwnership();

function collegeDegree() {
//second question var and if statement
  var collegeDegree = prompt(userName + ', do you think I have a college degree? Please answer with yes or no.');

  if (collegeDegree.toLowerCase() === 'yes') {
    alert('Yes! You are correct. I have a bachelor\'s in Legal Office Administration.');
    howManyCorrect ++;
  } else if (collegeDegree.toLowerCase() === 'no') {
    alert('You are incorrect. I earned a bachelor\'s in Legal Office Administration.');
  } else {
    alert(invalidAnswer);
  }

  console.log('Question #2:\nI asked, "Do you think I have a college degree?"\n' + userName + ' answered with ' + collegeDegree.toLowerCase());
}

collegeDegree();

function commuteClass() {
//third question var and if statement
  var commuteToClass = prompt(userName + ', do you think I drive to class?  Please answer with yes or no.');

  if (commuteToClass.toLowerCase() === 'yes') {
    alert('Thankfully not. Driving and parking in the city is so expensive! I take the bus.');
  } else if (commuteToClass.toLowerCase() === 'no') {
    alert('You are correct. I take 3 different buses to get to class.');
    howManyCorrect ++;
  } else {
    alert(invalidAnswer);
  }

  console.log('Question #3:\nI asked, "Do you think I drive to class?"\n' + userName + ' answered with ' + commuteToClass.toLowerCase());
}

commuteClass();

function likeSewing() {
//fourth question var and if statement
  var likeSewing = prompt(userName + ', do you think I like to sew? Please answer with yes or no.');

  if (likeSewing.toLowerCase() === 'yes') {
    alert('ABSOLUTELY!!!');
    howManyCorrect ++;
  } else if (likeSewing.toLowerCase() === 'no') {
    alert('That is so sad. I absolutely LOVE to sew!');
  } else {
    alert(invalidAnswer);
  }
  // console.log('Question #1:\n I asked "Do you think I have any dogs?"\n   ' + userName + ' answered with ' + dogOwnership.toLowerCase());

  console.log('Question #4:\nI asked, "Do you think I like to sew?"\n' + userName + ' answered with ' + likeSewing.toLowerCase());
}

likeSewing();

function likeCamping() {
//fifth question var and if statement
  var likeCamping = prompt(userName + ', do you think I like camping? Please answer with yes or no.');

  if (likeCamping.toLowerCase() === 'yes') {
    alert('The short answer is "yes". The longer answer is I would prefer to go "glamping" or go with just my family, but we usually have a large group.');
    howManyCorrect ++;
  } else if (likeCamping.toLowerCase() === 'no') {
    alert('You are incorrect. I do enjoy going camping.');
  } else {
    alert(invalidAnswer);
  }

  console.log('Question #5:\nI asked, "Do you think I like camping?"\n' + userName + ' answered with ' + likeCamping.toLowerCase());
}

likeCamping();

//sixth question in a while loop with a nested if statement
function howManyBooks() {
  var bookChance = 4;
  var qtyBooksOwned = 3968;

  while (bookChance > 0) {
    var howManyBooks = parseInt(prompt('How many physical (not digital) books do you think I own? Please answer with a whole number. You have ' + bookChance + ' tries to get it correct.'));

    if(howManyBooks === qtyBooksOwned){
      alert('CORRECT! How did you know?! I am an avid reader and perfer my books in hard copy due to current legislation...also I cannot get over the wonderful feel and smell of books.');
      console.log(userName + ' answered ' + howManyBooks + ' on chance number ' + bookChance);
      howManyCorrect ++;
      break;
    } else if (howManyBooks <= 2000) {
      alert('That number is waaaaay too low. Please guess again.');
    } else if (howManyBooks >= 2000 && howManyBooks < qtyBooksOwned) {
      alert('Nope. That is a lot less than I have but you\'re thinking in the right direction.');
    } else if (howManyBooks > qtyBooksOwned) {
      alert('While that would be totally awesome, sadly it is not true. I have less than you have guessed.');
    } else {
      alert('Hmmm...something went wrong.  Did you enter a strictly numerical number?');
    }

    console.log('Question #6:\nI asked, "How many physical (not digital) books do you think I own?"\n' + userName + ' answered ' + howManyBooks + ' on chance number ' + bookChance);

    bookChance --;

    if (bookChance === 0) {
      alert('I\'m sorry, ' + userName + ', but you have used the alloted amount of guesses. I have 3,968 hard copy books.');
    }
  }
}
howManyBooks();

//seventh question using an array and a loop
function whereDidILive(){
  var arrayOfStates = ['florida', 'nevada'];
  var chances = 6;
  var isCorrect = false;

  while (chances > 0) {
    if (isCorrect === true) {
      alert('Correct! I\'ve lived in a total of 3 states; Washington, Florida, and Nevada.');
      console.log('Question #7:\nI asked, "Please guess a state that I have lived in other than Washington."\n' + userName + ' answered ' + whatStates + ' correctly.');
      break;
    }
    var whatStates = prompt('Please guess a state other than Washington that I\'ve lived in. You have ' + chances + ' tries to get it correct.').toLowerCase();
    for (var i = 0; i < arrayOfStates.length; i++) {
      if (whatStates === arrayOfStates[i]) {
        isCorrect = true;
        howManyCorrect ++;
      }
    }

    if (isCorrect === false){
      alert('That sounds like a nice place to visit, but I have never lived there. Please guess again.');
      chances --;
    }

    if (chances === 0) {
      alert('I\'m sorry, ' + userName + ', but you have used the alloted amount of guesses. I have lived in a total of 3 states: Washington, Florida, and Nevada.');

      console.log('Question #7:\n' + userName + ' has used the alloted amount of guesses. I have lived in a total of 3 states: Washington, Florida, and Nevada.');
    }
  }
}

whereDidILive();

alert('Thank you for playing, ' + userName + '. You got ' + howManyCorrect + ' questions correct out of 7.');
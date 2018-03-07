'use strict';

//initil prompt giving instructions on how to answer
alert('Please answer all questions with a "yes" or "no" or a whole number where requested. Thank you.');

//initial question to start game
var userName = prompt('Thank you for visiting. What name would you like to be known by?');


//first question var and if statement
var dogOwnership = prompt(userName + ', do you think I have any dogs?');

if (dogOwnership.toLowerCase() === 'yes') {
  alert('Sadly, I do not have any dogs.');
} else if (dogOwnership.toLowerCase() === 'no') {
  alert('While you are correct, it still makes me sad. I want a dog!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have any dogs?   ' + userName + '\'s Answer: ' + dogOwnership.toLowerCase());


//second question var and if statement
var collegeDegree = prompt(userName + ', do you think I have a college degree?');

if (collegeDegree.toLowerCase() === 'yes') {
  alert('Yes! You are correct. I have a bachelor\'s in Legal Office Administration.');
} else if (collegeDegree.toLowerCase() === 'no') {
  alert('You are incorrect. I earned a bachelor\'s in Legal Office Administration.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have a college degree?   ' + userName + '\'s Answer: ' + collegeDegree.toLowerCase());


//third question var and if statement
var commuteToClass = prompt(userName + ', do you think I drive to class?');

if (commuteToClass.toLowerCase() === 'yes') {
  alert('Thankfully not. Driving and parking in the city is so expensive! I take the bus.');
} else if (commuteToClass.toLowerCase() === 'no') {
  alert('You are correct. I take 3 different buses to get to class.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I drive to class?   ' + userName + '\'s Answer: ' + commuteToClass.toLowerCase());


//fourth question var and if statement
var likeSewing = prompt(userName + ', do you think I like to sew?');

if (likeSewing.toLowerCase() === 'yes') {
  alert('ABSOLUTELY!!!');
} else if (likeSewing.toLowerCase() === 'no') {
  alert('That is so sad. I absolutely LOVE to sew!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like to sew?   ' + userName + '\'s Answer: ' + likeSewing.toLowerCase());


//fifth question var and if statement
var likeCamping = prompt(userName + ', do you think I like camping?');

if (likeCamping.toLowerCase() === 'yes') {
  alert('The short answer is "yes". The longer answer is I would prefer to go "glamping" or go with just my family, but we usually have a large group.');
} else if (likeCamping.toLowerCase() === 'no') {
  alert('You are incorrect. I do enjoy going camping.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like camping?   ' + userName + '\'s Answer: ' + likeCamping.toLowerCase());


//sixth question in a while loop with a nested if statement

var bookChance = 0;
var qtyBooksOwned = 3968;
while (bookChance < 4) {
  var howManyBooks = parseInt(prompt('How many physical (not digital) books do you think I own?'));
  if(howManyBooks === qtyBooksOwned){
    alert('How did you know?! I am an avid reader and perfer my books in hard copy due to current legislation...also I cannot get over the wonderful feel and smell of books.');
    console.log(userName + ' answered ' + howManyBooks + ' on chance number ' + bookChance);
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
  bookChance ++;
}

//seventh question using an array and a loop

'use strict';
alert('Please answer all questions with a "yes" or "no". Thank you.');

var dogOwnership = prompt('Do you think I have any dogs?');

if (dogOwnership.toLowerCase() === 'yes') {
  alert('Sadly, I do not have any dogs.');
  console.log('This is the incorrect answer.');
} else if (dogOwnership.toLowerCase() === 'no') {
  alert('While you are correct, it still makes me sad. I want a dog!');
  console.log('This is the correct answer.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
  console.log('This should not run because I\'m using yes and no answers.');
}

console.log('QUESTION: Do you think I have any dogs?  Your answer: ' + dogOwnership);

// var collegeDegree = prompt('Do you think I have a college degree?');
// var comuteToClass = prompt('Do you think I drive to class?');
// var likeSewing = prompt('Do you think I like to sew?');
// var likeCamping = prompt('Do you think I like camping?');

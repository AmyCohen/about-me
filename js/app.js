'use strict';
alert('Please answer all questions with a "yes" or "no". Thank you.');

var dogOwnership = prompt('Do you think I have any dogs?');

if (dogOwnership.toLowerCase() === 'yes') {
  alert('Sadly, I do not have any dogs.');
} else if (dogOwnership.toLowerCase() === 'no') {
  alert('While you are correct, it still makes me sad. I want a dog!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have any dogs?  YOUR ANSWER: ' + dogOwnership.toLowerCase());


var collegeDegree = prompt('Do you think I have a college degree?');

if (collegeDegree.toLowerCase() === 'yes') {
  alert('Yes! You are correct. I have a bachelor\'s in Legal Office Administration.');
} else if (collegeDegree.toLowerCase() === 'no') {
  alert('You are incorrect. I earned a bachelor\'s in Legal Office Administration.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}
console.log('QUESTION: Do you think I have a college degree?  YOUR ANSWER: ' + collegeDegree.toLowerCase());


// var comuteToClass = prompt('Do you think I drive to class?');
// var likeSewing = prompt('Do you think I like to sew?');
// var likeCamping = prompt('Do you think I like camping?');

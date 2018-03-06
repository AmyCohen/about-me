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


var commuteToClass = prompt('Do you think I drive to class?');

if (commuteToClass.toLowerCase() === 'yes') {
  alert('Thankfully not. Driving and parking in the city is so expensive! I take the bus.');
} else if (commuteToClass.toLowerCase() === 'no') {
  alert('You are correct. I take 3 different buses to get to class.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I drive to class?  YOUR ANSWER: ' + commuteToClass.toLowerCase());


var likeSewing = prompt('Do you think I like to sew?');

if (likeSewing.toLowerCase() === 'yes') {
  alert('ABSOLUTELY!!!');
} else if (likeSewing.toLowerCase() === 'no') {
  alert('That is so sad. I absolutely LOVE to sew!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like to sew?  YOUR ANSWER: ' + likeSewing.toLowerCase());


// var likeCamping = prompt('Do you think I like camping?');

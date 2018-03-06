'use strict';
alert('Please answer all questions with a "yes" or "no". Thank you.');

var userName = prompt('Thank you for visiting. What name would you like to be known by?');

var dogOwnership = prompt(userName + ', do you think I have any dogs?');

if (dogOwnership.toLowerCase() === 'yes') {
  alert('Sadly, I do not have any dogs.');
} else if (dogOwnership.toLowerCase() === 'no') {
  alert('While you are correct, it still makes me sad. I want a dog!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have any dogs?   ' + userName + '\'s Answer: ' + dogOwnership.toLowerCase());


var collegeDegree = prompt(userName + ', do you think I have a college degree?');

if (collegeDegree.toLowerCase() === 'yes') {
  alert('Yes! You are correct. I have a bachelor\'s in Legal Office Administration.');
} else if (collegeDegree.toLowerCase() === 'no') {
  alert('You are incorrect. I earned a bachelor\'s in Legal Office Administration.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I have a college degree?   ' + userName + '\'s Answer: ' + collegeDegree.toLowerCase());


var commuteToClass = prompt(userName + ', do you think I drive to class?');

if (commuteToClass.toLowerCase() === 'yes') {
  alert('Thankfully not. Driving and parking in the city is so expensive! I take the bus.');
} else if (commuteToClass.toLowerCase() === 'no') {
  alert('You are correct. I take 3 different buses to get to class.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I drive to class?   ' + userName + '\'s Answer: ' + commuteToClass.toLowerCase());


var likeSewing = prompt(userName + ', do you think I like to sew?');

if (likeSewing.toLowerCase() === 'yes') {
  alert('ABSOLUTELY!!!');
} else if (likeSewing.toLowerCase() === 'no') {
  alert('That is so sad. I absolutely LOVE to sew!');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like to sew?   ' + userName + '\'s Answer: ' + likeSewing.toLowerCase());


var likeCamping = prompt(userName + ', do you think I like camping?');

if (likeCamping.toLowerCase() === 'yes') {
  alert('The short answer is "yes". The longer answer is I would prefer to go "glamping" or go with just my family, but we usually have a large group.');
} else if (likeCamping.toLowerCase() === 'no') {
  alert('You are incorrect. I do enjoy going camping.');
} else {
  alert('You have entered an invalid answer. Please limit your responses to "yes" or "no".');
}

console.log('QUESTION: Do you think I like camping?   ' + userName + '\'s Answer: ' + likeCamping.toLowerCase());

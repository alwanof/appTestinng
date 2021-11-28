const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
 if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

function isItSunday(today) {
 if (today === "Sunday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});
When('I ask whether it\'s Sunday yet', function () {
   this.actualAnswer = isItSunday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});








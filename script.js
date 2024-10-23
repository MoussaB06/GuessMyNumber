'use strict';
/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

---------------------------------------------------------------------------------

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//(Math.random() donnera un chiffre en 0 et 1) * 20
//Math.trunc(Math.random() * 20) enlevera sa virgule le max quon aura c'est 19.9999999 ça deviendra 19
//  + 1 pour avoir 20
// const secretNumber = '?';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;

const x = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!'
    displayMessage('⛔ No Number!');

    //when guess is the secret number
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // console.log(
    //   (document.querySelector('.message').textContent = '✅ Correct Number!')
    // );
    displayMessage('✅ Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  //when guess is higher than the secret number
  else if (guess > secretNumber) {
    // console.log(
    //   (document.querySelector('.message').textContent = '📈 To High!')
    // );
    displayMessage('📈 To High!');
  }
  //when guess is lower than the secret number
  else if (guess < secretNumber) {
    // console.log(
    //   (document.querySelector('.message').textContent = '📉 To Low!')
    // );
    displayMessage('📉 To Low!');
  }

  //when guess is not equal than the secret number
  if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      // console.log(
      //   (document.querySelector('.message').textContent =
      //     '❌ you lost ayaghyoul!')
      // );
      displayMessage('❌ you lost ayaghyoul!');
    }
  }
};

document.querySelector('.check').addEventListener('click', x);

const y = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highscore;

  // console.log(
  //   (document.querySelector('.message').textContent = 'Start guessing...')
  // );
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', y);

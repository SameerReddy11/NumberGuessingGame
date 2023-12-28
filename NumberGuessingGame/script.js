let secretNum = Math.floor(Math.random() * 50 + 1);
document.querySelector('.number').textContent = '?';
console.log(secretNum);
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //  When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter Number';
    // Changing the css
    document.querySelector('body').style.backgroundColor = '#d72e2e';
    document.querySelector('.message').style.fontSize = '2rem';
    document.querySelector('.message').style.color = '#05236f';
  }
  //  When the player wins
  else if (guess === secretNum) {
    document.querySelector('.message').style.color = '#eee';
    document.querySelector('.message').textContent = ' Correct Guess🥳';
    document.querySelector('.number').textContent = secretNum;
    // Changing the css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').style.backgroundColor = '#911910';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //  When the input is HIGH
  else if (guess > secretNum) {
    document.querySelector('.message').style.color = '#eee';
    document.querySelector('.message').textContent = ' Too Big!!';
    score--;
    document.querySelector('.score').textContent = score;
    // Changing the css
    document.querySelector('body').style.backgroundColor = '#222';
  }
  //  When the input is LOW
  else {
    document.querySelector('.message').style.color = '#eee';
    document.querySelector('.message').textContent = ' Too Small!!';
    score--;
    document.querySelector('.score').textContent = score;
    // Changing the css
    document.querySelector('body').style.backgroundColor = '#222';
  }
  //  When the Score hits 0
  if (score <= 0) {
    document.querySelector('.message').textContent = 'BAD LUCK!';

    // reset the game
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 50 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.again').style.backgroundColor = '#eee';
});

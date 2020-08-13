// ARRAYS:

const phrases = ['Arsenal Are The Best',
  'Kevin Arnold',
  'I Am Your Father',
  'Atticus Pelter',
  'Lets Go To South Africa'
]

//VARIABLES:

const qwerty = document.getElementById('qwerty');
const buttons = qwerty.getElementsByTagName('button');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
const list = document.querySelector('ul');
let questionPhrase = randomPhrase(phrases).toUpperCase();
let tries = document.getElementsByClassName('tries');
let hearts = document.querySelectorAll('#scoreboard img');
// Event listener for the Start Game

startButton.addEventListener('click', () => {
  newGame();
});

//Return a random phrase from an ARRAYS

function randomPhrase(phrases) {
 return phrases[Math.floor(Math.random() * phrases.length)];
};

// Make an array of letters from questionPhrase.

function makeQuestionLetters() {
  let letter = document.createElement('li');
  let gameLetters = questionPhrase.split('');
  for ( let i = 0; i < gameLetters.length; i++ ) {
    let item = document.createElement('LI');
    let letters = document.getElementsByClassName('letter');
    if ( gameLetters[i] !== ' ' ) {
      questionArray.push(gameLetters[i]);
      item.className = "letter";
      item.appendChild(document.createTextNode(gameLetters[i]));
      letter.appendChild(item);
      list.appendChild(letter);
  } else {
      item.className = 'space';
      item.appendChild(document.createTextNode(gameLetters[i]));
      letter.appendChild(item);
      list.appendChild(letter);
    }
  }
};

//Event listener for when user clicks a button
qwerty.addEventListener("click", checkLetter);

function checkLetter(e) {
  let userInput = e.target.innerHTML.toUpperCase();
  let letters = document.getElementsByClassName('letter');
    if (userInput.length !== 1 ) {
      return;
    }
    if ( !chosen.includes(userInput) ) {
      chosen.push(userInput);
  } else {
      return;
    }
  for ( let i = 0; i < questionArray.length; i++) {
    if ( !questionArray.includes(userInput) ) {
      missedResponse += 1;
      hearts[missedResponse - 1].src = "images/lostHeart.png";
      checkWin();
      return;
    }
    else if ( userInput == questionArray[i]) {
      letters[i].classList.add("show", "chosen");
      show.push(userInput);
      checkWin();
  }}
};

// New Game function

function newGame() {
  restoreHearts();
  missedResponse = 0;
  chosen = [];
  list.innerHTML = "";
  show = [];
  showLetters = [];
  questionArray = [];
  questionPhrase = randomPhrase(phrases).toUpperCase();
  overlay.style.display = "none";
  randomPhrase(phrases);
  makeQuestionLetters(questionPhrase);
}

//Check Win function

function checkWin() {
  let heading = document.querySelector('h2');
  let classLetters = document.getElementsByClassName('letter');
  let showLetters = document.getElementsByClassName('show');
    if ( classLetters.length == showLetters.length ) {
      overlay.className = 'win';
      heading.innerHTML = "CONGRATULATIONS. YOU WON!"
      overlay.style.display = 'flex';
  } else if ( missedResponse > 4 ) {
      overlay.className = 'lose';
      heading.innerHTML = "Sorry, You Lost!"
      overlay.style.display = 'flex';
  } return ;
};

//Function to restore hearts

function restoreHearts() {
for ( let i = 0; i < 5; i ++) {
  hearts[i].src = "images/liveHeart.png"
}};

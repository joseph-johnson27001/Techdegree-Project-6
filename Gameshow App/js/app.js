//--------------------------------------------------------------------------
// ARRAYS
//--------------------------------------------------------------------------

const phrases = ['Its A Trap',
  'Luke Skywalker',
  'I Am Your Father',
  'Millennium Falcon',
  'Darth Vader',
  'This Is The Way',
  'Bobba Fett',
  'The Kessel Run',
  'So Be It Jedi',
  'Help Me Obi Wan Kenobi',
  'Star Destroyers',
  'Thats No Moon',
  'I Dont Like Sand'
]

//--------------------------------------------------------------------------
// VARAIBLES
//--------------------------------------------------------------------------

const qwerty = document.getElementById('qwerty');
const buttons = qwerty.getElementsByTagName('button');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
const list = document.querySelector('ul');
let questionPhrase = randomPhrase(phrases).toUpperCase();
let hearts = document.querySelectorAll('#scoreboard img');

//--------------------------------------------------------------------------
// EVENT LISTERNERS
//--------------------------------------------------------------------------

// Event listener for the Start Game

startButton.addEventListener('click', () => {
  newGame();
});

// Event listener for checking letter

qwerty.addEventListener("click", checkLetter);

//--------------------------------------------------------------------------
// FUNCTIONS
//--------------------------------------------------------------------------

// New Game Function

function newGame() {
  restoreHearts();
  startButton.innerHTML = "Play Again?"
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
};

// Function to restore hearts at beginning of game

function restoreHearts() {
  for ( let i = 0; i < 5; i ++) {
    hearts[i].src = "images/liveHeart.png";
  }};

// Pick random phrase from Array

function randomPhrase(phrases) {
 return phrases[Math.floor(Math.random() * phrases.length)];
};

// Reset ARRAYS


// Make letters from chosen phrase into an array, make them list items and
// show them on the screen

function makeQuestionLetters() {
  let letter = document.createElement('li');
  letter.classList.add('fade');
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

// Check Letter Function

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

//Check Win Function

function checkWin() {
  let heading = document.querySelector('h2');
  let classLetters = document.getElementsByClassName('letter');
  let showLetters = document.getElementsByClassName('show');
    if ( classLetters.length == showLetters.length ) {
      overlay.className = 'win';
      heading.innerHTML = "CONGRATULATIONS. YOU WON!";
      overlay.style.display = 'flex';
  } else if ( missedResponse > 4 ) {
      overlay.className = 'lose';
      heading.innerHTML = "Sorry, You Lost!";
      overlay.style.display = 'flex';
  } return ;
};

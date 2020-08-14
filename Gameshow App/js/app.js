// ARRAYS..................................................................................

const phrases = ['Its A Trap',
  'Luke Skywalker',
  'I Am Your Father',
  'Millennium Falcon',
  'Darth Vader'
]

// VARIABLES...............................................................................

const qwerty = document.getElementById('qwerty');
const buttons = qwerty.getElementsByTagName('button');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
const list = document.querySelector('ul');
let questionPhrase = randomPhrase(phrases).toUpperCase();
let tries = document.getElementsByClassName('tries');
let hearts = document.querySelectorAll('#scoreboard img');

// EVENT LISTENERS...................................................................

// EVENT LISTENER FOR START OF GAME:

startButton.addEventListener('click', () => {
  newGame();
});

// EVENT LISTENER FOR CLICKING QWERTY KEYBOARD AREA:

qwerty.addEventListener("click", checkLetter);

// FUNCTIONS .......................................................................................

// NEW GAME FUNCTION

function newGame() {
  restoreHearts();
  startButton.innerHTML = "Play Again?";
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

// PICK RANDOM PHRASE FROM ARRAY

function randomPhrase(phrases) {
 return phrases[Math.floor(Math.random() * phrases.length)];
};

// MAKE LETTERS FROM CHOSEN PHRASE INTO AN ARRAY:

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
      appendChild()
  } else {
      item.className = 'space';
      appendChild()
    }
  }
};

// CHECK LETTER FUNCTION:

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

// APPEND CHILD FUNCTION

function appendChild() {
  item.appendChild(document.createTextNode(gameLetters[i]));
  letter.appendChild(item);
  list.appendChild(letter);
};

// CHECK WIN FUNCTION

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

// FUNCTION TO RESTORE HEARTS AT START OF GAME

function restoreHearts() {
for ( let i = 0; i < 5; i ++) {
  hearts[i].src = "images/liveHeart.png";
}};

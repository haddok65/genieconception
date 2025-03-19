var quizData = [];
const quizDataEn = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
    answer: 'Jupiter',
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Argentina'],
    answer: 'France',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
    answer: 'Mount Everest',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: [
      'Pacific Ocean',
      'Indian Ocean',
      'Atlantic Ocean',
      'Arctic Ocean',
    ],
    answer: 'Pacific Ocean',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Cu', 'Fe'],
    answer: 'Au',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Pablo Picasso',
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Michelangelo',
    ],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest species of shark?',
    options: [
      'Great White Shark',
      'Whale Shark',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answer: 'Whale Shark',
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answer: 'Lion',
  },
];

const quizDataFr = [
  {
    question: 'Qu’est-ce que l’énergie renouvelable ?',
    options: [
      'Une énergie qui se renouvelle naturellement et dont la source est inépuisable à l’échelle humaine', 
      'Une énergie produite par le charbon', 
      'Une énergie ne se renouvelle pas naturellement et qui est épuisable à l’échelle humaine', 
      'Une énergie qui se renouvelle naturellement et dont la source est épuisable à l’échelle humaine'
    ],
    answer: 'Une énergie qui se renouvelle naturellement et dont la source est inépuisable à l’échelle humaine',
  },
  {
    question: 'Parmi les formes d’énergie suivantes, lesquelles sont renouvelables ?',
    options: [
      'Énergie solaire et éolienne',
      'Énergie éolienne et énergie nucléaire',
      'Énergie nucléaire et énergie fossile',
      'Énergie fossile et énergie solaire'
    ],
    answer: 'Énergie solaire et éolienne',
  },
  {
    question: 'Laquelle de ces pratiques est un exemple d’action écologique ?',
    options: [
      'Jeter des déchets par terre',
      'Éteindre la lumière quand on quitte la pièce',
      'Utiliser des sacs en plastique à usage unique',
      'Laisser couler de l’eau en se brossant les dents'
    ],
    answer: 'Éteindre la lumière quand on quitte la pièce',
  },
  {
    question: 'Choisissez parmi les options suivantes les avantages de l’utilisation des énergies renouvelables?',
    options: [
      'Elles réduisent les émissions à gaz à effet de serre',
      'Elles produisent des déchets toxiques',
      'Elles entraînent une très grande pollution de l’air',
      'Elles épuisent rapidement les ressources naturelles'
    ],
    answer: 'Elles réduisent les émissions à gaz à effet de serre',
  },
  {
    question: 'Qu’est-ce que nous pouvons faire pour réduire la consommation d’énergie à la maison?',
    options: [
      'Ouvrir la fenêtre quand le chauffage est allumé ',
      'Éteindre les appareils quand on ne les utilise pas',
      'Laisser les appareils électriques en veille ',
      'Utiliser les lampes à incandescence '
    ],
    answer: 'Éteindre les appareils quand on ne les utilise pas',
  },
  {
    question: 'Parmi les systèmes suivants, lequel produit de l’énergie renouvelable ?',
    options: [
      'Une centrale nucléaire',
      'Un barrage hydroélectrique',
      'Une usine de charbon',
      'Une raffinerie de pétrole'
    ],
    answer: 'Un barrage hydroélectrique',
  },
  {
    question: 'Qu’elle est la source d’énergie non renouvelable?',
    options: [
      'Le vent',
      'L’eau',
      'Le charbon',
      'Le soleil'
    ],
    answer: 'Le charbon',
  },
  {
    question: 'À quoi sert une mini dynamo?',
    options: [
      'À stoker de l’eau',
      'À produire de la chaleur',
      'À éclairer des pièces sans électricités ',
      'À produire de l’énergie'
    ],
    answer: 'À produire de l’énergie',
  },
  {
    question: 'Une dynamo à manivelle transforme l’énergie (a) en énergie (b) ',
    options: [
      '(a) Mécanique, (b) Électrique',
      '(a) Thermique, (b) Mécanique',
      '(a) Électrique, (b) Chimique',
      '(a) Mécanique, (b) Thermique'
    ],
    answer: '(a) Mécanique, (b) Électrique',
  },
  {
    question: 'Dans le principe de fonctionnement d’une dynamo à manivelle, l’élément qui produit l’énergie est : ',
    options: [
      'Le moteur',
      'Les engrenages',
      'Les câbles',
      'Le support'
    ],
    answer: 'Les engrenages',
  },
  {
    question: 'Dans le principe de fonctionnement d’une dynamo à manivelle, l’élément qui produit l’énergie est : ',
    options: [
      'Un mouvement linéaire (en ligne droite)',
      'Un mouvement rotatif (en tournant)',
      'Un mouvement vertical (de haut en bas)',
      'Un mouvement statique (sans bouger)'
    ],
    answer: 'Un mouvement rotatif (en tournant)',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const languageId = document.getElementById('languageId');
var language = 'fr';

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function changeLanguage() {
    language = language === 'en'? 'fr' : 'en'
    languageId.innerHTML = language === 'en'? 'Fran&ccedil;ais' : 'English';
    retryButton.innerHTML = language === 'fr'? 'Reesayer' : 'Retry';
    showAnswerButton.innerHTML = language === 'fr'? 'Montrez les réponses' : 'Show Answer';
    submitButton.innerHTML = language === 'fr'? 'Soumettre' : 'Submit';
    displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
quizData = language === 'en'? quizDataEn : quizDataFr;
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = language === 'fr'? `Votre score est de ${score} sur ${quizData.length}! : `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> <span style="color: red">${incorrectAnswers[i].incorrectAnswer}</span><br>
        <strong>Correct Answer:</strong> <span style="color: green">${incorrectAnswers[i].correctAnswer} </span>
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);
languageId.addEventListener('click', changeLanguage);

displayQuestion();

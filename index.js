var quizData = [];
const quizDataEn = [
  {
    question: 'What is renewable energy ?',
    options: [
      'Energy that naturally renews itself and whose source is inexhaustible on a human scale',
      'Energy produced by coal',
      'Energy that does not renew naturally and is exhaustible on a human scale',
      'Energy that naturally renews itself but whose source is exhaustible on a human scale'
    ],
    answer: 'Energy that naturally renews itself and whose source is inexhaustible on a human scale',
  },
  {
    question: ' Among the following energy sources, which ones are renewable?',
    options: [
      'Solar energy and wind energy',
      'Wind energy and nuclear energy',
      'Nuclear energy and fossil energy',
      'Fossil energy and solar energy'
    ],
    answer: 'Solar energy and wind energy',
  },
  {
    question: 'Which of these practices is an example of an ecological action?',
    options: [
      'Throwing trash on the ground',
      'Turning off the light when leaving the room',
      'Using single-use plastic bags',
      'Letting water run while brushing your teeth'
    ],
    answer: 'Turning off the light when leaving the room',
  },
  {
    question: 'Choose the advantage of using renewable energies:',
    options: [
      'They reduce greenhouse gas emissions',
      'They produce toxic waste',
      'They cause severe air pollution',
      'They rapidly deplete natural resources'
    ],
    answer: 'They reduce greenhouse gas emissions',
  },
  {
    question: 'What can we do to reduce energy consumption at home?',
    options: [
      'Open the window while the heater is on',
      'Turn off appliances when not in use',
      'Leave electrical devices on standby',
      'Use incandescent light bulbs',
    ],
    answer: 'Turn off appliances when not in use',
  },
  {
    question: 'Which of the following systems produces renewable energy?',
    options: [
      'A nuclear power plant',
      'A hydroelectric dam',
      'A coal power plant',
      'An oil refinery'
    ],
    answer: 'A hydroelectric dam',
  },
  {
    question: 'Which of the following is a non-renewable energy source?',
    options: [
      'Wind',
      'Water',
      'Coal',
      'Solar',
    ],
    answer: 'Coal',
  },
  {
    question: 'What is the purpose of a mini dynamo?',
    options: [
      'To store water',
      'To produce heat',
      'To light rooms without electricity',
      'To generate energy'
    ],
    answer: 'To generate energy',
  },
  {
    question: 'Why is a dynamo environmentally friendly?',
    options: [
      'Because it uses fuel',
      'Because it produces too much electricity',
      'Because it generates polluting waste',
      'Because it relies on mechanical energy instead of fossil fuels',
    ],
    answer: 'Because it relies on mechanical energy instead of fossil fuels',
  },
  {
    question: 'A hand-crank dynamo transforms (a) energy into (b) energy',
    options: [
      '(a) Mechanical, (b) Electrical',
      '(a) Thermal, (b) Mechanical',
      '(a) Electrical, (b) Chemical',
      '(a) Mechanical, (b) Thermal'
    ],
    answer: '(a) Mechanical, (b) Electrical',
  },
  {
    question: 'In the working principle of a hand-crank dynamo, which component produces energy?',
    options: [
      'The motor',
      'The gears',
      'The cables',
      'The support structure'
    ],
    answer: 'The gears',
  },
  {
    question: 'What type of motion is required to operate a dynamo?',
    options: [
      'Linear motion (in a straight line)',
      'Rotational motion (turning)',
      'Vertical motion (up and down)',
      'There is no correct answer'
    ],
    answer: ')',
  },
  {
    question: 'In a gear system, wheels of different sizes rotate based on the initial movement of the crank. The number of teeth and the size of the wheels influence the output speed, which is transmitted to the motor for electricity production. When a larger wheel with fewer teeth drives a smaller wheel with more teeth, the speed increases, and vice versa, reducing the speed.How can we maximize the output speed with gears of (a) 30 teeth and (b) 60 teeth?',
    options: [
      '(a) drives (b)',
      '(b) drives (a)',
      'It doesn’t matter',
      'Static motion (no movement)'
    ],
    answer: '(b) drives (a)',
  },
  {
    question: 'In a gear system, wheels of different sizes rotate based on the initial movement of the crank. The number of teeth and the size of the wheels influence the output speed, which is transmitted to the motor for electricity production. When a larger wheel with fewer teeth drives a smaller wheel with more teeth, the speed increases, and vice versa, reducing the speed.How can we minimize the output speed with gears of (a) 20 teeth and (b) 7 teeth?',
    options: [
      '(a) drives (b)',
      '(b) drives (a)',
      'It doesn’t matter',
      'Static motion (no movement)'
    ],
    answer: '(a) drives (b)',
  },
  {
    question: 'In a gear system, wheels of different sizes rotate based on the initial movement of the crank. The number of teeth and the size of the wheels influence the output speed, which is transmitted to the motor for electricity production. When a larger wheel with fewer teeth drives a smaller wheel with more teeth, the speed increases, and vice versa, reducing the speed.What happens to the speed if we have two gears with the same number of teeth?',
    options: [
      'It increases',
      'It decreases',
      'It doesn’t matter',
      'It stays the same'
    ],
    answer: 'It stays the same',
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
    question: 'Pourquoi la dynamo est-elle écologique ?',
    options: [
      'Parce qu’elle utilise du carburant',
      'Parce qu’elle produit trop d’électricité',
      'Parce qu’elle génère des déchets polluants',
      'Parce qu’elle fonctionne avec de l’énergie mécanique au lieu des combustibles fossiles'
    ],
    answer: 'Parce qu’elle fonctionne avec de l’énergie mécanique au lieu des combustibles fossiles',
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
  {
    question: 'Dans un système d’engrenages, des roues de différentes tailles s’entrainent en rotation depuis le mouvement initial de la manivelle.Le nombre de dents et la taille des roues influencent la vitesse de sortie qui sera transmise au moteur pour la production d’électricité. Lorsqu’une roue plus grande avec moins de dents entraine en rotation une roue plus petite avec plus de dents, la vitesse augmente, et l’inverse diminue la vitesse.Comment maximiser la vitesse de sortie avec des roues de (a) 30 dents et (b) 60 dents ? ',
    options: [
      '(a) entraine (b)',
      '(b) entraine (a)',
      'Cela n’a pas d’importance',
      'Il n’y a pas de bonne réponse'
    ],
    answer: '(b) entraine (a)',
  },
  {
    question: ' Dans un système d’engrenages, des roues de différentes tailles s’entrainent en rotation depuis le mouvement initial de la manivelle.Le nombre de dents et la taille des roues influencent la vitesse de sortie qui sera transmise au moteur pour la production d’électricité. Lorsqu’une roue plus grande avec moins de dents entraine en rotation une roue plus petite avec plus de dents, la vitesse augmente, et l’inverse diminue la vitesse.Comment minimiser la vitesse de sortie avec des roues de (a) 20 dents et (b) 7 dents? ',
    options: [
      '(a) entraine (b)',
      '(b) entraine (a)',
      'Cela n’a pas d’importance',
      'Il n’y a pas de bonne réponse'
    ],
    answer: '(a) entraine (b)',
  },
   {
    question: ' Dans un système d’engrenages, des roues de différentes tailles s’entrainent en rotation depuis le mouvement initial de la manivelle.Le nombre de dents et la taille des roues influencent la vitesse de sortie qui sera transmise au moteur pour la production d’électricité. Lorsqu’une roue plus grande avec moins de dents entraine en rotation une roue plus petite avec plus de dents, la vitesse augmente, et l’inverse diminue la vitesse.Comment se comportera la vitesse si nous avons deux roues du même nombre de dents ? ',
    options: [
      'Augmente',
      'Diminue',
      'Cela n’a pas d’importance',
      'Reste pareille'
    ],
    answer: 'Reste pareille',
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
  resultContainer.innerHTML = language === 'fr' ? `Votre score est de ${score} sur ${quizData.length}!` : `You scored ${score} out of ${quizData.length}!`;
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
    incorrectAnswersHtml += language === 'en' ? `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> <span style="color: red">${incorrectAnswers[i].incorrectAnswer}</span><br>
        <strong>Correct Answer:</strong> <span style="color: green">${incorrectAnswers[i].correctAnswer} </span>
      </p>
    ` 
      : 
      `
      <p>
        <strong>Question :</strong> ${incorrectAnswers[i].question}<br>
        <strong>Votre reponse :</strong> <span style="color: red">${incorrectAnswers[i].incorrectAnswer}</span><br>
        <strong>La bonne réponse :</strong> <span style="color: green">${incorrectAnswers[i].correctAnswer} </span>
      </p>
    ` ;
  }
  
  resultContainer.innerHTML = language === 'en' ? 
    `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  ` : 
  `
    <p>Votre score est de ${score} sur ${quizData.length}!</p>
    <p>Réponses incorrectes :</p>
    ${incorrectAnswersHtml}
  `;
    
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);
languageId.addEventListener('click', changeLanguage);

displayQuestion();

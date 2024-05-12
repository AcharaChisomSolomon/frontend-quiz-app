import data from './data.json' with { "type": "json" };
const { quizzes } = data;
let quizObject = {}
let currentQuestionNum = null;
let currentListOfQuestions = [];
let numOfCorrectAnswers = 0;

//chosen
//correct
//incorrect
//correct-but-not-chosen

const themeSwitcher = document.getElementById('theme');
const themeCircle = document.getElementById('circle');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeCircle.style.marginLeft = themeCircle.style.marginLeft === '0px' ? 'auto' : '0px';
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const menuDisplay = document.getElementById('menu');
const menuOptions = document.querySelectorAll('.menu-option');
const topic = document.getElementById('topic');
const headerLogo = document.getElementById('header-logo');
const headerText = document.getElementById('header-text');
menuOptions.forEach((option) => {
    option.addEventListener('click', () => {
        quizObject = quizzes[Number(option.id)];
        currentListOfQuestions = shuffleArray(quizObject.questions);
        menuDisplay.style.display = 'none';
        topic.style.display = 'flex';
        headerLogo.classList.add(`${quizObject.title.toLowerCase()}`);
        headerText.textContent = quizObject.title;
        renderQuiz();
    });
});


const quizContainer = document.getElementById('quiz-container');
const renderQuiz = () => { 
    currentQuestionNum = !currentQuestionNum && currentQuestionNum !== 0 ? 0 : currentQuestionNum + 1;
    const currentQuestion = currentListOfQuestions[currentQuestionNum];
    const options = shuffleArray(currentQuestion.options);
    quizContainer.innerHTML = `
        <div class="question-header">
          <p>Question ${currentQuestionNum + 1} of 10</p>
          <h2>
            ${currentQuestion.question}
          </h2>
          <div class="question-progress">
            <div class="question-progress__bar" id='p-bar'></div>
          </div>
        </div>
        
        <div>
          <div class="question-options">
            <div class="question-option">
              <span class="letter">A</span>
              <p class="option-text"></p>
            </div>
            <div class="question-option">
              <span class="letter">B</span>
              <p class="option-text"></p>
            </div>
            <div class="question-option">
              <span class="letter">C</span>
              <p class="option-text"></p>
            </div>
            <div class="question-option">
              <span class="letter">D</span>
              <p class="option-text"></p>
            </div>
          </div>
        
          <div class="question-footer">
            <button class="question-footer__button" id='submit-btn'>Submit Answer</button>
            <p id="error-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                <path fill="#EE5454"
                  d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z" />
              </svg>
              <span>Please select an answer</span>
            </p>
          </div>
        </div>
    `;

    const allOptionTexts = document.querySelectorAll('.option-text');
    allOptionTexts.forEach((option, index) => {
        option.textContent = options[index];
    });

    const bar = document.getElementById('p-bar');
    bar.style.width = `${(currentQuestionNum + 1) * 10}%`;

    function handleOptionClick() {
        const allOptions = document.querySelectorAll('.question-option');
        allOptions.forEach((option) => {
            option.classList.remove('chosen');
        });
        this.classList.add('chosen');
        document.getElementById('error-text').style.display = 'none';
    }

    const allOptions = document.querySelectorAll('.question-option');
    allOptions.forEach((option) => { 
        option.addEventListener('click', handleOptionClick);
    });

    const handleSubmission = (options, qestionObj, el) => {
        if (el.target.textContent === 'Next Question') {
            if (currentQuestionNum === 9) { 
                quizContainer.innerHTML = `
                    <div class="heading">
                        <h1>
                            Quiz completed <span>You scored...</span>
                        </h1>
                        </div>

                        <div>
                        <div class="display">
                            <div class="topic">
                                <div class="topic-logo ${quizObject.title.toLowerCase()}"></div>
                                <p class="topic-title">${quizObject.title}</p>
                            </div>
                            <div class="score">${numOfCorrectAnswers}</div>
                            <div class="total">out of 10</div>
                        </div>
                        
                        <div class="completed-options">
                            <button class="complete-btn">
                            Play Again
                            </button>
                        </div>
                        </div>
                `
                const playAgainBtn = document.querySelector('.complete-btn');
                playAgainBtn.addEventListener('click', () => {
                    currentQuestionNum = null;
                    currentListOfQuestions = [];
                    numOfCorrectAnswers = 0;
                    menuDisplay.style.display = 'grid';
                    quizContainer.innerHTML = '';
                });
                return;
            }
            renderQuiz();
            return;
        } 

        if (!Array.from(options).some((option) => option.classList.contains('chosen'))) {
            document.getElementById('error-text').style.display = 'flex';
            return;
        }

        const chosenOption = Array.from(options).find((option) => option.classList.contains('chosen'));
        const chosenOptionText = chosenOption.querySelector('.option-text').textContent;
        const correctOption = Array.from(options).find((option) => option.querySelector('.option-text').textContent === qestionObj.answer);
        const correctOptionText = correctOption.querySelector('.option-text').textContent;

        if (chosenOptionText === correctOptionText) {
            chosenOption.classList.add('correct');
            numOfCorrectAnswers += 1;
        } else {
            chosenOption.classList.add('incorrect');
            correctOption.classList.add('correct-but-not-chosen');
        }

        el.target.textContent = 'Next Question';
        options.forEach((option) => {
            option.removeEventListener('click', handleOptionClick);
        });
    }

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', (el) => handleSubmission(allOptions, currentQuestion, el, handleOptionClick));
}
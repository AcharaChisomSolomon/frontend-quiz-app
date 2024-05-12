import data from './data.json' with { "type": "json" };
const { quizzes } = data;

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

const quizContainer = document.getElementById('quiz-container');
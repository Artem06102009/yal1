const quizData = {
        formulaToName: [
            { question: "H₂O", answer: "Вода", options: ["Углекислый газ", "Серная кислота", "Вода", "Аммиак"] },
            { question: "CO₂", answer: "Углекислый газ", options: ["Угарный газ", "Углекислый газ", "Сероводород", "Метан"] },
            { question: "HCl", answer: "Хлороводород", options: ["Азотная кислота", "Хлороводород", "Фосфорная кислота", "Серная кислота"] },
            { question: "H₂SO₄", answer: "Серная кислота", options: ["Азотная кислота", "Уксусная кислота", "Серная кислота", "Плавиковая кислота"] },
            { question: "NaOH", answer: "Гидроксид натрия", options: ["Гидроксид калия", "Гидроксид натрия", "Гидроксид кальция", "Гидроксид алюминия"] }
        ],
        nameToFormula: [
            { question: "Вода", answer: "H₂O", options: ["CO₂", "H₂O", "NH₃", "CH₄"] },
            { question: "Серная кислота", answer: "H₂SO₄", options: ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"] },
            { question: "Аммиак", answer: "NH₃", options: ["NH₃", "CH₄", "CO₂", "H₂O"] },
            { question: "Метан", answer: "CH₄", options: ["C₂H₆", "CH₄", "C₃H₈", "C₄H₁₀"] },
            { question: "Углекислый газ", answer: "CO₂", options: ["CO", "CO₂", "SO₂", "NO₂"] }
        ],
        valency: [
            { question: "Валентность водорода", answer: "I", options: ["I", "II", "III", "IV"] },
            { question: "Валентность кислорода", answer: "II", options: ["I", "II", "III", "IV"] },
            { question: "Валентность азота в NH₃", answer: "III", options: ["I", "II", "III", "IV"] }
        ],
        oxidation: [
            { question: "Степень окисления кислорода в H₂O", answer: "-II", options: ["-II", "-I", "0", "+II"] },
            { question: "Степень окисления водорода в HCl", answer: "+I", options: ["-I", "0", "+I", "+II"] }
        ]
    };

    const startButton = document.getElementById('startButton');
    const themeSelect = document.getElementById('themeSelect');
    const timerDiv = document.getElementById('timerDiv');
    const timeElement = document.getElementById('time');
    const gameScreen = document.getElementById('gameScreen');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const answerButton = document.getElementById('answerButton');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const totalQuestions = document.getElementById('totalQuestions');
    const resultText = document.getElementById('resultText');
    const restartButton = document.getElementById('restartButton');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const resultsScreen = document.getElementById('resultsScreen');
    const tabButtons = document.querySelectorAll('.tab-button');


    let currentMode = 'time';
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 60;
    let selectedOption = null;
    let totalQuestionsCount = 10;


    document.addEventListener('DOMContentLoaded', () => {
        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', restartGame);
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentMode = button.dataset.mode;
            });
        });
    });

    function startGame() {
        const theme = themeSelect.value;
        currentQuestions = [...quizData[theme]];
        shuffleArray(currentQuestions);
        totalQuestionsCount = currentMode === 'count' ? 10 : currentQuestions.length;
        totalQuestions.textContent = totalQuestionsCount;
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        selectedOption = null;
        welcomeScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        resultsScreen.classList.add('hidden');
        if (currentMode === 'time') {
            timerDiv.classList.remove('hidden');
            updateTimer();
            clearInterval(timer);
            timer = setInterval(updateTimer, 1000);
        } else {
            timerDiv.classList.add('hidden');
        }
        showQuestion();
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            endGame();
        }
    }

    function showQuestion() {
        if (currentQuestionIndex >= totalQuestionsCount || currentQuestionIndex >= currentQuestions.length) {
            endGame();
            return;
        }

        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        currentQuestionNum.textContent = currentQuestionIndex + 1;

        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const radioDiv = document.createElement('label');
            radioDiv.className = 'radio';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = option;

            input.addEventListener('change', () => {
                selectedOption = option;
                answerButton.disabled = false;

                document.querySelectorAll('.radio').forEach(el => {
                    el.classList.remove('selected');
                });

                radioDiv.classList.add('selected');
            });

            radioDiv.appendChild(input);
            radioDiv.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(radioDiv);
        });

        selectedOption = null;
        answerButton.disabled = true;
    }

    answerButton.addEventListener('click', () => {
        if (selectedOption === null) return;

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.disabled = true;
        });

        document.querySelectorAll('.radio').forEach(el => {
            const radioText = el.textContent.trim();

            if (radioText === currentQuestion.answer) {
                el.classList.add('correct');
            }
            else if (el.classList.contains('selected')) {
                el.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            score++;
        }

        answerButton.disabled = true;
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1000);
    });

    function endGame() {
        clearInterval(timer);
        gameScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');

        if (currentMode === 'time') {
            resultText.textContent = `Вы ответили правильно на ${score} из ${currentQuestions.length} вопросов за 1 минуту!`;
        } else {
            resultText.textContent = `Вы ответили правильно на ${score} из ${totalQuestionsCount} вопросов!`;
        }
    }

    function restartGame() {
        resultsScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

// document.addEventListener('DOMContentLoaded', () => {
//    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
//    $navbarBurgers.forEach( el => {
//      el.addEventListener('click', () => {
//        const target = el.dataset.target;
//        const $target = document.getElementById(target);
//        el.classList.toggle('is-active');
//        $target.classList.toggle('is-active');
//      });
//    });
//  });
//
//  let timerInterval;
//  let timeLeft = 60;
//
//  const timeDisplay = document.getElementById('time');
//  const startButton = document.getElementById('startButton');
//
//  function updateDisplay() {
//      const minutes = Math.floor(timeLeft / 60);
//      const seconds = timeLeft % 60;
//      timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//  }
//
//  function startTimer() {
//      if (timerInterval) return;
//      timeLeft = 60;
//      updateDisplay();
//      timerInterval = setInterval(() => {
//          if (timeLeft > 0) {
//              timeLeft--;
//              updateDisplay();
//          } else {
//              clearInterval(timerInterval);
//              timerInterval = null;
//              alert("Время вышло!");
//          }
//      }, 1000);
//  }
//
//
//  startButton.addEventListener('click', startTimer);
//
//  updateDisplay();

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
    const gameContent = document.getElementById('gameContent');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const answerButton = document.getElementById('answerButton');
    const resultDiv = document.getElementById('resultDiv');
    const resultText = document.getElementById('resultText');
    const restartButton = document.getElementById('restartButton');

    let currentMode = 'time';
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 60;
    let selectedOption = null;

    document.addEventListener('DOMContentLoaded', () => {
        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', restartGame);
    });

    function openTab(evt, tabName) {
        currentMode = tabName;
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        evt.currentTarget.classList.add('active');
    }

    function startGame() {
        const theme = themeSelect.value;
        currentQuestions = [...quizData[theme]];
        currentQuestions = shuffleArray(currentQuestions);
        if (currentMode === 'count') {
            currentQuestions = currentQuestions.slice(0, 10);
        }

        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;

        document.querySelector('.game-options').classList.add('hidden');
        gameContent.classList.remove('hidden');


        if (currentMode === 'time') {
            timerDiv.classList.remove('hidden');
            updateTimer();
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
        if (currentQuestionIndex >= currentQuestions.length) {
            endGame();
            return;
        }

        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const radioDiv = document.createElement('div');
            radioDiv.className = 'radio';
            radioDiv.id = `option-${index}`;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = option;
            input.id = `answer-${index}`;
            input.addEventListener('change', () => selectAnswer(option, radioDiv));

            const label = document.createElement('label');
            label.htmlFor = `answer-${index}`;
            label.textContent = option;

            radioDiv.appendChild(input);
            radioDiv.appendChild(label);
            optionsContainer.appendChild(radioDiv);
        });

        selectedOption = null;
        answerButton.disabled = true;
    }

    function selectAnswer(option, element) {
        document.querySelectorAll('.radio').forEach(el => {
            el.classList.remove('selected');
        });


        element.classList.add('selected');
        selectedOption = option;
        answerButton.disabled = false;
    }

    answerButton.addEventListener('click', () => {
        if (selectedOption === null) return;

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;
        document.querySelectorAll('.radio').forEach(el => {
            if (el.textContent.includes(currentQuestion.answer)) {
                el.classList.add('correct-answer');
            }
            if (el.classList.contains('selected') && !isCorrect) {
                el.classList.add('wrong-answer');
            }
        });

        if (isCorrect) {
            score++;
        }

        answerButton.disabled = true;
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 500);
    });

    function endGame() {
        clearInterval(timer);
        gameContent.classList.add('hidden');
        resultDiv.classList.remove('hidden');

        if (currentMode === 'time') {
            resultText.textContent = `Вы ответили правильно на ${score} из ${currentQuestions.length} вопросов за 1 минуту!`;
        } else {
            resultText.textContent = `Вы ответили правильно на ${score} из ${currentQuestions.length} вопросов!`;
        }
    }

    function restartGame() {
        resultDiv.classList.add('hidden');
        document.querySelector('.game-options').classList.remove('hidden');
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }



<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Химическая викторина</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .game-container {
            display: flex;
            max-width: 1200px;
            margin: 50px auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            min-height: 600px;
        }
        .settings-panel {
            width: 30%;
            padding: 30px;
            border-right: 1px solid #eee;
        }
        .game-panel {
            width: 70%;
            padding: 30px;
            position: relative;
        }
        .tabs {
            margin-bottom: 20px;
        }
        .tab-button {
            width: 100%;
            text-align: center;
            border: none;
            background: none;
            cursor: pointer;
            padding: 10px;
            font-size: 14px;
        }
        .tab-button.active {
            background-color: #485fc7;
            color: white;
            border-radius: 4px;
        }
        .select {
            width: 100%;
            margin: 20px 0;
        }
        .start-btn {
            width: 100%;
            margin-top: 30px;
        }
        .question-container {
            display: none;
            height: 100%;
        }
        .active-panel {
            display: block;
        }
        .timer {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #485fc7;
            margin-bottom: 20px;
        }
        .question {
            font-size: 20px;
            margin-bottom: 30px;
            min-height: 60px;
        }
        .options {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
        }
        .option {
            display: flex;
            align-items: center;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
        }
        .option:hover {
            background-color: #f5f5f5;
        }
        .option.selected {
            border-color: #485fc7;
            background-color: #f0f4ff;
        }
        .option.correct {
            background-color: #48c774;
            color: white;
        }
        .option.incorrect {
            background-color: #f14668;
            color: white;
        }
        .answer-btn {
            width: 100%;
            margin-top: 20px;
        }
        .results {
            display: none;
            text-align: center;
            padding: 20px;
        }
        .results-title {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .restart-btn {
            margin-top: 30px;
        }
        .progress-info {
            text-align: center;
            margin-bottom: 20px;
            font-size: 16px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <!-- Панель настроек -->
        <div class="settings-panel">
            <h1 class="title is-3">Настройки игры</h1>
            <div class="tabs is-toggle">
                <button class="tab-button active" data-mode="time">На время</button>
                <button class="tab-button" data-mode="count">На количество</button>
            </div>
            <div class="select">
                <select id="themeSelect">
                    <option value="formulaToName">Формула → Название</option>
                    <option value="nameToFormula">Название → Формула</option>
                    <option value="valency">Валентность</option>
                    <option value="oxidation">Степень окисления</option>
                </select>
            </div>
            <button id="startBtn" class="button is-primary is-medium start-btn">Начать игру</button>
        </div>

        <!-- Игровая панель -->
        <div class="game-panel">
            <!-- Экран приветствия -->
            <div id="welcomeScreen" class="active-panel" style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <div style="text-align: center;">
                    <h2 class="title is-4">Выберите настройки и нажмите "Начать игру"</h2>
                    <p>Игра начнется в правой части экрана</p>
                </div>
            </div>

            <!-- Игровой экран -->
            <div id="gameScreen" class="question-container">
                <div class="timer" id="timer">01:00</div>
                <div class="progress-info">
                    Вопрос <span id="currentQuestionNum">1</span> из <span id="totalQuestions">10</span>
                </div>
                <div class="question" id="questionText"></div>
                <div class="options" id="optionsContainer"></div>
                <button id="answerBtn" class="button is-primary is-medium answer-btn" disabled>Ответить</button>
            </div>

            <!-- Экран результатов -->
            <div id="resultsScreen" class="question-container results">
                <h2 class="title is-3 results-title">Игра завершена!</h2>
                <div class="result-text" id="resultText"></div>
                <button id="restartBtn" class="button is-primary is-medium restart-btn">Играть снова</button>
            </div>
        </div>
    </div>

    <script>
        // Данные для викторины
        const quizData = {
            formulaToName: [
                { question: "H₂O", answer: "Вода", options: ["Углекислый газ", "Серная кислота", "Вода", "Аммиак"] },
                { question: "CO₂", answer: "Углекислый газ", options: ["Угарный газ", "Углекислый газ", "Сероводород", "Метан"] },
                { question: "HCl", answer: "Хлороводород", options: ["Азотная кислота", "Хлороводород", "Фосфорная кислота", "Серная кислота"] },
                { question: "H₂SO₄", answer: "Серная кислота", options: ["Азотная кислота", "Уксусная кислота", "Серная кислота", "Плавиковая кислота"] },
                { question: "NaOH", answer: "Гидроксид натрия", options: ["Гидроксид калия", "Гидроксид натрия", "Гидроксид кальция", "Гидроксид алюминия"] },
                { question: "NaCl", answer: "Хлорид натрия", options: ["Карбонат натрия", "Хлорид натрия", "Сульфат натрия", "Нитрат натрия"] },
                { question: "NH₃", answer: "Аммиак", options: ["Азотная кислота", "Аммиак", "Метан", "Этан"] },
                { question: "CH₄", answer: "Метан", options: ["Этан", "Пропан", "Метан", "Бутан"] },
                { question: "CaCO₃", answer: "Карбонат кальция", options: ["Карбонат кальция", "Сульфат кальция", "Нитрат кальция", "Фосфат кальция"] },
                { question: "HNO₃", answer: "Азотная кислота", options: ["Азотная кислота", "Серная кислота", "Фосфорная кислота", "Соляная кислота"] }
            ],
            nameToFormula: [
                { question: "Вода", answer: "H₂O", options: ["CO₂", "H₂O", "NH₃", "CH₄"] },
                { question: "Серная кислота", answer: "H₂SO₄", options: ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"] },
                { question: "Аммиак", answer: "NH₃", options: ["NH₃", "CH₄", "CO₂", "H₂O"] },
                { question: "Метан", answer: "CH₄", options: ["C₂H₆", "CH₄", "C₃H₈", "C₄H₁₀"] },
                { question: "Углекислый газ", answer: "CO₂", options: ["CO", "CO₂", "SO₂", "NO₂"] },
                { question: "Хлорид натрия", answer: "NaCl", options: ["NaCl", "NaOH", "Na₂CO₃", "NaNO₃"] },
                { question: "Азотная кислота", answer: "HNO₃", options: ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"] },
                { question: "Гидроксид натрия", answer: "NaOH", options: ["KOH", "NaOH", "Ca(OH)₂", "Al(OH)₃"] },
                { question: "Карбонат кальция", answer: "CaCO₃", options: ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"] },
                { question: "Хлороводород", answer: "HCl", options: ["H₂SO₄", "HNO₃", "HCl", "H₃PO₄"] }
            ],
            valency: [
                { question: "Валентность водорода", answer: "I", options: ["I", "II", "III", "IV"] },
                { question: "Валентность кислорода", answer: "II", options: ["I", "II", "III", "IV"] },
                { question: "Валентность азота в NH₃", answer: "III", options: ["I", "II", "III", "IV"] },
                { question: "Валентность углерода в CH₄", answer: "IV", options: ["I", "II", "III", "IV"] },
                { question: "Валентность серы в H₂SO₄", answer: "VI", options: ["II", "IV", "VI", "VIII"] }
            ],
            oxidation: [
                { question: "Степень окисления кислорода в H₂O", answer: "-II", options: ["-II", "-I", "0", "+II"] },
                { question: "Степень окисления водорода в HCl", answer: "+I", options: ["-I", "0", "+I", "+II"] },
                { question: "Степень окисления азота в NH₃", answer: "-III", options: ["-III", "-II", "+III", "+V"] },
                { question: "Степень окисления серы в H₂SO₄", answer: "+VI", options: ["+II", "+IV", "+VI", "+VIII"] },
                { question: "Степень окисления углерода в CO₂", answer: "+IV", options: ["-IV", "0", "+II", "+IV"] }
            ]
        };

        // Элементы DOM
        const startBtn = document.getElementById('startBtn');
        const themeSelect = document.getElementById('themeSelect');
        const timerElement = document.getElementById('timer');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const answerBtn = document.getElementById('answerBtn');
        const currentQuestionNum = document.getElementById('currentQuestionNum');
        const totalQuestions = document.getElementById('totalQuestions');
        const resultText = document.getElementById('resultText');
        const restartBtn = document.getElementById('restartBtn');
        const welcomeScreen = document.getElementById('welcomeScreen');
        const gameScreen = document.getElementById('gameScreen');
        const resultsScreen = document.getElementById('resultsScreen');
        const tabButtons = document.querySelectorAll('.tab-button');

        // Переменные игры
        let currentMode = 'time';
        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let timer;
        let timeLeft = 60;
        let selectedOption = null;
        let totalQuestionsCount = 10;

        // Инициализация
        document.addEventListener('DOMContentLoaded', () => {
            startBtn.addEventListener('click', startGame);
            restartBtn.addEventListener('click', restartGame);

            // Обработчики вкладок
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

            // Перемешиваем вопросы
            shuffleArray(currentQuestions);

            // Устанавливаем количество вопросов
            totalQuestionsCount = currentMode === 'count' ? 10 : currentQuestions.length;
            totalQuestions.textContent = totalQuestionsCount;

            // Сброс состояния игры
            currentQuestionIndex = 0;
            score = 0;
            timeLeft = 60;
            selectedOption = null;

            // Переключаем экраны
            welcomeScreen.style.display = 'none';
            gameScreen.style.display = 'block';
            resultsScreen.style.display = 'none';

            // Настройка таймера
            if (currentMode === 'time') {
                timerElement.style.display = 'block';
                updateTimer();
                clearInterval(timer);
                timer = setInterval(updateTimer, 1000);
            } else {
                timerElement.style.display = 'none';
            }

            showQuestion();
        }

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

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

            // Очищаем предыдущие варианты
            optionsContainer.innerHTML = '';

            // Создаем новые варианты ответов
            currentQuestion.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => selectAnswer(option, optionElement));
                optionsContainer.appendChild(optionElement);
            });

            // Сброс выбранного ответа
            selectedOption = null;
            answerBtn.disabled = true;

            // Включаем все варианты
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
        }

        function selectAnswer(option, element) {
            // Снимаем выделение со всех вариантов
            document.querySelectorAll('.option').forEach(el => {
                el.classList.remove('selected');
            });

            // Выделяем выбранный вариант
            element.classList.add('selected');
            selectedOption = option;
            answerBtn.disabled = false;
        }

        answerBtn.addEventListener('click', () => {
            if (selectedOption === null) return;

            const currentQuestion = currentQuestions[currentQuestionIndex];
            const isCorrect = selectedOption === currentQuestion.answer;

            // Подсветка результатов
            document.querySelectorAll('.option').forEach(el => {
                if (el.textContent === currentQuestion.answer) {
                    el.classList.add('correct');
                } else if (el.classList.contains('selected')) {
                    el.classList.add('incorrect');
                }
                el.style.pointerEvents = 'none'; // Отключаем клики
            });

            if (isCorrect) {
                score++;
            }

            // Переход к следующему вопросу через 1.5 секунды
            answerBtn.disabled = true;
            setTimeout(() => {
                currentQuestionIndex++;
                showQuestion();
            }, 1500);
        });

        function endGame() {
            clearInterval(timer);
            gameScreen.style.display = 'none';
            resultsScreen.style.display = 'block';

            if (currentMode === 'time') {
                resultText.innerHTML = `
                    <p>Время вышло!</p>
                    <p class="is-size-4" style="margin-top: 10px;">Правильных ответов: ${score} из ${currentQuestionIndex}</p>
                    <p>Процент правильных: ${Math.round((score / currentQuestionIndex) * 100)}%</p>
                `;
            } else {
                resultText.innerHTML = `
                    <p>Игра завершена!</p>
                    <p class="is-size-4" style="margin-top: 10px;">Правильных ответов: ${score} из ${totalQuestionsCount}</p>
                    <p>Процент правильных: ${Math.round((score / totalQuestionsCount) * 100)}%</p>
                `;
            }
        }

        function restartGame() {
            resultsScreen.style.display = 'none';
            welcomeScreen.style.display = 'flex';
        }

        // Вспомогательная функция для перемешивания массива
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    </script>
</body>
</html>
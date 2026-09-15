// =====================================================
// SCHOOL ROAD — SYSTEM OF WALKS
// =====================================================

const world = document.getElementById("world");
const player = document.getElementById("player");

const checkpointsEl =
    document.getElementById("checkpoints");

const scoreEl =
    document.getElementById("score");

const progressEl =
    document.getElementById("progress");

const toast =
    document.getElementById("toast");

const intro =
    document.getElementById("intro");

const challenge =
    document.getElementById("challenge");

const finish =
    document.getElementById("finish");

const questionEl =
    document.getElementById("question");

const answersEl =
    document.getElementById("answers");

const feedbackEl =
    document.getElementById("feedback");

const challengeNumber =
    document.getElementById("challengeNumber");

const challengeType =
    document.getElementById("challengeType");

const finalScore =
    document.getElementById("finalScore");

const missionText =
    document.getElementById("missionText");


// =====================================================
// СОСТОЯНИЕ ИГРЫ
// =====================================================

let started = false;

let locked = false;

let currentQuestion = 0;

let totalScore = 0;

let walkNumber = 0;

let audio = null;


// =====================================================
// ВСЕ ПРОГУЛКИ
// =====================================================

const walks = [

    // =================================================
    // ПРОГУЛКА 1
    // =================================================

    {

        name: "Дорога из школы",

        emoji: "🏫",

        description:
            "Первая прогулка. Простые английские слова.",

        path: [

            [12, 27],
            [24, 34],
            [39, 29],
            [54, 36],
            [68, 45],
            [57, 55],
            [43, 65],
            [29, 69],
            [18, 61],
            [34, 78],
            [55, 82],
            [78, 86]

        ],

        questions: [

            {
                type: "VOCABULARY",
                q: "Что значит APPLE?",
                a: [
                    "яблоко",
                    "дом",
                    "собака",
                    "вода"
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит HOUSE?",
                a: [
                    "школа",
                    "дом",
                    "машина",
                    "друг"
                ],
                correct: 1
            },

            {
                type: "WORD",
                q: "Выбери букву: C _ T",
                a: [
                    "A",
                    "E",
                    "O",
                    "U"
                ],
                correct: 0
            },

            {
                type: "TRANSLATION",
                q: "Как сказать «Я люблю музыку»?",
                a: [
                    "I like music.",
                    "I am music.",
                    "I play school.",
                    "I have water."
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит FRIEND?",
                a: [
                    "семья",
                    "учитель",
                    "друг",
                    "город"
                ],
                correct: 2
            },

            {
                type: "GRAMMAR",
                q: "She ___ happy.",
                a: [
                    "am",
                    "is",
                    "are",
                    "be"
                ],
                correct: 1
            },

            {
                type: "VOCABULARY",
                q: "Что значит WATER?",
                a: [
                    "еда",
                    "вода",
                    "молоко",
                    "солнце"
                ],
                correct: 1
            },

            {
                type: "WORD ORDER",
                q: "Собери: «Я иду в школу»",
                a: [
                    "I school go.",
                    "I go to school.",
                    "Go I school.",
                    "I to go school."
                ],
                correct: 1
            },

            {
                type: "VOCABULARY",
                q: "Что значит BEAUTIFUL?",
                a: [
                    "быстрый",
                    "маленький",
                    "красивый",
                    "холодный"
                ],
                correct: 2
            },

            {
                type: "GRAMMAR",
                q: "They ___ students.",
                a: [
                    "is",
                    "am",
                    "are",
                    "be"
                ],
                correct: 2
            },

            {
                type: "TRANSLATION",
                q: "Как сказать «У меня есть книга»?",
                a: [
                    "I have a book.",
                    "I am a book.",
                    "I book have.",
                    "I has book."
                ],
                correct: 0
            },

            {
                type: "FINAL",
                q: "What is the opposite of BIG?",
                a: [
                    "long",
                    "small",
                    "fast",
                    "hot"
                ],
                correct: 1
            }

        ]

    },


    // =================================================
    // ПРОГУЛКА 2
    // =================================================

    {

        name: "Вечерний район",

        emoji: "🌆",

        description:
            "Новые слова и немного больше грамматики.",

        path: [

            [18, 35],
            [31, 27],
            [47, 35],
            [64, 28],
            [80, 38],
            [70, 51],
            [54, 58],
            [40, 52],
            [27, 61],
            [18, 73],
            [42, 82],
            [73, 78]

        ],

        questions: [

            {
                type: "VOCABULARY",
                q: "Что значит STREET?",
                a: [
                    "улица",
                    "дерево",
                    "окно",
                    "река"
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит CAR?",
                a: [
                    "велосипед",
                    "машина",
                    "дом",
                    "школа"
                ],
                correct: 1
            },

            {
                type: "VOCABULARY",
                q: "Что значит EVENING?",
                a: [
                    "утро",
                    "ночь",
                    "вечер",
                    "день"
                ],
                correct: 2
            },

            {
                type: "GRAMMAR",
                q: "I ___ coffee every morning.",
                a: [
                    "drink",
                    "drinks",
                    "drinking",
                    "drank"
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит WINDOW?",
                a: [
                    "дверь",
                    "стена",
                    "окно",
                    "крыша"
                ],
                correct: 2
            },

            {
                type: "TRANSLATION",
                q: "Как сказать «Я живу в городе»?",
                a: [
                    "I live in the city.",
                    "I city live.",
                    "I am city.",
                    "I living city."
                ],
                correct: 0
            },

            {
                type: "GRAMMAR",
                q: "He ___ football every Sunday.",
                a: [
                    "play",
                    "plays",
                    "playing",
                    "played"
                ],
                correct: 1
            },

            {
                type: "VOCABULARY",
                q: "Что значит FAST?",
                a: [
                    "медленный",
                    "быстрый",
                    "тихий",
                    "маленький"
                ],
                correct: 1
            },

            {
                type: "TRANSLATION",
                q: "Как сказать «Где магазин?»",
                a: [
                    "Where is the shop?",
                    "Where shop?",
                    "Shop where is?",
                    "Where the shop?"
                ],
                correct: 0
            },

            {
                type: "GRAMMAR",
                q: "We ___ watching TV now.",
                a: [
                    "is",
                    "am",
                    "are",
                    "be"
                ],
                correct: 2
            },

            {
                type: "VOCABULARY",
                q: "Что значит WEATHER?",
                a: [
                    "погода",
                    "время",
                    "дорога",
                    "еда"
                ],
                correct: 0
            },

            {
                type: "FINAL",
                q: "Choose the correct sentence.",
                a: [
                    "She like music.",
                    "She likes music.",
                    "She liking music.",
                    "She does likes music."
                ],
                correct: 1
            }

        ]

    },


    // =================================================
    // ПРОГУЛКА 3
    // =================================================

    {

        name: "Парк и центр города",

        emoji: "🌳",

        description:
            "Финальная прогулка. Слова становятся сложнее.",

        path: [

            [10, 42],
            [24, 32],
            [38, 24],
            [54, 30],
            [70, 24],
            [84, 35],
            [73, 48],
            [59, 56],
            [43, 63],
            [28, 70],
            [45, 81],
            [72, 87]

        ],

        questions: [

            {
                type: "VOCABULARY",
                q: "Что значит ADVENTURE?",
                a: [
                    "приключение",
                    "погода",
                    "магазин",
                    "праздник"
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит DANGEROUS?",
                a: [
                    "безопасный",
                    "опасный",
                    "красивый",
                    "быстрый"
                ],
                correct: 1
            },

            {
                type: "VOCABULARY",
                q: "Что значит JOURNEY?",
                a: [
                    "путешествие",
                    "еда",
                    "комната",
                    "урок"
                ],
                correct: 0
            },

            {
                type: "GRAMMAR",
                q: "Yesterday I ___ to the park.",
                a: [
                    "go",
                    "goes",
                    "went",
                    "going"
                ],
                correct: 2
            },

            {
                type: "TRANSLATION",
                q: "«Я уже сделал домашнее задание».",
                a: [
                    "I already did my homework.",
                    "I already do homework.",
                    "I homework already.",
                    "I am homework."
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит CHOICE?",
                a: [
                    "выбор",
                    "ошибка",
                    "ответ",
                    "вопрос"
                ],
                correct: 0
            },

            {
                type: "GRAMMAR",
                q: "If it rains, I ___ stay home.",
                a: [
                    "will",
                    "would",
                    "am",
                    "did"
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит CONFIDENT?",
                a: [
                    "уверенный",
                    "грустный",
                    "голодный",
                    "сонный"
                ],
                correct: 0
            },

            {
                type: "TRANSLATION",
                q: "«Я хочу выучить английский».",
                a: [
                    "I want to learn English.",
                    "I want learning English.",
                    "I English learn.",
                    "I am learn English."
                ],
                correct: 0
            },

            {
                type: "VOCABULARY",
                q: "Что значит EXPERIENCE?",
                a: [
                    "опыт",
                    "экзамен",
                    "возможность",
                    "план"
                ],
                correct: 0
            },

            {
                type: "GRAMMAR",
                q: "She has ___ this book before.",
                a: [
                    "read",
                    "reads",
                    "reading",
                    "reader"
                ],
                correct: 0
            },

            {
                type: "FINAL",
                q: "Choose the correct sentence.",
                a: [
                    "English is easy with practice.",
                    "English easy practice.",
                    "English are easy.",
                    "Practice English is."
                ],
                correct: 0
            }

        ]

    }

];


// =====================================================
// ТЕКУЩАЯ ПРОГУЛКА
// =====================================================

function getWalk() {

    return walks[walkNumber];

}


// =====================================================
// СОЗДАНИЕ ТОЧЕК
// =====================================================

function createCheckpoints() {

    checkpointsEl.innerHTML = "";

    const walk = getWalk();

    walk.path.forEach(
        (position, index) => {

            const point =
                document.createElement("div");

            point.className =
                "checkpoint";

            if (index === 0) {

                point.classList.add(
                    "current"
                );

            }

            point.textContent =
                index + 1;

            point.style.left =
                `calc(${position[0]}% - 24px)`;

            point.style.top =
                `calc(${position[1]}% - 24px)`;

            checkpointsEl.appendChild(point);

        }
    );

}


// =====================================================
// ПОСТАВИТЬ ИГРОКА
// =====================================================

function placePlayerAt(index) {

    const walk = getWalk();

    const [x, y] =
        walk.path[index];

    player.style.left =
        `calc(${x}% - 29px)`;

    player.style.top =
        `calc(${y}% - 29px)`;

}


// =====================================================
// ОБНОВИТЬ HUD
// =====================================================

function updateHUD() {

    scoreEl.textContent =
        totalScore;

    progressEl.textContent =
        `${currentQuestion}/12`;

    const walk =
        getWalk();

    missionText.textContent =
        `${walk.emoji} ${walk.name} — испытание ${currentQuestion + 1} из 12`;

}


// =====================================================
// УВЕДОМЛЕНИЕ
// =====================================================

function showToast(text) {

    toast.textContent = text;

    toast.classList.add("show");

    setTimeout(
        () => {

            toast.classList.remove("show");

        },
        1500
    );

}


// =====================================================
// ЗВУК
// =====================================================

function beep(correct = true) {

    if (!audio) {

        audio =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    const now =
        audio.currentTime;

    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();

    oscillator.type =
        correct
            ? "sine"
            : "sawtooth";

    oscillator.frequency.setValueAtTime(
        correct ? 560 : 190,
        now
    );

    oscillator.frequency
        .exponentialRampToValueAtTime(
            correct ? 880 : 90,
            now + .22
        );

    gain.gain.setValueAtTime(
        .0001,
        now
    );

    gain.gain
        .exponentialRampToValueAtTime(
            .18,
            now + .02
        );

    gain.gain
        .exponentialRampToValueAtTime(
            .0001,
            now + .32
        );

    oscillator.connect(gain);

    gain.connect(audio.destination);

    oscillator.start(now);

    oscillator.stop(now + .33);

}


// =====================================================
// ОТКРЫТЬ ЗАДАНИЕ
// =====================================================

function openChallenge() {

    if (
        locked ||
        currentQuestion >= 12
    ) {
        return;
    }

    locked = true;

    const walk =
        getWalk();

    const task =
        walk.questions[currentQuestion];

    challengeNumber.textContent =
        `ИСПЫТАНИЕ ${currentQuestion + 1}/12`;

    challengeType.textContent =
        task.type;

    questionEl.textContent =
        task.q;

    feedbackEl.textContent =
        "";

    answersEl.innerHTML =
        "";


    task.a.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        index,
                        button
                    );

                }
            );

            answersEl.appendChild(
                button
            );

        }
    );


    challenge.classList.remove(
        "hidden"
    );

}


// =====================================================
// ОТВЕТ
// =====================================================

function answerQuestion(
    index,
    button
) {

    if (button.dataset.done) {
        return;
    }

    const walk =
        getWalk();

    const task =
        walk.questions[currentQuestion];

    button.dataset.done =
        "1";


    // ==========================================
    // ПРАВИЛЬНЫЙ ОТВЕТ
    // ==========================================

    if (
        index === task.correct
    ) {

        button.classList.add(
            "correct"
        );

        feedbackEl.textContent =
            "✨ Правильно! +10";

        totalScore += 10;

        beep(true);


        const buttons =
            [...answersEl.children];

        buttons.forEach(
            button => {
                button.disabled = true;
            }
        );


        setTimeout(
            () => {

                challenge.classList.add(
                    "hidden"
                );


                markPassed(
                    currentQuestion
                );


                currentQuestion++;


                updateHUD();


                // ==================================
                // ПРОГУЛКА ЗАКОНЧИЛАСЬ
                // ==================================

                if (
                    currentQuestion >= 12
                ) {

                    finishWalk();

                }

                else {

                    locked = false;

                    setCurrentCheckpoint();

                    showToast(
                        `Следующая точка: ${currentQuestion + 1}`
                    );

                }

            },
            850
        );

    }

    // ==========================================
    // ОШИБКА
    // ==========================================

    else {

        button.classList.add(
            "wrong"
        );

        feedbackEl.textContent =
            "❌ Неверно. Попробуй ещё раз.";

        beep(false);


        setTimeout(
            () => {

                button.classList.remove(
                    "wrong"
                );

                button.dataset.done =
                    "";

                feedbackEl.textContent =
                    "";

            },
            700
        );

    }

}


// =====================================================
// ТОЧКА ПРОЙДЕНА
// =====================================================

function markPassed(index) {

    const point =
        checkpointsEl.children[index];

    point.classList.remove(
        "current"
    );

    point.classList.add(
        "done"
    );

    point.textContent =
        "✓";

}


// =====================================================
// СЛЕДУЮЩАЯ ТОЧКА
// =====================================================

function setCurrentCheckpoint() {

    const point =
        checkpointsEl.children[currentQuestion];

    if (point) {

        point.classList.add(
            "current"
        );

    }

}


// =====================================================
// РАССТОЯНИЕ ДО ТОЧКИ
// =====================================================

function distanceToCheckpoint() {

    const walk =
        getWalk();

    const [x, y] =
        walk.path[currentQuestion];

    const px =
        player.offsetLeft +
        player.offsetWidth / 2;

    const py =
        player.offsetTop +
        player.offsetHeight / 2;

    const tx =
        world.clientWidth * x / 100;

    const ty =
        world.clientHeight * y / 100;

    return Math.hypot(
        px - tx,
        py - ty
    );

}


// =====================================================
// ДВИЖЕНИЕ
// =====================================================

function move(dx, dy) {

    if (
        !started ||
        locked
    ) {
        return;
    }

    let x =
        player.offsetLeft + dx;

    let y =
        player.offsetTop + dy;


    x = Math.max(
        8,
        Math.min(
            world.clientWidth - 66,
            x
        )
    );


    y = Math.max(
        110,
        Math.min(
            world.clientHeight - 70,
            y
        )
    );


    player.style.left =
        x + "px";

    player.style.top =
        y + "px";


    if (
        distanceToCheckpoint() < 55
    ) {

        openChallenge();

    }

}


// =====================================================
// ЗАКОНЧИЛАСЬ ПРОГУЛКА
// =====================================================

function finishWalk() {

    locked = true;

    finalScore.textContent =
        totalScore;


    const isLastWalk =
        walkNumber === walks.length - 1;


    if (isLastWalk) {

        // Последняя прогулка

        finish.querySelector("h1")
            .textContent =
            "🏆 Ты прошёл игру!";


        finish.querySelector("p")
            .textContent =
            "Ты прошёл все прогулки и выучил множество новых английских слов.";


        document
            .getElementById("againBtn")
            .textContent =
            "🔄 НАЧАТЬ ЗАНОВО";

    }

    else {

        // Есть следующая прогулка

        finish.querySelector("h1")
            .textContent =
            "🎉 Прогулка завершена!";


        finish.querySelector("p")
            .textContent =
            `${getWalk().name} пройдена! Готов к следующему маршруту?`;


        document
            .getElementById("againBtn")
            .textContent =
            "➡️ СЛЕДУЮЩАЯ ПРОГУЛКА";

    }


    finish.classList.remove(
        "hidden"
    );

}


// =====================================================
// НАЧАЛО ИГРЫ
// =====================================================

function startGame() {

    if (
        audio &&
        audio.state === "suspended"
    ) {

        audio.resume();

    }


    started = true;

    locked = false;

    currentQuestion = 0;


    intro.classList.add(
        "hidden"
    );

    finish.classList.add(
        "hidden"
    );


    createCheckpoints();

    placePlayerAt(0);

    updateHUD();


    showToast(
        `${getWalk().emoji} ${getWalk().name}`
    );

}


// =====================================================
// КНОПКА СТАРТА
// =====================================================

document
    .getElementById("startBtn")
    .addEventListener(
        "click",
        () => {

            walkNumber = 0;

            totalScore = 0;

            startGame();

        }
    );


// =====================================================
// КНОПКА ПОСЛЕ ПРОГУЛКИ
// =====================================================

document
    .getElementById("againBtn")
    .addEventListener(
        "click",
        () => {

            // Если это последняя прогулка
            if (
                walkNumber >= walks.length - 1
            ) {

                walkNumber = 0;

                totalScore = 0;

            }

            else {

                // Переходим дальше
                walkNumber++;

            }


            startGame();

        }
    );


// =====================================================
// КНОПКИ ТЕЛЕФОНА
// =====================================================

document
    .querySelectorAll("[data-dir]")
    .forEach(
        button => {

            button.addEventListener(
                "pointerdown",
                event => {

                    event.preventDefault();

                    const direction =
                        button.dataset.dir;

                    const step =
                        Math.max(
                            18,
                            Math.min(
                                35,
                                world.clientWidth / 28
                            )
                        );


                    if (
                        direction === "left"
                    ) {

                        move(-step, 0);

                    }

                    if (
                        direction === "right"
                    ) {

                        move(step, 0);

                    }

                    if (
                        direction === "up"
                    ) {

                        move(0, -step);

                    }

                    if (
                        direction === "down"
                    ) {

                        move(0, step);

                    }

                }
            );

        }
    );


// =====================================================
// КЛАВИАТУРА
// =====================================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowLeft"
        ) {

            move(-24, 0);

        }

        if (
            event.key === "ArrowRight"
        ) {

            move(24, 0);

        }

        if (
            event.key === "ArrowUp"
        ) {

            move(0, -24);

        }

        if (
            event.key === "ArrowDown"
        ) {

            move(0, 24);

        }

    }
);


// =====================================================
// АДАПТАЦИЯ ПРИ ИЗМЕНЕНИИ ЭКРАНА
// =====================================================

window.addEventListener(
    "resize",
    () => {

        if (
            started &&
            !locked &&
            currentQuestion < 12
        ) {

            placePlayerAt(
                currentQuestion
            );

        }

    }
);


// =====================================================
// ПЕРВОНАЧАЛЬНАЯ КАРТА
// =====================================================

createCheckpoints();

placePlayerAt(0);
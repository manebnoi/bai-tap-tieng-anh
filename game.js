document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const introScreen = document.getElementById('intro-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');

    const startButton = document.getElementById('startButton');
    const playAgainButton = document.getElementById('playAgainButton');

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const smallRewardsEl = document.getElementById('small-rewards');
    const finalRewardsEl = document.getElementById('final-rewards');
    const endMessageEl = document.getElementById('end-message');
    const questionImageEl = document.getElementById('question-image');
    const questionTextEl = document.getElementById('question-text');
    const answerChoicesEl = document.getElementById('answer-choices');
    const feedbackEl = document.getElementById('feedback');
    const gameBoardEl = document.getElementById('game-board');
    const characterEl = document.getElementById('character');

    // Audio elements
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    const moveSound = document.getElementById('move-sound');
    const rewardSound = document.getElementById('reward-sound');
    const winSound = document.getElementById('win-sound');

    // --- Game Data ---
    // "Không giới hạn" kiến thức cấp 2 có nghĩa là bạn có thể thêm rất nhiều câu.
    // Dưới đây là ví dụ 40 câu.
    const questions = [
        {
            id: 1, question: "Choose the correct past tense of 'go'.", 
            options: ["Went", "Gone", "Goes", "Going"], answer: "Went", image: "assets/verbs/go.png"
        },
        {
            id: 2, question: "Which word means 'happy'?", 
            options: ["Sad", "Angry", "Joyful", "Tired"], answer: "Joyful", image: "assets/emotions/happy.png"
        },
        {
            id: 3, question: "What is the plural of 'child'?", 
            options: ["Childs", "Children", "Childen", "Childs'"], answer: "Children", image: "assets/plural/child.png"
        },
        {
            id: 4, question: "Complete the sentence: She ___ to the store yesterday.", 
            options: ["goes", "go", "went", "gone"], answer: "went", image: "assets/grammar/past_simple.png"
        },
        {
            id: 5, question: "Choose the correct preposition: The book is ___ the table.", 
            options: ["in", "on", "at", "under"], answer: "on", image: "assets/prepositions/on.png"
        },
        {
            id: 6, question: "Which is a synonym for 'big'?", 
            options: ["Small", "Large", "Tiny", "Short"], answer: "Large", image: "assets/synonyms/big.png"
        },
        {
            id: 7, question: "What is the present participle of 'run'?", 
            options: ["Run", "Runs", "Running", "Ran"], answer: "Running", image: "assets/verbs/run.png"
        },
        {
            id: 8, question: "Choose the correct article: I saw ___ elephant.", 
            options: ["a", "an", "the", "no article"], answer: "an", image: "assets/grammar/an.png"
        },
        {
            id: 9, question: "Which word means 'fast'?", 
            options: ["Slow", "Quick", "Quiet", "Lazy"], answer: "Quick", image: "assets/adjectives/fast.png"
        },
        {
            id: 10, question: "What is the opposite of 'hot'?", 
            options: ["Warm", "Cold", "Cool", "Freezing"], answer: "Cold", image: "assets/opposites/hot.png"
        },
        {
            id: 11, question: "Complete the sentence: They ___ playing soccer right now.", 
            options: ["is", "are", "am", "be"], answer: "are", image: "assets/grammar/present_continuous.png"
        },
        {
            id: 12, question: "Which word is a fruit?", 
            options: ["Carrot", "Broccoli", "Apple", "Potato"], answer: "Apple", image: "assets/food/apple.png"
        },
        {
            id: 13, question: "What is the past tense of 'eat'?", 
            options: ["Eats", "Eating", "Ate", "Eaten"], answer: "Ate", image: "assets/verbs/eat.png"
        },
        {
            id: 14, question: "Choose the correct possessive pronoun: This is ___ book.", 
            options: ["I", "me", "my", "mine"], answer: "my", image: "assets/grammar/possessive_pronoun.png"
        },
        {
            id: 15, question: "Which word means 'a place to live'?", 
            options: ["School", "Hospital", "House", "Office"], answer: "House", image: "assets/places/house.png"
        },
        {
            id: 16, question: "What is the plural of 'mouse'?", 
            options: ["Mouses", "Mice", "Mousies", "Mouse"], answer: "Mice", image: "assets/plural/mouse.png"
        },
        {
            id: 17, question: "Complete the sentence: He ___ very tired after the game.", 
            options: ["is", "are", "was", "were"], answer: "was", image: "assets/grammar/past_simple_be.png"
        },
        {
            id: 18, question: "Which is a mode of transport?", 
            options: ["Chair", "Table", "Bicycle", "Lamp"], answer: "Bicycle", image: "assets/transport/bicycle.png"
        },
        {
            id: 19, question: "What is the opposite of 'full'?", 
            options: ["Big", "Empty", "Heavy", "Open"], answer: "Empty", image: "assets/opposites/full.png"
        },
        {
            id: 20, question: "Choose the correct comparative adjective: This car is ___ than that one.", 
            options: ["fast", "faster", "fastest", "more fast"], answer: "faster", image: "assets/grammar/comparative.png"
        },
        {
            id: 21, question: "Which word describes a color?", 
            options: ["Run", "Jump", "Blue", "Read"], answer: "Blue", image: "assets/colors/blue.png"
        },
        {
            id: 22, question: "What is the past tense of 'see'?", 
            options: ["Sees", "Seeing", "Saw", "Seen"], answer: "Saw", image: "assets/verbs/see.png"
        },
        {
            id: 23, question: "Complete the sentence: I ___ my homework every evening.", 
            options: ["do", "does", "doing", "did"], answer: "do", image: "assets/grammar/present_simple.png"
        },
        {
            id: 24, question: "Which word means 'very cold'?", 
            options: ["Warm", "Hot", "Freezing", "Mild"], answer: "Freezing", image: "assets/adjectives/freezing.png"
        },
        {
            id: 25, question: "What is the plural of 'tooth'?", 
            options: ["Tooths", "Teeth", "Toothes", "Toothies"], answer: "Teeth", image: "assets/plural/tooth.png"
        },
        {
            id: 26, question: "Choose the correct preposition: She is good ___ math.", 
            options: ["at", "in", "on", "for"], answer: "at", image: "assets/prepositions/good_at.png"
        },
        {
            id: 27, question: "Which word means 'a young dog'?", 
            options: ["Cat", "Kitten", "Puppy", "Cub"], answer: "Puppy", image: "assets/animals/puppy.png"
        },
        {
            id: 28, question: "What is the past tense of 'write'?", 
            options: ["Writes", "Writing", "Wrote", "Written"], answer: "Wrote", image: "assets/verbs/write.png"
        },
        {
            id: 29, question: "Complete the sentence: He has ___ friends.", 
            options: ["little", "a little", "few", "a few"], answer: "a few", image: "assets/grammar/a_few.png"
        },
        {
            id: 30, question: "Which word means 'difficult'?", 
            options: ["Easy", "Hard", "Simple", "Clear"], answer: "Hard", image: "assets/adjectives/difficult.png"
        },
        {
            id: 31, question: "What is the opposite of 'young'?", 
            options: ["Small", "Old", "New", "Short"], answer: "Old", image: "assets/opposites/young.png"
        },
        {
            id: 32, question: "Choose the correct article: ___ sun is bright today.", 
            options: ["a", "an", "the", "no article"], answer: "the", image: "assets/grammar/the.png"
        },
        {
            id: 33, question: "Which word describes 'how someone feels'?", 
            options: ["Adverb", "Adjective", "Noun", "Verb"], answer: "Adjective", image: "assets/parts_of_speech/adjective.png"
        },
        {
            id: 34, question: "What is the past tense of 'drink'?", 
            options: ["Drinks", "Drinking", "Drank", "Drunk"], answer: "Drank", image: "assets/verbs/drink.png"
        },
        {
            id: 35, question: "Complete the sentence: I'm interested ___ learning.", 
            options: ["in", "at", "on", "about"], answer: "in", image: "assets/prepositions/interested_in.png"
        },
        {
            id: 36, question: "Which word means 'a building for learning'?", 
            options: ["Hospital", "Library", "School", "Stadium"], answer: "School", image: "assets/places/school.png"
        },
        {
            id: 37, question: "What is the plural of 'ox'?", 
            options: ["Oxes", "Oxen", "Oxys", "Oxs"], answer: "Oxen", image: "assets/plural/ox.png"
        },
        {
            id: 38, question: "Choose the correct comparative adjective: He is ___ than his brother.", 
            options: ["tall", "taller", "tallest", "more tall"], answer: "taller", image: "assets/grammar/comparative_tall.png"
        },
        {
            id: 39, question: "Which word is an action?", 
            options: ["Happy", "Jump", "Table", "Green"], answer: "Jump", image: "assets/verbs/jump.png"
        },
        {
            id: 40, question: "What is the superlative of 'good'?", 
            options: ["Gooder", "Best", "More good", "Most good"], answer: "Best", image: "assets/grammar/superlative.png"
        }
    ];

    const BOARD_ROWS = 7; // Số hàng của bàn cờ (để tính vị trí ô)
    const BOARD_COLS = 10; // Số cột của bàn cờ
    const TOTAL_CELLS = 40; // Tổng số ô sẽ chơi
    const CELL_WIDTH = 100; // Kích thước ô (pixel)
    const CELL_HEIGHT = 80;
    const CHARACTER_SIZE = 40; // Kích thước nhân vật

    let currentQuestionIndex = 0;
    let score = 0;
    let totalRewards = 0;
    let characterPosition = 0; // Vị trí hiện tại trên bàn cờ (0-39)
    let gameActive = false;
    let questionsData = []; // Lưu trữ các câu hỏi đã xáo trộn

    // --- Helper Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Tính toán tọa độ (x, y) của ô trên bàn cờ dựa trên index
    function getCellCoordinates(index) {
        const row = Math.floor(index / BOARD_COLS);
        const col = index % BOARD_COLS;

        let x = col * CELL_WIDTH;
        let y = row * CELL_HEIGHT;

        // Bàn cờ rắn săn mồi thường đi zig-zag
        if (row % 2 !== 0) { // Hàng lẻ (1, 3, 5...) đi từ phải sang trái
            x = (BOARD_COLS - 1 - col) * CELL_WIDTH;
        }
        return { x, y };
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / TOTAL_CELLS) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestionIndex}/${TOTAL_CELLS}`;
    }

    function updateRewards(isCorrect) {
        if (isCorrect) {
            totalRewards++;
            smallRewardsEl.textContent = totalRewards;
            rewardSound.play();
        }
    }

    function playSound(soundElement) {
        soundElement.currentTime = 0; // Reset to beginning
        soundElement.play();
    }

    function displayFeedback(message, isCorrect) {
        feedbackEl.textContent = message;
        feedbackEl.style.color = isCorrect ? 'var(--correct-color)' : 'var(--wrong-color)';
    }

    function moveCharacter(newPositionIndex) {
        const oldPosition = characterPosition;
        characterPosition = newPositionIndex;

        const oldCoords = getCellCoordinates(oldPosition);
        const newCoords = getCellCoordinates(characterPosition);

        // Tính toán khoảng cách di chuyển để hoạt ảnh mượt mà hơn
        // Tạm thời: di chuyển tức thời, có thể thêm transition phức tạp hơn
        characterEl.style.transition = 'transform 0.5s ease-in-out'; // Hoạt ảnh mượt mà
        
        // Định vị nhân vật dựa trên ô mới
        characterEl.style.transform = `translate(${newCoords.x}px, ${newCoords.y}px)`;

        // Cập nhật class cho các ô
        document.querySelectorAll('.board-cell').forEach((cell, index) => {
            cell.classList.remove('current');
            if (index === characterPosition) {
                cell.classList.add('current');
            } else if (index < characterPosition) {
                cell.classList.add('visited');
            } else {
                cell.classList.remove('visited');
            }
        });

        if (oldPosition !== characterPosition) {
            playSound(moveSound);
        }
    }

    function setupBoard() {
        gameBoardEl.innerHTML = ''; // Xóa các ô cũ
        for (let i = 0; i < TOTAL_CELLS; i++) {
            const cell = document.createElement('div');
            cell.classList.add('board-cell');
            cell.dataset.index = i;
            cell.textContent = i + 1; // Hiển thị số ô
            gameBoardEl.appendChild(cell);
        }

        // Đặt nhân vật vào ô đầu tiên
        const startCoords = getCellCoordinates(0);
        characterEl.style.transform = `translate(${startCoords.x}px, ${startCoords.y}px)`;
        characterEl.style.width = `${CELL_WIDTH * 0.8}px`; // Tỉ lệ với

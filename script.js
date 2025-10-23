let currentQuestion = 0;
let score = 0;

const questionArea = document.getElementById("question-area");
const answerArea = document.getElementById("answer-area");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const reward = document.getElementById("reward");
const bgMusic = document.getElementById("bg-music");

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);

function startGame() {
  bgMusic.play();
  startBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionArea.innerHTML = `<h2>${q.question}</h2>`;
  answerArea.innerHTML = "";

  if (q.type === "quiz" || q.type === "listening") {
    if (q.audio) {
      const audio = new Audio(q.audio);
      audio.play();
    }
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      answerArea.appendChild(btn);
    });
  } else if (q.type === "fill") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Your answer...";
    input.className = "input";
    answerArea.appendChild(input);

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "btn";
    submit.onclick = () => checkAnswer(input.value.trim());
    answerArea.appendChild(submit);
  }
}

function checkAnswer(answer) {
  const q = questions[currentQuestion];
  if (answer.toLowerCase() === q.answer.toLowerCase()) {
    score += 10;
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! Correct answer: ${q.answer}`);
  }
  scoreDisplay.textContent = score;
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  nextBtn.style.display = "none";

  if (currentQuestion >= questions.length) {
    endGame();
  } else {
    showQuestion();
  }
}

function endGame() {
  questionArea.innerHTML = `<h2>🎉 You finished the game!</h2>`;
  answerArea.innerHTML = `<p>Your total score: ${score}</p>`;
  if (score >= 40) reward.classList.remove("hidden");
}

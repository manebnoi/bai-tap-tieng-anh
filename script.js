const questions = [
  {
    q: "What is the synonym of 'happy'?",
    options: ["Sad", "Glad", "Angry", "Tired"],
    answer: "Glad"
  },
  {
    q: "She ___ to school every day.",
    options: ["go", "goes", "gone", "going"],
    answer: "goes"
  },
  {
    q: "Which word means 'to study'?",
    options: ["Play", "Learn", "Eat", "Sleep"],
    answer: "Learn"
  },
  {
    q: "They ___ football on Sundays.",
    options: ["play", "plays", "played", "playing"],
    answer: "play"
  }
];

let index = 0;
let score = 0;

const qBox = document.getElementById("question");
const ansBox = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const scoreBox = document.getElementById("score");
const reward = document.getElementById("reward");
const bgMusic = document.getElementById("bg-music");

// START GAME
startBtn.addEventListener("click", () => {
  bgMusic.play();
  startBtn.classList.add("hidden");
  loadQ();
});

// LOAD QUESTION
function loadQ() {
  const q = questions[index];
  qBox.innerHTML = `<h2>${q.q}</h2>`;
  ansBox.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "btn";
    btn.onclick = () => check(opt);
    ansBox.appendChild(btn);
  });
}

// CHECK ANSWER
function check(opt) {
  const correct = questions[index].answer;
  if (opt === correct) {
    score += 10;
    alert("🎉 Correct!");
  } else {
    alert("❌ Wrong! Correct answer: " + correct);
  }

  scoreBox.textContent = score;
  nextBtn.classList.remove("hidden");
}

// NEXT QUESTION
nextBtn.addEventListener("click", () => {
  index++;
  nextBtn.classList.add("hidden");

  if (index >= questions.length) {
    endGame();
  } else {
    loadQ();
  }
});

// END GAME
function endGame() {
  qBox.innerHTML = "<h2>🎉 Game Completed!</h2>";
  ansBox.innerHTML = `<p>Your score: <b>${score}</b></p>`;

  if (score >= 30) reward.classList.remove("hidden");
}

// CLOSE REWARD
function closeReward() {
  reward.classList.add("hidden");
}

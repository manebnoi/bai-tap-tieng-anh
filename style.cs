:root {
    --primary-color: #3b82f6; /* Blue */
    --secondary-color: #e5e7eb; /* Gray */
    --correct-color: #22c55e; /* Green */
    --wrong-color: #ef4444; /* Red */
    --background-color: #f7f8fb;
    --card-background: #ffffff;
    --text-color: #222;
    --light-blue: #d9e2ff;
    --light-green: #ecfdf5;
    --light-red: #fef2f2;
    --font-family: 'Poppins', sans-serif;
}

body {
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

#game-container {
    position: relative;
    width: 100%;
    max-width: 900px;
    min-height: 600px;
    background-color: var(--card-background);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    overflow: hidden; /* Quan trọng cho chuyển cảnh */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}

.screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    box-sizing: border-box;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.screen.hidden {
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
}

#intro-screen img {
    max-width: 200px;
    margin-bottom: 20px;
    animation: float 3s ease-in-out infinite;
}

#game-screen {
    background-color: var(--background-color);
    border-radius: 16px;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.05);
}

#game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    background-color: var(--card-background);
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    margin-bottom: 20px;
}

#progress-container {
    flex-grow: 1;
    margin-right: 20px;
    height: 25px;
    background-color: var(--secondary-color);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
}

#progress-bar {
    height: 100%;
    width: 0%;
    background-color: var(--primary-color);
    border-radius: 999px;
    transition: width 0.3s ease-in-out;
}

#progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 600;
    font-size: 0.8em;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

#rewards-container {
    display: flex;
    align-items: center;
    font-size: 1.1em;
    font-weight: 600;
    color: var(--primary-color);
}

.reward-icon {
    margin-right: 5px;
    color: #f59e0b; /* Yellow-orange */
}

#level-info {
    font-weight: 600;
    color: #555;
    margin-left: 20px;
}

#game-board {
    width: 100%;
    aspect-ratio: 1.5; /* Ratio width/height for the board */
    background-color: var(--background-color);
    border-radius: 12px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr); /* Giả lập bàn cờ 10xN */
    grid-template-rows: repeat(7, 1fr); /* Giả lập bàn cờ 10x7 = 70 ô, ta chỉ dùng 40 ô đầu */
    gap: 2px;
    margin-bottom: 20px;
    border: 2px solid var(--light-blue);
    overflow: hidden;
}

.board-cell {
    background-color: #e0e7ff;
    border: 1px solid #c7d2fe;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    color: #4f46e5; /* Indigo */
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.board-cell.current {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.board-cell.visited {
    background-color: #dbeafe; /* Light blue */
}

#character {
    position: absolute;
    width: 40px; /* Kích thước nhân vật */
    height: 40px;
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Hoạt ảnh di chuyển */
    z-index: 10;
    pointer-events: none; /* Không chặn click vào ô */
}

#question-area {
    width: 100%;
    background-color: var(--card-background);
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    padding: 20px;
    text-align: center;
}

#question-content {
    margin-bottom: 15px;
}

#question-image {
    max-width: 150px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 2px solid var(--light-blue);
}

#question-text {
    font-size: 1.1em;
    margin-bottom: 15px;
    font-weight: 600;
}

#answer-choices {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

#answer-choices button {
    padding: 12px 15px;
    border: 2px solid var(--light-blue);
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    text-align: left;
    font-weight: 500;
}

#answer-choices button:hover {
    background-color: #f0f4ff;
    border-color: var(--primary-color);
}

#answer-choices button.correct {
    background-color: var(--light-green);
    border-color: var(--correct-color);
    color: var(--correct-color);
    font-weight: 700;
}

#answer-choices button.wrong {
    background-color: var(--light-red);
    border-color: var(--wrong-color);
    color: var(--wrong-color);
    font-weight: 700;
}

#feedback {
    margin-top: 15px;
    font-weight: 600;
    min-height: 20px; /* Để tránh nhảy layout */
}

#end-screen img {
    max-width: 250px;
    margin-bottom: 20px;
}

#end-message {
    font-size: 2em;
    color: var(--primary-color);
    margin-bottom: 10px;
}

/* Animation */
@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}

button {
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin: 5px;
}

button:hover {
    transform: translateY(-2px);
}

#startButton, #playAgainButton {
    background-color: var(--primary-color);
    color: white;
}

#startButton:hover, #playAgainButton:hover {
    background-color: #2563eb; /* Darker blue */
}
body {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(to right, #a8dadc, #457b9d);
  color: #222;
  margin: 0;
  padding: 20px;
  min-height: 100vh; /* Đảm bảo nền phủ toàn bộ trang */
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  max-width: 700px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-top: 0;
  text-align: center;
  color: #1d4ed8; /* Màu tiêu đề */
}

.card {
  background: #f1f5ff;
  border: 1px solid #d9e2ff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.choices {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}

.choices button {
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

.choices button:hover {
  background-color: #d1fae5;
  color: #065f46;
  transform: scale(1.05);
}

.choices button.correct {
  border-color: #22c55e;
  background: #ecfdf5;
  color: #166534;
  animation: pulse 1s;
}

.choices button.wrong {
  border-color: #ef4444;
  background: #fef2f2;
  color: #b91c1c;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  color: #555;
}

.actions {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
}

.actions button {
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.actions button.primary {
  background: #3b82f6;
  color: #fff;
}

.actions button.primary:hover {
  background: #2563eb;
}

.actions button.secondary {
  background: #e5e7eb;
}

.actions button.secondary:hover {
  background: #d1d5db;
}

.hidden {
  display: none;
}

.progress {
  height: 8px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
  margin: 14px 0;
}

.bar {
  height: 100%;
  width: 0%;
  background: #3b82f6;
  transition: width 300ms;
}

.result {
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

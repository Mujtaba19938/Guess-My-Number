document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open-modal");
  const closeBtn = document.querySelector(".close-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCard = document.querySelector(".modal-card");
  const questionText = document.querySelector(".question-text");
  const trueBtn = document.querySelector(".true-btn");
  const falseBtn = document.querySelector(".false-btn");
  const resultScreen = document.querySelector(".result-screen");
  const resultIcon = document.querySelector(".result-icon");
  const resultText = document.querySelector(".result-text");
  const restartBtn = document.querySelector(".restart-btn");
  const progressText = document.querySelector(".question-progress");
  const lightbulb = document.querySelector("#lightbulb"); // Ensure this matches your HTML
  const body = document.body;

  // ✅ Check if lightbulb exists before adding event
  if (lightbulb) {
    lightbulb.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      body.classList.toggle("dark-mode");
      lightbulb.classList.toggle("on"); // ✅ Add glow effect
    });
  }

  // Quiz Questions
  const questions = [
    { question: "The Earth is flat.", answer: false },
    { question: "Water boils at 100°C (212°F) at sea level.", answer: true },
    { question: "Bananas are berries, but strawberries are not.", answer: true },
    { question: "Humans have five senses.", answer: false },
    { question: "The Great Wall of China is visible from space.", answer: false },
    { question: "Sharks are mammals.", answer: false },
    { question: "Lightning never strikes the same place twice.", answer: false },
    { question: "The Moon has its own light.", answer: false },
    { question: "Octopuses have three hearts.", answer: true },
    { question: "Goldfish have a three-second memory.", answer: false },
    { question: "A group of crows is called a murder.", answer: true },
    { question: "Honey never spoils.", answer: true },
    { question: "There are more trees on Earth than stars in the Milky Way.", answer: true },
    { question: "An ant can lift 1000 times its body weight.", answer: false },
    { question: "Humans share about 50% of their DNA with bananas.", answer: true },
    { question: "The Eiffel Tower can grow taller in the summer.", answer: true },
    { question: "Hot water freezes faster than cold water.", answer: true }
];
  let currentQuestion = 0;
  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
  }

  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      questionText.textContent = questions[currentQuestionIndex].question;
      progressText.textContent = `Question ${currentQuestionIndex + 1} of ${
        questions.length
      }`;
    } else {
      questionText.textContent = `Quiz Over! Your score: ${score}/${questions.length}`;
      restartBtn.style.display = "block";
    }
  }

  function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].answer) {
      score++;
    }
    currentQuestionIndex++;
    loadQuestion();
  }

  openBtn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    modalCard.classList.remove("rotate");
    startQuiz();
  });

  closeBtn.addEventListener(
    "click",
    () => (modalOverlay.style.display = "none")
  );

  restartBtn.addEventListener("click", () => {
    restartBtn.style.display = "none";
    startQuiz();
  });

  trueBtn.addEventListener("click", () => checkAnswer(true));
  falseBtn.addEventListener("click", () => checkAnswer(false));
});

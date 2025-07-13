const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const generateBtn = document.getElementById("generate-btn");

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "High Text Machine Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  },
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Application Personal Internet", "Application Program Interaction", "Advanced Programming Input"],
    answer: "Application Programming Interface"
  }
];

function generateQuestion() {
  const random = questions[Math.floor(Math.random() * questions.length)];
  questionEl.textContent = random.question;
  optionsEl.innerHTML = "";

  random.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === random.answer) {
        btn.style.backgroundColor = "#28a745";
        alert("✅ Correct!");
      } else {
        btn.style.backgroundColor = "#dc3545";
        alert("❌ Wrong! Correct answer: " + random.answer);
      }
    };
    optionsEl.appendChild(btn);
  });
}

generateBtn.addEventListener("click", generateQuestion);

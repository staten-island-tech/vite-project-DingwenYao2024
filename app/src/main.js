import "./style.css";

const questions = [

  {
    id: "English",
    question: "What animal barks?",
    answer: "Dog",
  },
  {
    id: "Math",
    question: "What is the number before 10?",
    answer: "9",
  },
  {
    id: "Science",
    question: "What element is hot?",
    answer: "Fire",
  },
  {
    id: "History",
    question: "What year was the declaration of independence signed?",
    answer: "1776",
  },
  {
    id: "Math",
    question: "What shape is a ball?",
    answer: "Sphere",
  },
  {
    id: "English",
    question: "What is the most used vowel?",
    answer: "E",
  },
  {
    id: "Science",
    question: "What do humans breathe?",
    answer: "Air",
  },
  {
    id: "History",
    question: "Who were the first people to live in America?",
    answer: "Native Americans",
  },
  {
    id: "Math",
    question: "What is 3 + 0?",
    answer: "3",
  },
  {
    id: "English",
    question: "Who wrote Romeo and Juliet?",
    answer: "William Shakespeare",
  },
  {
    id: "Science",
    question: "What animal can fly?",
    answer: "Bird",
  },
  {
    id: "History",
    question: "What continent is the USA on?",
    answer: "North America",
  },
  {
    id: "Math",
    question: "What is 1 + 1?",
    answer: "2",
  },
  {
    id: "English",
    question: "What letter comes after A?",
    answer: "B",
  },
  {
    id: "Science",
    question: "What planet do we live on?",
    answer: "Earth",
  },
  {
    id: "History",
    question: "Who was the first president of the U.S.?",
    answer: "George Washington",
  },
  {
    id: "Math",
    question: "What is 5 - 2?",
    answer: "3",
  },
  {
    id: "English",
    question: "What is the most used primary color?",
    answer: "Blue",
  },
  {
    id: "Science",
    question: "What do plants need to grow?",
    answer: "Food and water",
  },
  {
    id: "History",
    question: "What do people celebrate on the 4th of July?",
    answer: "Independence day",
  },
];


console.log(questions);

//Inject all the cards

function inject(questions) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div 
      class="card" 
      data-id="${questions.id}"
      data-answer="${questions.answer.toLowerCase()}"
      data-correct="false"
    >
      <h2 class="name">${questions.question}</h2>
      <input placeholder="Put answer here" class="input">
      <button class="button">Submit</button>
    </div>`
  );
}

questions.forEach((questions) => inject(questions));

//Be able to filter by subject

function filterById(id) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-id");
    console.log(cardCategory);
    if (cardCategory === id || id === "All") {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function filterButton() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      console.log(id);
      filterById(id);
    });
  });
}

filterButton();
filterById("All");

//light/dark mode
const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});


//If they get the answer wrong, red
//If they get the answer right, green

let correctAnswers = 0;
let totalAnswered = 0;

function check() {
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("button")) return;

    const card = e.target.closest(".card");
    const input = card.querySelector(".input");
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = card.dataset.answer;

    // If this card was already answered correctly before, remove it from score
    if (card.dataset.correct === "true") {
      correctAnswers--;
    }

    // Count this as answered only once
    if (!card.classList.contains("answered")) {
      totalAnswered++;
      card.classList.add("answered");
    }

    if (userAnswer === correctAnswer) {
      card.style.border = "3px solid green";
      card.dataset.correct = "true";
      correctAnswers++;
    } else {
      card.style.border = "3px solid red";
      card.dataset.correct = "false";
    }

    updateScore();
  });
}

check();

//Get the amount of right answers and divide by the total amount

function updateScore() {
  const scoreEl = document.querySelector(".score");
  scoreEl.textContent = `Score: ${correctAnswers} / ${totalAnswered}`;
}

import "./style.css";

const questions = [
  {
    id: "Math",
    question: "What is 1 + 1?",
    answer: "2",
  },
  {
    id: "Math",
    question: "What is 5 - 2?",
    answer: "3",
  },
  {
    id: "Math",
    question: "What is the number before 10?",
    answer: "9",
  },
  {
    id: "Math",
    question: "What is 3 + 0?",
    answer: "3",
  },
  {
    id: "Math",
    question: "What shape is a ball?",
    answer: "Sphere",
  },
  {
    id: "Science",
    question: "What planet do we live on?",
    answer: "Earth",
  },
  {
    id: "Science",
    question: "What element is hot?",
    answer: "Fire",
  },
  {
    id: "Science",
    question: "What do plants need to grow?",
    answer: "Food and water",
  },
  {
    id: "Science",
    question: "What animal can fly?",
    answer: "Bird",
  },
  {
    id: "Science",
    question: "What do humans breathe?",
    answer: "Air",
  },
  {
    id: "English",
    question: "What is the most used primary color?",
    answer: "Blue",
  },
  {
    id: "English",
    question: "What letter comes after A?",
    answer: "B",
  },
  {
    id: "English",
    question: "What animal barks?",
    answer: "Dog",
  },
  {
    id: "English",
    question: "What is the most used vowel?",
    answer: "E",
  },
  {
    id: "English",
    question: "Who wrote Romeo and Juliet?",
    answer: "William Shakespeare",
  },
  {
    id: "History",
    question: "What continent is the USA on?",
    answer: "North America",
  },
  {
    id: "History",
    question: "Who were the first people to live in America?",
    answer: "Native Americans",
  },
  {
    id: "History",
    question: "What do people celebrate on the 4th of July?",
    answer: "Independence day",
  },
  {
    id: "History",
    question: "What year was the declaration of independence signed?",
    answer: "1776",
  },
  {
    id: "History",
    question: "Who was the first president of the U.S.?",
    answer: "George Washington",
  },
];

console.log(questions);

//Inject all the cards

function inject(questions) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-name = "${questions.question}" data-id = "${questions.id}">
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
    console.log(cardCategory)
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
      console.log(id)
      filterById(id);
    });
  });
}

filterButton();
filterById("All");


//If they get the answer wrong, red
//If they get the answer right, green
//Get the amount of right answers and divide by the total amount
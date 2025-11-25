import './style.css'

const questions = [
  { id: "Math", question: "What is 1 + 1?", choices: ["1", "2", "3", "4"], answer: "2"},
  { id: "Math", question: "What is 5 - 2?", choices: ["1", "3", "5", "7"], answer: "3"},
  { id: "Math", question: "Which number is bigger?", choices: ["10", "2", "1", "0"], answer: "10"},
  { id: "Math", question: "What is 3 + 0?", choices: ["1", "3", "5", "9"], answer: "3"},
  { id: "Math", question: "What shape is a ball?", choices: ["Circle", "Square", "Triangle", "Star"], answer: "Circle"},
  { id: "Science", question: "What planet do we live on?", choices: ["Earth", "Mars", "Jupiter", "Moon"], answer: "Earth"},
  { id: "Science", question: "Which one is hot?", choices: ["Fire", "Ice", "Snow", "Rain"], answer: "Fire"},
  { id: "Science", question: "What do plants need to grow?", choices: ["Water", "Rocks", "Plastic", "Sand"], answer: "Water"},
  { id: "Science", question: "Which animal can fly?", choices: ["Bird", "Dog", "Cow", "Snake"], answer: "Bird"},
  { id: "Science", question: "What do humans breathe?", choices: ["Air", "Milk", "Juice", "Dust"], answer: "Air"},
  { id: "English", question: "Which one is a color?", choices: ["Red", "Phone", "Cloud", "Chair"], answer: "Red"},
  { id: "English", question: "What letter comes after A?", choices: ["B", "C", "D", "E"], answer: "B"},
  { id: "English", question: "Which word is an animal?", choices: ["Dog", "Desk", "Door", "Dirt"], answer: "Dog"},
  { id: "English", question: "Which one is a vowel?", choices: ["A", "B", "C", "F"], answer: "A"},
  { id: "English", question: "Which one is something you read?", choices: ["Book", "Shoe", "Plate", "Ball"], answer: "Book"},
  { id: "History", question: "What continent is the USA on?", choices: ["North America", "Asia", "Europe", "Africa"], answer: "North America"},
  { id: "History", question: "Who were the first people to live in America?", choices: ["Native Americans", "Pilgrims", "Vikings", "Romans"], answer: "Native Americans"},
  { id: "History", question: "What do people celebrate on the 4th of July?", choices: ["Independence Day", "Halloween", "Christmas", "Easter"], answer: "Independence day"},
  { id: "History", question: "Which one is an old building?", choices: ["Pyramid", "Skyscraper", "Mall", "Stadium"], answer: "Pyramid"},
  { id: "History", question: "Who was the first president of the U.S.?", choices: ["George Washington", "Abraham Lincoln", "Joe Biden", "Thomas Jefferson"], answer: "George Washington"}
];

console.log(questions);

//Inject all the cards

function inject(questions) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-name = "${questions.question}" data-id = "${questions.id}">
      <h2 class="name">${questions.question}</h2>
      <h2 class="choices">$${questions.choices}</h2>
      <button class="button">Buy Product</button>
    </div>`
  );
}

questions.forEach((question) => inject(question));

function filterById(id) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-id");
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
      filterById(id);
    });
  });
}

filterButton();
filterById("All");


//Fuction for the current question and only desplays 1 question at a time
//Get the amount of right answers and divide by the total amount
//Be able to filter by subject
//If they get the answer wrong, red
//If they get the answer right, green
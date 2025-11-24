import './style.css'

const questions = [
  { id: "Math", question: "What is 1 + 1?", choices: ["1", "2", "3", "4"] },
  { id: "Math", question: "What is 5 - 2?", choices: ["1", "3", "5", "7"] },
  { id: "Math", question: "Which number is bigger?", choices: ["10", "2", "1", "0"] },
  { id: "Math", question: "What is 3 + 0?", choices: ["1", "3", "5", "9"] },
  { id: "Math", question: "What shape is a ball?", choices: ["Circle", "Square", "Triangle", "Star"] },
  { id: "Science", question: "What planet do we live on?", choices: ["Earth", "Mars", "Jupiter", "Moon"] },
  { id: "Science", question: "Which one is hot?", choices: ["Fire", "Ice", "Snow", "Rain"] },
  { id: "Science", question: "What do plants need to grow?", choices: ["Water", "Rocks", "Plastic", "Sand"] },
  { id: "Science", question: "Which animal can fly?", choices: ["Bird", "Dog", "Cow", "Snake"] },
  { id: "Science", question: "What do humans breathe?", choices: ["Air", "Milk", "Juice", "Dust"] },
  { id: "English", question: "Which one is a color?", choices: ["Red", "Phone", "Cloud", "Chair"] },
  { id: "English", question: "What letter comes after A?", choices: ["B", "C", "D", "E"] },
  { id: "English", question: "Which word is an animal?", choices: ["Dog", "Desk", "Door", "Dirt"] },
  { id: "English", question: "Which one is a vowel?", choices: ["A", "B", "C", "F"] },
  { id: "English", question: "Which one is something you read?", choices: ["Book", "Shoe", "Plate", "Ball"] },
  { id: "History", question: "What continent is the USA on?", choices: ["North America", "Asia", "Europe", "Africa"] },
  { id: "History", question: "Who were the first people to live in America?", choices: ["Native Americans", "Pilgrims", "Vikings", "Romans"] },
  { id: "History", question: "What do people celebrate on the 4th of July?", choices: ["Independence Day", "Halloween", "Christmas", "Easter"] },
  { id: "History", question: "Which one is an old building?", choices: ["Pyramid", "Skyscraper", "Mall", "Stadium"] },
  { id: "History", question: "Who was the first president of the U.S.?", choices: ["George Washington", "Abraham Lincoln", "Joe Biden", "Thomas Jefferson"] }
];

console.log(questions);

//Fuction for the current question and only desplays 1 question at a time
//Get the amount of right answers and divide by the total amount
//Be able to filter by subject
//If they get the answer wrong, red
//If they get the answer right, green
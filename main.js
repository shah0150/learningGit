// 1. Declare a variable age and assign it your age as a number. Print the variable to the console.
let age = 30; // You can replace this with your actual age
console.log("My age is: " + age);

// 2. Write a function add that takes two numbers as arguments and returns their sum. Print the result to the console.
function add(a, b) {
  return a + b;
}

console.log("The sum of 3 and 4 is: " + add(3, 4));

// 3. Write a function getDaysUntilChristmas that calculates and returns the number of days remaining until Christmas. Print the result to the console.
function getDaysUntilChristmas() {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25); // Christmas is on December 25th
  const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
  const daysUntilChristmas = Math.ceil((christmas - today) / oneDay);

  return daysUntilChristmas;
}

console.log("Days until Christmas: " + getDaysUntilChristmas() + " days");

// 4. Add a new fruit to the fruits array using the push method.
const fruitsArray = ["apple", "banana", "cherry"];
fruitsArray.push("grape");
console.log("Fruits array after adding grape: " + fruitsArray);

// 5. Create an object person with properties for name, age, and city. Print each property to the console.
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("City: " + person.city);
// ------------------------------------------------
// 1. Convert a number to a string using the toString() method. Print the result to the console.
const number = 42;
const numberAsString = number.toString();
console.log("Number as String: " + numberAsString);

// 2. Create an object representing four (4) books with properties like title, author, yearPublished, reviews, and an array of genre. Print each property to the console.
const books = [
  {
    title: "Book 1",
    author: "Author 1",
    yearPublished: 2000,
    reviews: 5,
    genre: ["Fiction", "Mystery"]
  },
  {
    title: "Book 2",
    author: "Author 2",
    yearPublished: 2010,
    reviews: 4,
    genre: ["Science Fiction", "Adventure"]
  },
  {
    title: "Book 3",
    author: "Author 3",
    yearPublished: 2021,
    reviews: 4.5,
    genre: ["Fantasy", "Romance"]
  },
  {
    title: "Book 4",
    author: "Author 4",
    yearPublished: 1995,
    reviews: 4.2,
    genre: ["Non-Fiction", "Biography"]
  }
];

console.log("Book 1: " + JSON.stringify(books[0]));
console.log("Book 2: " + JSON.stringify(books[1]));
console.log("Book 3: " + JSON.stringify(books[2]));
console.log("Book 4: " + JSON.stringify(books[3]));

// 3. Write a function called calculateArea that calculates and returns the area of a rectangle given its length and width as parameters.
function calculateArea(length, width) {
  return length * width;
}

console.log("Area of a rectangle with length 5 and width 3: " + calculateArea(5, 3));

// 4. Create a function that accepts a date as a parameter and returns the day of the week for that date.
function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

const newDate = new Date();
console.log("Day of the week for today: " + getDayOfWeek(newDate));

// 5. Declare a boolean variable called isRaining and set it to true if it's currently raining, or false if it's not.
const isRaining = false;
console.log("Is it raining? " + isRaining);

// ------------------------------------------------

// 1. Check if 'banana' exists in the fruits array using the includes method. Print the result to the console.
const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.includes("banana");
console.log("Does 'fruits' array include 'banana'? " + hasBanana);

// 2. Write a function calculateCircleArea that calculates and returns the area of a circle with a given radius using the Math object. Print the result to the console.
function calculateCircleArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

const circleRadius = 5; // Replace with your desired radius
const circleArea = calculateCircleArea(circleRadius);
console.log("Area of the circle with radius " + circleRadius + " is: " + circleArea);

// 3. Write a for loop that counts from 1 to 10 and prints each number.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Format the current date as "YYYY-MM-DD."
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
console.log("Formatted current date: " + formattedDate);

// ------------------------------------------------

// 1. Create an array of even numbers from 2 to 20 using a for loop. Log the array.
const evenNumbers = [];
for (let i = 2; i <= 20; i += 2) {
  evenNumbers.push(i);
}
console.log("Array of even numbers from 2 to 20: " + evenNumbers);

// 2. Use the map method to double each number in an array of numbers. Print the result to the console.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers: " + doubledNumbers);

// 4. Write a function calculateTotalAge that takes an array of student objects and returns the total age of all students. Print the result to the console.
function calculateTotalAge(students) {
  let totalAge = 0;
  for (const student of students) {
    totalAge += student.age;
  }
  return totalAge;
}

const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

const totalAgeOfStudents = calculateTotalAge(students);
console.log("Total age of students: " + totalAgeOfStudents);

// 5. Create an object that represents a car with properties for make, model, and year. Print each property to the console.
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

console.log("Car make: " + car.make);
console.log("Car model: " + car.model);
console.log("Car year: " + car.year);


// ------------------------------------------------

// 1. Write a loop to find the sum of all numbers from 1 to 100. Print the result to the console.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 100: " + sum);

// 2. Write a function that computes the sum of all prime numbers within a specified range.
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function sumOfPrimesInRange(start, end) {
  let primeSum = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }
  return primeSum;
}

console.log("Sum of prime numbers from 1 to 100: " + sumOfPrimesInRange(1, 100));

// 3. Create a function isEven that determines if a given number is even or odd and returns true or false accordingly.
function isEven(number) {
  return number % 2 === 0;
}

console.log("Is 7 even? " + isEven(7));

// 4. Create a function that calculates the age of a person based on their birthdate using JavaScript's Date object.
function calculateAge(birthdate) {
  const today = new Date();
  const birthYear = birthdate.getFullYear();
  const currentYear = today.getFullYear();
  const age = currentYear - birthYear;
  return age;
}

const birthdate = new Date(1990, 4, 15); // Replace with the person's birthdate
console.log("Age based on birthdate: " + calculateAge(birthdate));

// ------------------------------------------------

// 1. Write a function that takes an array of numbers and returns the sum of all the numbers in the array. Print the result to the console.
function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
console.log("Sum of numbers in the array: " + sumArray(numbersArray));

// 2. Create an array of numbers, and then use a for loop to calculate their average. Print the result to the console.
const scores = [85, 90, 75, 92, 88];
let total = 0;
for (let score of scores) {
  total += score;
}
const average = total / scores.length;
console.log("Average score: " + average);

// 4. Implement a function that converts degrees to radians and vice versa.
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

const degreesValue = 45; // Replace with your degree value
const radiansValue = degreesToRadians(degreesValue);
console.log(`${degreesValue} degrees is approximately ${radiansValue.toFixed(2)} radians.`);

const radiansValue2 = Math.PI / 4; // Replace with your radians value
const degreesValue2 = radiansToDegrees(radiansValue2);
console.log(`${radiansValue2.toFixed(2)} radians is approximately ${degreesValue2} degrees.`);

// 5. Create an object named person with properties name, age, and city. Log the person's age to the console.
const personObject = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("Person's age: " + personObject.age);

// ------------------------------------------------

// 1. Given an array of numbers, numbersArray, use the filter method to create a new array, evenNumbers, containing only the even numbers from the original array. Print the result to the console.
const arrayofNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const calEvenNumbers = arrayofNumbers.filter(number => number % 2 === 0);
console.log("Even numbers: " + calEvenNumbers);

// 2. Define a function that checks if a given number is positive or negative. Print the result to the console.
function checkNumberSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log("Is -5 positive or negative? It's " + checkNumberSign(-5));

// 3. Create an array of your favorite movies. Add a new movie to the array. Remove the second item from the movie array. Use a loop to print each movie in the array.
const favoriteMovies = ["Movie 1", "Movie 2", "Movie 3"];
favoriteMovies.push("New Movie");
favoriteMovies.splice(1, 1); // Remove the second item

console.log("Favorite Movies:");
for (let i = 0; i < favoriteMovies.length; i++) {
  console.log(favoriteMovies[i]);
}

// 5. Write a function that calculates the distance between two points (x1, y1) and (x2, y2) using the distance formula d = √(x2-x1)²+(y2-y1)². Print the result to the console.
function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return distance;
}

const distance = calculateDistance(1, 2, 4, 6);
console.log("Distance between points: " + distance.toFixed(2));

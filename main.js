function getDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return daysOfWeek[today];
  }
console.log(getDayOfWeek());

function getFormattedDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  }
console.log(getFormattedDate(new Date()));

// Create a variable fullName and store your full name as a string. Display the length of your name in the console.

const fullName = "Adesh Nilesh Shah";
console.log(fullName.length);
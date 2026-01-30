/* 
🔸 Assignment 1: Welcome Message
Objective:
Use prompt() to ask for the user's name.
Use alert() to display:
"Welcome, [name]!"
Concepts used: prompt, alert, var, concatenation
*/
const qno1 = document.querySelector("#qno-1");

qno1.addEventListener("click", () => {
  let userPrompt = prompt("Enter Your Name Please");
  if (userPrompt.trim() !== "") {
    alert(`Welcome, ${userPrompt}`);
  } else {
    alert("Prompt Empty");
  }
});
/////////Done.

/*🔸 Assignment 2: Age Message
Objective:
Ask the user for their name and age using prompt().
Log this message in the console:
"[name] is [age] years old."
Concepts used: prompt, console.log, var, concatenation */

const qno2 = document.querySelector("#qno-2");
const headQno2 = document.querySelector("#qno2-head");

qno2.addEventListener("click", () => {
  const userName = prompt("Enter Your Name");
  const userAge = prompt("Enter Your Age");

  headQno2.innerHTML += `${userName} is ${userAge} years old.`;
});
/////////DONE.

/*
🔸 Assignment 3: Favorite Color
Objective:
Ask the user for their favorite color.
Show an alert like:
"Wow! [color] is a nice color!"
Concepts used: prompt, alert, var, concatenation
*/
const qno3 = document.querySelector("#qno-3");
qno3.addEventListener("click", () => {
  const userColor = prompt("Enter Your Favorite Color");
  alert(`Wow! ${userColor} is a nice color!`);
});

/*
🔸 Assignment 4: Simple Math Sentence
Objective:
Ask the user for two numbers using prompt().
Show a sentence in the console like:
"The result of 4 + 5 is 9."
(You can just add the numbers directly — no need to convert types yet.)
Concepts used: prompt, console.log, var, concatenation
*/
const qno4 = document.querySelector("#qno-4");
qno4.addEventListener("click", () => {
  const num1 = Number(prompt("Enter First Number"));
  const num2 = Number(prompt("Enter Second Number"));
  const result = num1 + num2;
  headQno2.innerHTML += `The result of ${num1} + ${num2} is ${result}.`;
});
//////Done.

/*
🔸 Assignment 5: About Me Summary
Objective:
Ask the user for their name, hobby, and country using prompt().
Show an alert like:
"Hi, I'm [name] from [country], and I love [hobby]!"
Concepts used: prompt, alert, var, concatenation
*/
const qno5 = document.querySelector("#qno-5");
qno5.addEventListener("click", () => {
  const userName = prompt("Enter your Name");
  const userHobby = prompt("Enter your Hobby");
  const userCountry = prompt("Enter your Country");
  const resutl = `Hi, I'm ${userName} from ${userCountry}, and I love ${userHobby}`;

  alert(resutl);
});
/////////////Done.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*🔹 Task 1: Create a Full Address
Instruction:
Ask the user to enter their street, city, and country. Concatenate these values into one full
address string and display it like:
"Your full address is: 123 Main St, Springfield, USA"
*/
const h2 = document.querySelector("#h2")
const task1 = document.querySelector("#task-1")
task1.addEventListener("click", ()=>{
    const street = prompt("Enter Your Street Name")
    const city = prompt("Enter Your city Name")
    const country = prompt("Enter Your country Name")
   const result = `Your full address is: ${street}, ${city}, ${country}`
  h2.innerHTML += result       
})



/*🔹 Task 2: Make a Custom Username
Instruction:
Ask the user to input their first name and a favorite number. Concatenate them to create a
simple username like:
"john42"
Display the result with a message: "Your new username is: john42"
*/
const task2 = document.querySelector("#task2")
task2.addEventListener("click", ()=>{
  const userFirstName = prompt("Enter Your First Name")
  const favoriteNum = prompt("Enter Your favorite Number")

  const result = `Your new username is: ${userFirstName + favoriteNum}`
  h2.innerHTML = result
})



/*🔹 Task 3: Email Generator
Instruction:
Ask the user for their first name and last name. Combine them into an email address format
like:
"firstname.lastname@example.com"
Show the result.
*/
const task3 = document.querySelector("#task3")
task3.addEventListener("click", ()=>{
  const firstName = prompt("Enter Your First Name ")
  const lastName = prompt("Enter Your last Name")
  const result = `${firstName + lastName}@gmail.com`
  h2.innerHTML = result
})


/*🔹 Task 4: Combine Favorite Things
Instruction:
Ask the user for their favorite color, animal, and food. Create a sentence like:
"Your favorite things are: blue dogs and pizza!"
*/
const task4 = document.querySelector("#task4")
task4.addEventListener("click", ()=>{
  const favColor = prompt("Enter Your Favorite Color")
  const favAnimal = prompt("Enter Your favorite Animal")
  const favFood = prompt("Enter Your Favorite Food")
  const result = `Your favorite things are: ${favColor} ${favAnimal} and ${favFood}`
  h2.innerHTML = result
})




/*
🔹 Task 5: Quote with Author
Instruction:
Ask the user for a quote and the author’s name. Display it in the format:
"The only limit is your mind." - John Doe
*/
const task5 = document.querySelector("#task5")
task5.addEventListener("click", ()=>{
  const userQuote = prompt("Enter Your favorite Quote.")
  const authorsName = prompt("Enter Authores Name")
  const result = `${userQuote} - ${authorsName}`
  h2.innerHTML = result
})
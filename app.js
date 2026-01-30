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
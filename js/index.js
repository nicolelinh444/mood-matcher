// create variables to store the form and the output paragraph
const form = document.querySelector(".mood-matcher-form");
const output = document.querySelector(".mood-output");

// create variables with empty value to store the img src and alt text
let imgSrc = "";
let imgAlt = "";

// create the image element and assign the variables to the src and alt attributes
let img = document.createElement("img");
img.src = imgSrc;
img.alt = imgAlt;

// add an event listener that will make the onSubmit function run when the user clicks submit
form.addEventListener("submit", onSubmit);

// create a function to submit form 
function onSubmit(event) {
	event.preventDefault();
// form collects data from what the user types in and saves it in the variable data
	const data = Object.fromEntries(new FormData(event.target).entries());
// create a variable named current mood which uses data.mood
    let currentMood = data.mood;
// if current mood equals happy, a happy message will appear in the output section  
  if (currentMood  === "happy") {
    output.textContent = "You're happy! Keep having a happy day.";
    img.src = './images/happy.png';
    img.alt = 'yellow happy face emoji'
  } 
  // if the mood equals sad, a sad message will appear
    else if (currentMood === "sad") {
    output.textContent = "You're sad! It's okay to cry.";
    img.src = './images/sad.png';
    img.alt ='yellow sad face emoji';
  } 
  // if the mood is calm, a calm message will appear
    else if (currentMood === "calm") {
    output.textContent = "You're calm. Let's be at peace together."
    img.src = '.images/calm.png';
    img.alt = 'yellow calm face emoji'
  }; 

  // adds the image to the output div inside of the function
  output.appendChild(img);

	form.reset();
}
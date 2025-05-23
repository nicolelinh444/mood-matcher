// create variables to store the form and the output paragraph
const form = document.querySelector(".mood-matcher-form");
const output = document.querySelector(".mood-output");
let img = document.createElement("img");

// added an event listener that will make the onSubmit function run when the user clicks submit
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const data = Object.fromEntries(new FormData(event.target).entries());

    let currentMood = data.mood;
  
  if (currentMood  === "happy") {
    output.textContent = "You're happy! Keep having a happy day.";
  } else if (currentMood === "sad") {
    output.textContent = "You're sad! It's okay to cry.";
  } else if (currentMood === "calm") {
    output.textContent = "You're calm. Let's be at peace together."
  };
  
	form.reset();
}


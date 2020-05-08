var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("resetbckg");
const bodyRand = document.getElementsByTagName("BODY")[0];
const buttonRand = document.getElementById("setRandomColor");

// this function will be executed when the 2 colour buttons are set
function setGradient() {
	body.style.background = "linear-gradient(to right, "
		 + color1.value 
		 +", "
		 + color2.value 
		 + ") ";

		 css.textContent = body.style.background + ";";
}

// this function will be executed when the random button is clicked and it will 
// then reset the background to the colours it was when the page loaded
function reset() {
	document.body.style.background = "";

	css.textContent = body.style.background 
	+ "linear-gradient(to right, rgb(58, 199, 226), rgb(161, 109, 206))";

}

// the random button is sent to this function when clicked which will set the 
// background to linear-gradient and execute the getRandomHEXColor function
function randomize() {
  body.style.background = `linear-gradient(to right,
  ${getRandomHEXColor()},${getRandomHEXColor()})`;
}

// code for generating random colours when randomize calls this function
function getRandomHEXColor() {
  const SEED = '0123456789abcdef';
  let output = '#';
  while (output.length < 7) {
    output += SEED[Math.floor(Math.random() * SEED.length)];
  }
  css.textContent = body.style.background + ";";
  return output;
}

// the color1 and 2 variables are listening for an input to be made which
// will then call the setGradientfunction to be executed
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// these buttons and waiting for a click to call and execute the 
// functions that they are declared into
button.addEventListener("click", reset);

buttonRand.addEventListener("click", randomize);
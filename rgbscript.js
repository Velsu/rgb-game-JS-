

var numSquares = 6;
var colors = []
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1");
var messageDisplay = document.querySelector("span");
var headerbox = document.getElementById("header-box");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");
// var easy = document.querySelector("#easyBtn")
// var hard = document.querySelector("#hardBtn")
colorDisplay.textContent = pickedColor;

// easy.addEventListener("click", function() {
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numSquares = 3
// })

// hard.addEventListener("click", function() {
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numSquares = 6
// })

init();

function init() {
	setupModes();
	start();
	reset();
}


function start() {
		for (i=0; i < square.length; i++) {

			// add click listener to square
			square[i].addEventListener("click", function() {

			// assign color to new var
			var clickedColor = this.style.background;
			console.log("ok");

			// compare colors
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "CORRECT!!!";
				changeColor(pickedColor);
				resetButton.textContent = "Play again?";
			}
			else {
					this.style.background = "#232323";
					messageDisplay.textContent = "WRONG!";
			}
		});
		}
}

function setupModes() {
for (i=0; i < modes.length; i++) {
	modes[i].addEventListener("click", function() {
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
}
};

function reset() {
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	headerbox.style.background = "rgb(20,110,220)";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = ""
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
		square[i].style.display = "block"
		square[i].style.background = colors[i];

	}
	else {
		square[i].style.display = "none";
	}
	}
}

resetButton.addEventListener("click", function(){
	reset();
})



function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
};

function changeColor(color) {
	headerbox.style.background = color;
	for (i=0;i<square.length;i++)
		square[i].style.background = color;

};


function generateColors(num) {
	var arr = []
	for (i=0;i<num;i++)
		arr.push(randColors());
	return arr

};

function randColors() {
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + " " + g + "," + " " + b +")";
};




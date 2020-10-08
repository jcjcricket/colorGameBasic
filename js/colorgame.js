var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init (){
	setupModeButtons();

	for (var i = 0; i < squares.length; i++) {
		// add click listeners;
		squares[i].addEventListener("click", function(){
		// grab color of clicked sqr;
		var clickedColor = this.style.backgroundColor;
		// compare color of clickd sqr;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});

	}
	reset();
}

function setupModeButtons () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
}
}


function reset(){
	colors = randomColorArray(numSquares);
	//pick a new random color
	pickedColor = pickRandom();
	//change colors of squares
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = randomColorArray(numSquares);
// 	pickedColor = pickRandom();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}	
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = randomColorArray(numSquares);
// 	pickedColor = pickRandom();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}	
// });

resetButton.addEventListener ("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
	// add click listeners;
	squares[i].addEventListener("click", function(){
	// grab color of clicked sqr;
	var clickedColor = this.style.backgroundColor;
	// compare color of clickd sqr;
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});

}

function changeColors(color){
	//loop through all sqrs
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = color;
	};
	//change color each

}

function pickRandom () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorArray(num){
	
	var arr = [];

	for (var i = 0; i < num; i++) {
	arr.push(randomColor())
	
	};

	return arr;
}

function randomColor(){
	//red
	var r = Math.floor(Math.random()*256);
	//greed
	var g = Math.floor(Math.random()*256);
	//blue
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
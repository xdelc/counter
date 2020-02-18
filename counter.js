// call decrease button and assign to variable
var decreaseBtn = document.querySelector("#decrease-btn");
// call increase button and assign to variable
var increaseBtn = document.querySelector("#increase-btn");
// call reset button and assign to variable
var resetButton = document.querySelector("#reset-btn");
// call counter and assign to variable
var counterDisplay = document.querySelector("#counter");
// create score variable 
var score = 0;
// addEventListener for Increase Count
increaseBtn.addEventListener("click", function increaseCount(){
	score++;
	counterDisplay.textContent = score;
});
// addEventListener for Decrease Count 
decreaseBtn.addEventListener("click", function decreaseCount(){
	score--;
	counterDisplay.textContent = score;
}); 
// addEventListener for reset button
resetButton.addEventListener("click", function resetCount(){
	score = 0; 
	counterDisplay.textContent = score;
});

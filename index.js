// Prompt user for their name and show on the page to refresh
//var userName = prompt("Please enter your name.");
//document.querySelector("h1").innerText = "Refresh me, " + userName;

// Adding images of dice6 as the source to both of the img elements.
document.querySelector(".img1").setAttribute("src","/images/dice6.png");
document.querySelector(".img2").setAttribute("src","/images/dice6.png");

// Creating a Random Number for Dice 1
    // setting first random number b/w 1-6
var randomNumber1 = Math.floor(6 * Math.random());
    randomNumber1++;
console.log(randomNumber1);

// Creating a Random Number for Dice 2
    // setting first random number b/w 1-6
    var randomNumber2 = Math.floor(6 * Math.random());
    randomNumber1++;
console.log(randomNumber1);

// Show the corresponding dice to the random number for Dice 1
if (randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src","/images/dice1.png");
} else if (randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src","/images/dice2.png");
} else if (randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src","/images/dice3.png");
} else if (randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src","/images/dice4.png");
} else {
    document.querySelector(".img1").setAttribute("src","/images/dice5.png");
}

// Show the corresponding dice to the random number for Dice 2

if (randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src","/images/dice1.png");
} else if (randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src","/images/dice2.png");
} else if (randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src","/images/dice3.png");
} else if (randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src","/images/dice4.png");
} else {
    document.querySelector(".img2").setAttribute("src","/images/dice5.png");
}

// Show the Winner of the Dice Roll

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins 🚩";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
} else if (randomNumber1 = randomNumber2) {
    document.querySelector("h1").textContent = "It's a Tie 🚩";
} else {
    document.querySelector("h1").textContent = "welp!";
}
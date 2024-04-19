// Function to handle button clicks
function handleButtonClick(url) {
    window.open(url, '_blank');
}

// Add event listeners to buttons
document.getElementById('button1').addEventListener('click', function () {
    handleButtonClick('https://shivo1211.github.io/game-snake/');
});

document.getElementById('button2').addEventListener('click', function () {
    handleButtonClick('https://shivo1211.github.io/rollDice/');
});

// document.getElementById('button3').addEventListener('click', function () {
//     handleButtonClick('https://yahoo.com');
// });

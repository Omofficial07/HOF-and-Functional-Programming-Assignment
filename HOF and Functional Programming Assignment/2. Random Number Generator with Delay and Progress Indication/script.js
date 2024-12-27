// Delay time (modifiable)
let delayInSeconds = 3;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Countdown and random number generation
function startCountdown() {
  let timeRemaining = delayInSeconds;

  // Interval to display the countdown
  let intervalId = setInterval(() => {
    if (timeRemaining > 0) {
      console.log(`Time remaining: ${timeRemaining} second(s)`);
      timeRemaining--;
    } else {
      clearInterval(intervalId); // Stop the countdown
      let randomNumber = generateRandomNumber(); // Generate random number
      console.log("Generated Random Number:", randomNumber); // Display the random number
    }
  }, 1000); // Executes every 1 second
}

// Start the process
startCountdown();

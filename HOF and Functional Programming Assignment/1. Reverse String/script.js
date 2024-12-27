// Input string
let input = "Hello, World!";

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Delayed execution using setTimeout
setTimeout(() => {
  let reversedString = reverseString(input);
  console.log("Reversed String:", reversedString);
}, 2000); // 2000 milliseconds = 2 seconds

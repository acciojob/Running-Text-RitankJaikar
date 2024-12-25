// Initial text and target paragraph
const text = "We love Programming!";
const para = document.querySelector("#text");

// Grab the input element for speed
const speedInput = document.querySelector("#speed");

let interval; // To store the interval instance
let i = 0;

// Function to display text with a given speed
const displayText = () => {
  // Clear existing interval if any
  if (interval) clearInterval(interval);

  const speed = parseInt(speedInput.value); // Get speed from input

  // Validate speed and ensure it is within 1 to 10
  if (!speed || speed < 1 || speed > 10) {
    alert("Please enter a speed between 1 and 10.");
    return;
  }

  para.innerHTML = ""; // Reset paragraph text
  i = 0; // Reset counter

  // Set interval based on speed
  interval = setInterval(() => {
    if (i >= text.length) {
      clearInterval(interval); // Clear interval once text is displayed
      return;
    }
    para.innerHTML += text[i]; // Append character to paragraph
    i++;
  }, 500 / speed);
};

// Add event listener for when the speed input value changes
speedInput.addEventListener("input", displayText);

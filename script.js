const text = "We love Programming!";
const para = document.querySelector("#text");
const speedInput = document.querySelector("#speed");

let interval;
let i = 0;

const displayText = () => {
  if (interval) clearInterval(interval);

  const speed = parseInt(speedInput.value);

  if (!speed || speed < 1 || speed > 10) {
    alert("Please enter a speed between 1 and 10.");
    return;
  }

  para.innerHTML = "";
  i = 0;

  interval = setInterval(() => {
    if (i >= text.length) {
      clearInterval(interval);
      return;
    }
    para.innerHTML += text[i];
    i++;
  }, 500 / speed);
};

speedInput.addEventListener("input", displayText);

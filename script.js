//your JS code here. If required.
const text = "We love Programming!";

const para = document.querySelector("#para");

let input = prompt("Enter input fom 1 to 10.");
input = parseInt(input);

let i=0;
const interval = setInterval(() => {
	if(i>=text.length) {
		clearInterval(interval);
		return;
	}
	console.log(i);
	para.innerText += text[i];
	i++;
}, 500/input);






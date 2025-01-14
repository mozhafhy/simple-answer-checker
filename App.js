const answers = ["a", "b", "c", "d", "e"];

const [next] = document.getElementsByClassName("next");
const [counter] = document.getElementsByClassName("counter");
const [input] = document.getElementsByClassName("jawab");
const [totalSoal] = document.getElementsByClassName("count");
const [submit] = document.getElementsByClassName("submit");
const [result] = document.getElementsByClassName("result");

totalSoal.textContent = answers.length;

let count = 1;
submit.addEventListener("click", () => {
  const userInput = input.value.trim().toLowerCase();
  result.innerHTML = "";

  console.log(`Inputmu ${userInput}, bro`);

  const showResult = document.createElement("div");
  showResult.className = "show-result";

  if (userInput === answers[count - 1]) {
    showResult.innerHTML = "TRUE";
    showResult.style.background = "green";
    console.log("Jawaban benar");
  } else {
    showResult.innerHTML = "FALSE";
    showResult.style.background = "red";
    console.log("Jawaban salah");
  }
  console.log(showResult);

  result.appendChild(showResult);
  
  setTimeout(() => {
    showResult.classList.add("in");
  }, 0);

  setTimeout(() => {
    showResult.classList.remove("in");
    showResult.classList.add("out");
  }, 1000);

  setTimeout(() => {
    showResult.remove();
  }, 2000);

  console.log(`Ini jawabannya ${answers[count - 1]}`);
});

next.addEventListener("click", () => {
  if (count < answers.length) {
    count++;
    counter.textContent = count;
  } else {
    return;
  }
});

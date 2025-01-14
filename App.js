const answers = ["a", "b", "c", "d", "e"];

const [next] = document.getElementsByClassName("next");
const [counter] = document.getElementsByClassName("counter");
const [input] = document.getElementsByClassName("jawab");
const [totalSoal] = document.getElementsByClassName("count");
const [submit] = document.getElementsByClassName("submit");
const [result] = document.getElementsByClassName("result");

totalSoal.textContent = answers.length;

let count = 1;
// ! Submit button
submit.addEventListener("click", () => {
  const userInput = input.value;
  result.innerHTML = "";

  const showResult = document.createElement("div");
  showResult.className = "show-result";

  if (userInput === answers[count - 1]) {
    showResult.innerHTML = "TRUE";
    showResult.style.background = "green";
  } else {
    showResult.innerHTML = "FALSE";
    showResult.style.background = "red";
  }

  result.appendChild(showResult);

  showResult.classList.add("show-result");

  void showResult.offsetHeight;

  showResult.classList.add("in");

  setTimeout(() => {
    showResult.classList.replace("in", "out");
    setTimeout(() => {
      showResult.remove();
    }, 2000);
  }, 1000);
});

// ! Next button
next.addEventListener("click", () => {
  if (count < answers.length) {
    count++;
    counter.textContent = count;
  } else {
    return;
  }
});

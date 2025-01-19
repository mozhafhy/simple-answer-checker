const answers = ["a", "b", "c", "d", "e"];

const next = document.querySelector(".next");
const back = document.querySelector(".back");
const counter = document.querySelector(".counter");
const input = document.querySelector(".jawab");
const totalSoal = document.querySelector(".count");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const message = document.querySelector(".alert");

totalSoal.textContent = answers.length;

let count = 1;
const ANIMATION_DURATION = 1250;
submit.addEventListener("click", () => {
  const userInput = input.value;
  result.textContent = "";

  const showResult = document.createElement("div");
  showResult.className = "show-result";
  showResult.textContent = userInput === answers[count - 1] ? "BENAR" : "SALAH";
  showResult.classList.add(
    userInput === answers[count - 1] ? "benar" : "salah"
  );

  result.appendChild(showResult);

  setTimeout(() => showResult.classList.add("in"), 0); // ? The .in class appears instantly
  setTimeout(
    () => showResult.classList.replace("in", "out"),
    ANIMATION_DURATION
  );
  setTimeout(() => showResult.remove(), ANIMATION_DURATION * 2);
});

const MESSAGE_DURATION = 2000;
let messageTimeOut;
function showMessage(text, duration = MESSAGE_DURATION) {
  if (messageTimeOut) {
    clearTimeout(messageTimeOut);
  }

  message.textContent = text;
  messageTimeOut = setTimeout(() => {
    message.textContent = "";
    messageTimeOut = null;
  }, duration);
}

next.addEventListener("click", () => {
  if (count < answers.length) {
    count++;
    message.textContent = "";
    counter.textContent = count;
  } else {
    showMessage("Anda berada di soal terakhir!");
  }
});
back.addEventListener("click", () => {
  if (count > 1) {
    count--;
    message.textContent = "";
    counter.textContent = count;
  } else {
    showMessage("Anda berada di soal pertama!");
  }
});

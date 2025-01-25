const answerKeys = [
  ["A", "120"],
  ["B", "40"],
  ["C", "minggu"],
];

const inputs = document.querySelectorAll("form");
const message = document.querySelector(".alert");
const tim = document.querySelector(".nomor");
const scoreboard = document.querySelector(".scoreboard");
const progresses = scoreboard.children;

const ANIMATION_DURATION = 2000;
const ALERT_DURATION = 2000;
const CLASS_BENAR = "benar";
const CLASS_SALAH = "salah";
const CLASS_DISABLED = "disabled";

inputs.forEach((input, key) => {
  input.addEventListener("submit", (e) => e.preventDefault());
  const [jawab, submit] = input.children;
  const [idSoal, answerKey] = answerKeys[key];

  submit.addEventListener("click", () => {
    const nomorTim = parseInt(tim.value);

    if (!nomorTim && nomorTim !== 0) {
      showAlert("Nomor tim belum dimasukkan!");
      return;
    } else if (nomorTim < 1 || nomorTim > progresses.length) {
      showAlert(`Masukkan nomor tim antara 1 dan ${progresses.length}!`);
      return;
    }

    const [_, progress] = progresses[nomorTim - 1].children;
    const terjawab = progress.children;

    const soal = document.querySelector(`.${idSoal}`);
    const userInput = jawab.value.toLowerCase().replace(/\W/g, "");
    if (userInput === answerKey) {
      terjawab[key].classList.add(CLASS_BENAR);
      soal.classList.add(CLASS_BENAR);
    } else {
      soal.classList.add(CLASS_SALAH);
    }
    input.classList.add(CLASS_DISABLED);

    setTimeout(() => {
      soal.classList.remove(CLASS_BENAR, CLASS_SALAH);
      input.classList.remove(CLASS_DISABLED);
    }, ANIMATION_DURATION);
  });
});

let messageTimeOut;
function showAlert(text, duration = ALERT_DURATION) {
  if (messageTimeOut) {
    clearTimeout(messageTimeOut);
  }

  message.textContent = text;
  messageTimeOut = setTimeout(() => {
    message.textContent = "";
    messageTimeOut = null;
  }, duration);
}

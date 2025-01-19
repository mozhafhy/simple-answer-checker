const answerKeys = ["a", "b", "c"];

const inputs = document.querySelectorAll("form");
const message = document.querySelector(".alert");
const idSoal = ["A", "B", "C"];

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

  submit.addEventListener("click", () => {
    if (tim.value === "") {
      showAlert("Nomor tim belum dimasukkan!");
      return;
    }
    if (Number(tim.value) < 1 || Number(tim.value) > progresses.length) {
      showAlert("Masukkan nomor tim antara 1 dan 16!");
      return;
    }

    const nomor = Number(tim.value);
    const [_, progress] = progresses[nomor - 1].children;
    const terjawab = progress.children;

    const soal = document.querySelector(`.${idSoal[key]}`);
    if (jawab.value === answerKeys[key]) {
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

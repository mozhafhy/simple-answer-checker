const answer = ["a", "b", "c"];

const inputs = document.querySelectorAll("form");
const soal = ["A", "B", "C"];

const [tim] = document.getElementsByClassName("nomor");
const [scoreboard] = document.getElementsByClassName("scoreboard");
const progresses = scoreboard.children;

inputs.forEach((input, key) => {
  const [jawab, submit] = input.children;

  submit.addEventListener("click", () => {
    if (tim.value === "") {
      alert("Masukkan Nomor Tim!");
      return;
    }

    const nomor = Number(tim.value);
    const [_, progress] = progresses[nomor - 1].children;
    const terjawab = progress.children;

    const [box] = document.getElementsByClassName(soal[key]);
    if (jawab.value === answer[key]) {
      terjawab[key].style.background = "green";
      box.style.background = "green";
    } else {
      box.style.background = "red";
    }
    input.style.filter = "opacity(0.5) brightness(0.75)";
    input.style.pointerEvents = "none";

    setTimeout(() => {
      box.style.background = "";
      input.style.pointerEvents = "";
      input.style.filter = "";
    }, 2000);
  });
});

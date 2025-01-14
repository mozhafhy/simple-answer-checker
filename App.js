const answers = ["a", "b", "c", "d", "e"];

const [next] = document.getElementsByClassName("next");
const [counter] = document.getElementsByClassName("counter");
const [input] = document.getElementsByClassName("jawab");
const [totalSoal] = document.getElementsByClassName("count");

totalSoal.textContent = answers.length;

let count = 1;
next.addEventListener("click", () => {
  if (count <= answers.length) {
    counter.textContent = count;
    console.log(answers[count - 1]);
    count++;
  } else {
    return;
  }
});

const answer = ["a", "b", "c"];

const els = document.querySelectorAll("form");
const soal = ["A", "B", "C"];

els.forEach((el, key) => {
  let [jawab, submit] = el.children;

  submit.addEventListener("click", () => {
    let [box] = document.getElementsByClassName(soal[key]);
    // box.style.background = "";
    if (jawab.value === answer[key]) {
      box.style.background = "green";
    } else {
      box.style.background = "red";
    }

    setTimeout(() => {
      box.style.background = "";
    }, 2000);
  });
});

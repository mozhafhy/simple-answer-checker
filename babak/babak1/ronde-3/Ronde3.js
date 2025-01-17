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
      el.style.pointerEvents = "none";
      el.style.filter = "opacity(0.5) brightness(0.75)"
    } else {
      box.style.background = "red";
      el.style.pointerEvents = "none";
      el.style.filter = "opacity(0.5) brightness(0.75)"
    }
    
    setTimeout(() => {
      box.style.background = "";
      el.style.pointerEvents = "";
      el.style.filter = ""
    }, 2000);
  });
});

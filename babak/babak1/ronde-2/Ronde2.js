const answerKeys = [
  { nama: "nabila", posisi: [3, 2] },
  { nama: "zhafif", posisi: [1, 2] },
  { nama: "artanti", posisi: [1, 1] },
  { nama: "rakha", posisi: [2, 1] },
  { nama: "mirna", posisi: [2, 3] },
];

const inputs = document.querySelectorAll("form");

const RESULT_DURATION = 2000;
const CLASS_BENAR = "benar";
const CLASS_SALAH = "salah";
const CLASS_DISABLED = "disabled";

inputs.forEach((input, idx) => {
  input.addEventListener("submit", (e) => e.preventDefault());

  const [jawaban, submit] = input.children;
  const [barisInput, kolomInput] = jawaban.children;

  submit.addEventListener("click", () => {
    const { nama, posisi } = answerKeys[idx];
    const [baris, kolom] = posisi;
    const soal = document.querySelector(`.${nama}`);

    const isCorrect =
      parseInt(barisInput.value, 10) === baris &&
      parseInt(kolomInput.value, 10) === kolom;

    showResult({
      isCorrect,
      elements: [soal, barisInput, kolomInput, input],
    });
  });
});

function showResult({ isCorrect, elements }) {
  const [soal, barisInput, kolomInput, input] = elements;
  const classSate = isCorrect ? CLASS_BENAR : CLASS_SALAH;

  requestAnimationFrame(() => {
    [soal, barisInput, kolomInput].forEach((el) => {
      el.classList.remove(CLASS_BENAR, CLASS_SALAH);
      el.classList.add(classSate);
    });
    input.classList.add(CLASS_DISABLED);

    setTimeout(() => {
      [soal, barisInput, kolomInput].forEach((el) => {
        el.classList.remove(classSate);
      });
      input.classList.remove(CLASS_DISABLED);
    }, RESULT_DURATION);
  });
}

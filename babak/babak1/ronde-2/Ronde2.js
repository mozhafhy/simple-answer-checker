const answerKeys = [
  { nama: "nabila", posisi: { baris: 0, kolom: 0 } },
  { nama: "zhafif", posisi: { baris: 1, kolom: 1 } },
  { nama: "artanti", posisi: { baris: 2, kolom: 2 } },
  { nama: "rakha", posisi: { baris: 3, kolom: 3 } },
  { nama: "mirna", posisi: { baris: 4, kolom: 4 } },
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
    const baris = posisi.baris;
    const kolom = posisi.kolom;
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

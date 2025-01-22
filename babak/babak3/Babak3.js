fetch("./Answers.json")
  .then((response) => response.json())
  .then((answerKeys) => {
    const form = document.querySelector("form");

    const kode = document.querySelector(".kode-soal");
    const message = document.querySelector(".alert");

    const input = document.querySelector(".jawab");
    const submit = document.querySelector(".submit");
    const result = document.querySelector(".result");

    const ALERT_DURATION = 2000;
    const RESULT_DURATION = 2000;

    form.addEventListener("submit", (e) => e.preventDefault());
    submit.addEventListener("click", () => {
      const kodeSoal = kode.value.trim();
      const answerData = getAnswer(kodeSoal);
      result.textContent = "";

      if (!kodeSoal) {
        showAlert("Masukkan kode soal!");
        return;
      }
      if (!answerData) {
        showAlert("Soal tidak ditemukan!");
        return;
      }

      const answer = answerData.toLowerCase();
      const userInput = input.value.toLowerCase();

      showResult(userInput === answer);
    });

    function showResult(isCorrectAnswer) {
      const resultElement = document.createElement("div");
      resultElement.className = `show-result ${
        isCorrectAnswer ? "benar" : "salah"
      }`;
      resultElement.textContent = isCorrectAnswer ? "BENAR" : "SALAH";

      result.appendChild(resultElement);
      setTimeout(() => resultElement.classList.add("in"), 0);
      setTimeout(
        () => resultElement.classList.replace("in", "out"),
        RESULT_DURATION
      );
      setTimeout(() => resultElement.remove(), 2 * RESULT_DURATION);
    }

    function getAnswer(kodeSoal) {
      const found = answerKeys.find((soal) => soal.kode === kodeSoal);
      return found ? found.jawaban : null;
    }

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
  })
  .catch((error) => console.error("Gabisa, bro", error));

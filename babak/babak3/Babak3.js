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
      result.textContent = "";
      if (kodeSoal === "") {
        showAlert("Masukkan kode soal!");
        return;
      }

      const answer = getAnswer(kodeSoal);
      const userInput = input.value;
      const isCorrectAnswer = userInput === answer;

      const showResult = document.createElement("div");
      showResult.className = "show-result";
      showResult.textContent = isCorrectAnswer ? "BENAR" : "SALAH";
      showResult.classList.add(isCorrectAnswer ? "benar" : "salah");

      result.appendChild(showResult);
      setTimeout(() => showResult.classList.add("in"), 0);
      setTimeout(
        () => showResult.classList.replace("in", "out"),
        RESULT_DURATION
      );
      setTimeout(() => showResult.remove(), 2 * RESULT_DURATION);

      console.log(answer);
    });

    function getAnswer(input) {
      let answer = "No";
      for (let key = 0; key < answerKeys.length; key++) {
        if (answerKeys[key].kode === input) {
          answer = answerKeys[key].jawaban;
          break;
        }
      }

      return answer;
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

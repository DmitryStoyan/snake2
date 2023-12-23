document.addEventListener("DOMContentLoaded", function () {
  let playButton = document.querySelector(".btn-game");
  playButton.addEventListener("click", function () {
    window.location.href = "../game.html";
  });

  const installIcon = document.querySelector(".downloads-button");

  // Установка
  let defaultInstallEvent = null;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    defaultInstallEvent = event;
  });
  installIcon.addEventListener("click", (event) => {
    defaultInstallEvent.prompt();
  });
});

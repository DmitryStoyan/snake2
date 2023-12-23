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
    if (defaultInstallEvent) {
      defaultInstallEvent.prompt();
    } else {
      // Обработка ситуации, когда событие beforeinstallprompt не было запущено
      // Можно предоставить альтернативный опыт для установки приложения
      // или вывести сообщение об ошибке
      console.error("Событие beforeinstallprompt не было запущено");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash-screen");
  const underline = document.querySelector(".splash-underline");

  if (underline) {
    underline.addEventListener("animationend", () => {
      splash.classList.add("fade-out");
      splash.addEventListener("transitionend", () => {
        splash.remove();
      }, { once: true });
    });
  }
});

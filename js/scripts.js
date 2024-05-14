document.addEventListener("DOMContentLoaded", function () {
  let textFrame = document.querySelector(".text-frame");

  function startAnimation() {
    textFrame.classList.add("typing");

    setTimeout(function () {
      textFrame.classList.remove("typing");
      textFrame.classList.add("erasing");

      setTimeout(function () {
        textFrame.classList.remove("erasing");

        setTimeout(startAnimation, 3000);
      }, 3000);
    }, 3000);
  }

  startAnimation();
});

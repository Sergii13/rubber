document.addEventListener("DOMContentLoaded", () => {
  const allInput = document.querySelectorAll("input");
  if (allInput.length > 0) {
    allInput.forEach((input) => {
      input.addEventListener("focusout", (e) => {
        console.log(e.target.value);
        if (e.target.value.trim().length > 0) {
          input.classList.add("input--filled");
        } else {
          input.classList.remove("input--filled");
        }
      });
    });
  }

  const btnTop = document.querySelector(".footer__to-top");
  if (btnTop) {
    btnTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

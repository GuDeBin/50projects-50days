const panels = document.querySelectorAll(".panel");
let index = 1;

panels.forEach((panel) => {
  panel.style.backgroundImage = `url(images/photo-${index}.jfif)`;
  index++;
  panel.addEventListener("click", () => {
    removerActiveClass();
    panel.classList.add("active");
  });
});

function removerActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

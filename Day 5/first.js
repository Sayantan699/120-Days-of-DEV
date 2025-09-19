const buttons = document.querySelectorAll("button");
function changecolor() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.style.backgroundColor = button.id;
    });
  });
}
changecolor();

setInterval(() => {
  document.body.style.backgroundColor = "black";
}, 3000);

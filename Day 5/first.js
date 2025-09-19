// const buttons = document.querySelectorAll("button");
// function changecolor() {
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       document.body.style.backgroundColor = button.id;
//     });
//   });
// }
// changecolor();

//Using event delegation
const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    //event.target refers to the button i m clcking
    //event.target.tagName always returns the tag name in UPPERCASE (e.g., "BUTTON", "DIV", "SPAN").
    document.body.style.backgroundColor = event.target.id;
  }
  //   if (event.target.tagName === "button") {
  //     document.body.style.backgroundColor = event.target.id;
  //   }

  setTimeout(() => {
    document.body.style.backgroundColor = "black";
  }, 3000);
});

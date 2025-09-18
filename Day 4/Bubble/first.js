document.body.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  const X = event.clientX;
  const Y = event.clientY;

  circle.style.position = "absolute"; // needed to place it at coordinates
  circle.style.left = `${X - 25}px`;
  circle.style.top = `${Y - 25}px`;

  circle.className = "circle";

  const circlecolor = [
    "red",
    "blue",
    "orange",
    "green",
    "purple",
    "black",
    "yellow",
    "#FF5733",
    "#8E44AD",
    "#27AE60",
  ];

  const circlename = ["Hello", "Hola", "Welcome", "Hey"];

  circle.textContent =
    circlename[Math.floor(Math.random() * circlename.length)];
  circle.style.backgroundColor =
    circlecolor[Math.floor(Math.random() * circlecolor.length)];

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 4000);
});

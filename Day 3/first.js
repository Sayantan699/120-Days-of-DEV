function timing() {
  const timer = document.getElementById("root");
  const now = new Date();
  const indiantime = now.toLocaleTimeString();
  timer.innerHTML = indiantime;
}

setInterval(timing, 2000); // calls every 2 sec

const timer = document.getElementById("root");

timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.background = "orange";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

const head = document.querySelector(".header2");
head.style.fontSize = "150px";
head.style.fontFamily = "Sans-Serif";
head.style.color = "Red";

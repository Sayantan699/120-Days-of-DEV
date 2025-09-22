const form = document.querySelector("form");
form.addEventListener("click", (event) => {
  console.log(event.target.value);
});

//to submit the form

form.addEventListener("submit", (event) => {
  //page refresh on usbmit
  //   console.log(event.target.value);
  console.log("Form Submited!");
});

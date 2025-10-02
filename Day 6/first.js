const form = document.querySelector("form");
form.addEventListener("click", (event) => {
  console.log(event.target.value);
});

//to submit the form

form.addEventListener("submit", (event) => {
  event.preventDefault(); // to prevent the page from refresh
  //page refresh on usbmit
  //   console.log(event.target.value);
  //   console.log("Form Submited!");

  const data = new FormData(form);

  for (let [key, value] of data.entries()) {
    //data.entries give key value pairs
    console.log(key, value);
  }
});

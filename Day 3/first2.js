function attach(content) {
  const ele = document.createElement("li");
  ele.innerHTML = content;

  const parent = document.getElementById("root");
  parent.appendChild(ele);
}

attach("TS");
attach("React");

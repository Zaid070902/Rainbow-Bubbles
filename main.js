let body = document.querySelector("body");

function movePoint() {
  let randomPoint = Math.random() * 100;
  return Math.floor(randomPoint);
}

setInterval(function call(event) {
  window.addEventListener("pointermove", call);

  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = event.pageY + "px";
  circle.style.left = event.pageX + "px";

  body.appendChild(circle);

  setInterval(() => {
    circle.remove();
  }, 3000);
}, 0);

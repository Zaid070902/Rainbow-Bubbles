let body = document.querySelector("body");

function spawnPoint() {
  let randomPosition = Math.random() * 90;
  return Math.floor(randomPosition);
}

function movePoint() {
  let randomPoint = Math.random() * 100;
  return Math.floor(randomPoint);
}

spawnPoint();

setInterval(function call(event) {
  window.addEventListener("pointermove", call);
  window.addEventListener("touchmove", call);

  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.borderRadius = "50%";
  circle.style.top = event.pageY + "px";
  circle.style.left = event.pageX + "px";

  body.appendChild(circle);

  setInterval(() => {
    circle.remove();
  }, 5000);
}, 0);

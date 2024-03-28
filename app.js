const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

meditateAnimation();

function meditateAnimation() {
  container.className = "container";
  text.innerHTML = "breathe in";
  container.classList.add("grow");
  setTimeout(() => {
    text.innerHTML = "hold";

    setTimeout(() => {
      text.innerHTML = "breathe out";
      container.classList.replace("grow", "shrink");
    }, holdTime);
  }, breatheTime);
}

setInterval(meditateAnimation, totalTime);

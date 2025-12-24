const screen = document.querySelector("main");
const span = document.querySelector("span");
screen.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  span.style.left = `${x+18}px`;
  span.style.top = `${y+18}px`;
});

const screen = document.querySelector("main");
const cursor = document.createElement("span");
screen.appendChild(cursor);

screen.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

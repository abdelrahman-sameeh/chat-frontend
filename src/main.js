import { io } from "socket.io-client";
// export const socket = io.connect("http://localhost:3001");
export const socket = io.connect("https://chat-app-vp2n.onrender.com");


export const myId = localStorage.user
  ? JSON.parse(localStorage.user)._id
  : null;
export const me = localStorage.user ? JSON.parse(localStorage.user) : null;

localStorage.removeItem("pageCount");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-drop-down")) {
    const dropDown = document.querySelector(".drop-down");
    dropDown.classList.toggle("show");
  }
  if (
    !e.target.classList.contains("toggle-drop-down") &&
    document.querySelector(".drop-down.show")
  ) {
    document.querySelector(".drop-down.show").classList.toggle("show");
  }
});

setTimeout(() => {
  if (document.querySelector(".messages")) {
    document
      .querySelector(".messages")
      .scrollTo({ top: 500000, behavior: "smooth" });
  }
}, 1100);


// remove loading after click on it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("loading")) {
    e.target.classList.add("d-none");
  }
});

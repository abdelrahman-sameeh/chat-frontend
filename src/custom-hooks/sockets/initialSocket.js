import { socket } from "../../main";

const user = localStorage.user ? JSON.parse(localStorage.user) : null;

if (user) {
  socket.on("connect", () => {
    socket.emit("joined", user._id);
  });
}

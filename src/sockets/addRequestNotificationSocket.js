import { notify } from "../custom-hooks/utils/Notify";
import { socket } from "../main";


socket.on("addFriendSuccessfully", async () => {
  notify("تم ارسال طلب الصداقه", "success");
});


socket.on("sendRequestNotification", (user) => { 
  if (window.location.pathname != "/friendRequestReceived") {
    const notifyElm = document.querySelector("span.notification");
    notifyElm.classList.add("active");
  }
  notify(`ارسل اليك ${user.name} طلب صداقة`, "success");
});


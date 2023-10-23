import { notify } from "../custom-hooks/utils/Notify";
import { socket } from "../main";

// accept request notification
// 1- to socket (اللى باعت)
socket.on("acceptedSuccessfully", async () => {
  return notify(`تم قبول طلب الصداقه `, "success");
});

// 2- to another socket (اللى مبعوت له)
socket.on("sendAcceptedRequestNotification", (me) => {
  return notify(`تم قبول طلب الصداقه ${me.name}`, "success");
});

// cancel request notification 
socket.on("canceledSuccessfully", async () => {
  return notify("تم حذف الطلب بنجاح", "success");
});


// remove friend from friends
socket.on('removedFriendSuccessfully', ()=>{
  return notify("تم الحذف من الاصدقاء", "success");
})



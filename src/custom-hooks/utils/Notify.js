import { toast } from "react-hot-toast";

export const notify = (msg, status) => {
  const getStatus = {
    warn: "warn",
    success: "success",
    error: "error",
  };

  switch (getStatus[status]) {
    case "success":
      return toast.success(msg, {
        duration: 3500,
      });
    case "error":
      return toast.error(msg, {
        duration: 3500,
      });
    case "warn":
      return toast(msg, {
        duration: 3500,
        position: "top-center",
        // Custom Icon
        icon: "⚠️",
      });
    default:
      return toast(msg, {
        duration: 3500,
        position: "top-center",
        // Custom Icon
        icon: "⚠️",
      });
  }
};

import React, { useEffect, useState } from "react";
import { notify } from "../utils/Notify";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/userAction";
import { getLoggedUser } from "../../redux/actions/friendsAction";

const UpdateUserInfoHook = (user) => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setName(user.name);
    setImage(user.image);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user]);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeImage = (e) => {
    setSelectedFile(e.target.files[0]);
    if (e.target.files[0].type.startsWith("image")) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      return notify("كلمة المرور مطلوبة", "warn");
    }

    if (name && name.length <= 2 && name != user.name) {
      return notify("من فضلك ادخل اسم اكبر", "warn");
    }

    if (
      selectedFile &&
      selectedFile != "" &&
      !selectedFile.type.startsWith("image")
    ) {
      return notify("من فضلك اختر صورة", "warn");
    }

    const formData = new FormData();

    if (name && name != user.name) {
      formData.append("name", name);
    }

    if (image && image != user.image && selectedFile != "") {
      formData.append("image", selectedFile);
    }

    formData.append("password", password);

    setLoading(true);
    setIsPress(true);
    await dispatch(updateUser(formData));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.user.updateUserInfo);

  const run = async (_) => await dispatch(getLoggedUser());

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        setPassword("");
        setSelectedFile("");
        run();
        notify("تم التعديل بنجاح", "success");
      }
      if (
        response &&
        response.data &&
        response.data.message == "password is incorrect"
      ) {
        notify("كلمة المرور غير صحيحة", "error");
      }
      if (response && response.status == 500) {
        notify("حدث خطأ حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    name,
    password,
    phone,
    email,
    image,
    handleChangeName,
    handleChangeImage,
    handleChangePassword,
    handleSubmit,
  ];
};

export default UpdateUserInfoHook;

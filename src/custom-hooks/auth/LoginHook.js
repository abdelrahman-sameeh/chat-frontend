import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validationEmail } from "../utils/validationEmail";
import { login } from "../../redux/actions/authAction";
import { notify } from "../utils/Notify";

const validation = (email, password) => {
  if (!email || !password) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }
  if (!validationEmail(email)) {
    notify("ادخل بريد الكترونى صحيح", "warn");
    return false;
  }
  return true;
};

const LoginHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation(email, password)) {
      return false;
    }

    const data = {
      email,
      password,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(login(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.auth.login);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        localStorage.user = JSON.stringify(response.data.data);
        localStorage.token = response.data.token;
        notify("تم تسجيل الدخول بنجاح", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
        return;
      }
      if (
        response &&
        response.status === 400 &&
        response.data.message.startsWith("Email or password is")
      ) {
        notify("الايميل او كلمة المرور خطأ", "error");
        return;
      }
      if (response && response.status != 200) {
        notify("حدث خطأ اثناء تسجيل الدخول", "error");
        return;
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  ];
};

export default LoginHook;

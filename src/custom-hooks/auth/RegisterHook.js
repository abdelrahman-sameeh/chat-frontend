import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../utils/Notify";
import { validationEmail } from "../utils/validationEmail";
import { validationPhone } from "../utils/validationPhone";
import { register } from "../../redux/actions/authAction";

const validation = (name, email, phone, password, passwordConfirm) => {
  if (!name || !email || !phone || !password || !passwordConfirm) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }
  if (name.length < 2) {
    notify("يجب ان يكون الاسم اكبر من حرفين", "warn");
    return false;
  }
  if (!validationEmail(email)) {
    notify("ادخل بريد الكترونى صحيح", "warn");
    return false;
  }

  if (!validationPhone(phone)) {
    notify("ادخل رقم هاتف صحيح", "warn");
    return false;
  }
  if (password.length < 4) {
    notify("يجب ان تكون كلمة المرور اكبر من 4 حروف", "warn");
    return false;
  }
  if (password != passwordConfirm) {
    notify("يجب ان تكون كلمة المرور وتأكيدها متساويان", "warn");
    return false;
  }

  return true;
};

const RegisterHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation(name, email, phone, password, passwordConfirm)) {
      return false;
    }

    const data = {
      name,
      email,
      phone,
      password,
      passwordConfirm,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(register(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.auth.register);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 201) {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setPasswordConfirm("");
        notify("تم انشاء الحساب بنجاح", "success");
      }

      if (
        response &&
        response.status === 400 &&
        response.data.error &&
        response.data.error[0].msg.startsWith("this phone already")
      ) {
        notify("هذا الرقم مستخدم بالفعل", "error");
      }

      if (
        response &&
        response.status === 400 &&
        response.data.error &&
        response.data.error[0].msg.startsWith("this email already")
      ) {
        notify("هذا البريد الالكترونى مستخدم بالفعل", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    name,
    email,
    phone,
    password,
    passwordConfirm,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    handleChangePasswordConfirm,
    handleSubmit,
  ];
};

export default RegisterHook;

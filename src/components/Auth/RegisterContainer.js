import React from "react";
import { Link } from "react-router-dom";
import RegisterHook from "../../custom-hooks/auth/RegisterHook";
import { Spinner } from "react-bootstrap";

const RegisterContainer = () => {
  const [
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
  ] = RegisterHook();

  return (
    <div className="container pt-5">
      <form className="p-2 rounded border" data-bs-theme="dark">
        <h3 className="text-center"> تسجيل حساب جديد </h3>
        <div className="mt-2">
          <label htmlFor="name"> الاسم </label>
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            id="name"
            className="form-control mt-1"
            placeholder="الاسم"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="email"> البريد الالكترونى </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            id="email"
            className="form-control mt-1"
            placeholder="البريد الالكترونى"
          />
        </div>{" "}
        <div className="mt-2">
          <label htmlFor="phone"> الهاتف </label>
          <input
            value={phone}
            onChange={handleChangePhone}
            type="text"
            id="phone"
            className="form-control mt-1"
            placeholder="الهاتف"
          />
        </div>{" "}
        <div className="mt-2">
          <label htmlFor="password"> كلمة المرور </label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            id="password"
            className="form-control mt-1"
            placeholder="كلمة المرور"
          />
        </div>{" "}
        <div className="mt-2">
          <label htmlFor="passwordConfirm"> تأكيد كلمة المرور </label>
          <input
            value={passwordConfirm}
            onChange={handleChangePasswordConfirm}
            type="password"
            id="passwordConfirm"
            className="form-control mt-1"
            placeholder="تأكيد كلمة المرور"
          />
        </div>
        <div className="mt-2">
          <button
            onClick={handleSubmit}
            className="btn btn-primary d-flex align-items-center gap-1"
          >
            تسجيل حساب جديد{" "}
            {loading && isPress ? (
              <Spinner variant="light" animation="grow" />
            ) : null}
          </button>
        </div>
        <div className="text-center mt-2">
          لديك حساب بالفعل
          <Link to="/login" className="text-danger text-decoration-none">
            {" "}
            اضغط هنا{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterContainer;

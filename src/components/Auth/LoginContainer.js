import React from "react";
import { Link } from "react-router-dom";
import LoginHook from "../../custom-hooks/auth/LoginHook";
import { Spinner } from "react-bootstrap";

const LoginContainer = () => {
  const [
    loading,
    isPress,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  ] = LoginHook();

  return (
    <div className="container pt-5">
      <form className="p-2 rounded border" data-bs-theme="dark">
        <h3 className="text-center"> تسجيل الدخول </h3>
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
          <label htmlFor="password"> كلمة المرور </label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            id="password"
            className="form-control mt-1"
            placeholder="كلمة المرور"
          />
        </div>
        <div className="mt-2">
          <button
            onClick={handleSubmit}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            {" "}
            تسجيل الدخول
            {loading && isPress ? (
              <Spinner variant="light" animation="grow" />
            ) : null}
          </button>
        </div>
        <div className="text-center mt-2">
          ليس لديك حساب
          <Link to="/register" className="text-danger text-decoration-none">
            {" "}
            اضغط هنا{" "}
          </Link>
        </div>
        <div className="text-center">
          نسيت كلمة المرور
          <Link
            to="/forgetPassword"
            className="text-danger text-decoration-none"
          >
            {" "}
            اضغط هنا{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;

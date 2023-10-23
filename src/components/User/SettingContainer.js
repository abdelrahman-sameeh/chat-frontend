import React from "react";
import HeaderComponent from "../Friend/HeaderComponent";
import GetLoggedUserHook from "../../custom-hooks/auth/GetLoggedUserHook";
import { Col, Row, Spinner } from "react-bootstrap";
import UpdateUserInfoHook from "../../custom-hooks/user/UpdateUserInfoHook";

const SettingContainer = () => {
  const [user] = GetLoggedUserHook();

  const [
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
  ] = UpdateUserInfoHook(user);

  return (
    <div className="container ">
      <HeaderComponent user={user} />

      <Row className="mt-5">
        <Col sm="12" md="6">
          <div className="d-flex justify-content-center w-100 flex-column align-items-center gap-1">
            <img
              style={{ width: "300px" }}
              className="rounded-full "
              src={image}
              alt=""
            />
            <label
              style={{ maxWidth: "300px" }}
              htmlFor="image"
              className="btn btn-primary w-100 mt-3"
            >
              {" "}
              اختر صورة جديدة
            </label>
            <input
              onChange={handleChangeImage}
              type="file"
              id="image"
              className="d-none"
            />
            {/* <button
              style={{ maxWidth: "300px" }}
              className="btn btn-danger w-100"
            >
              {" "}
              ازالة الصورة{" "}
            </button> */}
          </div>
        </Col>

        <Col sm="12" md="6">
          <form data-bs-theme="dark">
            <div>
              <label htmlFor="name">الاسم</label>
              <input
                type="text"
                id="name"
                onChange={handleChangeName}
                value={name || ''}
                className="form-control mt-1 mb-2"
              />
            </div>
            <div>
              <label htmlFor="password">تأكيد كلمة المرور *</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
                className="form-control mt-1 "
                placeholder="ادخل كلمة المرور"
              />
            </div>
            <div>
              <label htmlFor="phone">الهاتف</label>
              <input
                type="text"
                id="phone"
                value={phone || ''}
                disabled
                className="form-control mt-1 mb-2"
              />
            </div>
            <div>
              <label htmlFor="email">البريد الالكترونى</label>
              <input
                type="text"
                id="email"
                value={email || ''}
                disabled
                className="form-control mt-1 "
              />
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-primary my-3 w-100 d-flex align-items-center gap-2 justify-content-center"
            >
              حفظ التعديلات
              {loading && isPress ? <Spinner animation="grow" variant="light" /> : null}
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default SettingContainer;

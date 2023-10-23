import React from "react";

const ForgetPasswordContainer = () => {
  return (
    <div className="container pt-5">
      <form className="p-2 rounded border" data-bs-theme="dark">
        <h3 className="text-center"> ارسال كود التأكيد </h3>

        <div className="mt-2">
          <label htmlFor="email"> البريد الالكترونى </label>
          <input
            type="email"
            id="email"
            className="form-control mt-1"
            placeholder="البريد الالكترونى"
          />
        </div>

        <button className="btn btn-primary mt-2 "> ارسال </button>

      </form>
    </div>
  );
};

export default ForgetPasswordContainer;

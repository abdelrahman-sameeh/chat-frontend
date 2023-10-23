import React from "react";

const VerifyResetCodeContainer = () => {
  return (
    <div className="container pt-5">
      <form className="p-2 rounded border" data-bs-theme="dark">
        <h3 className="text-center">  تأكيد الكود  </h3>

        <div className="mt-2">
          <label htmlFor="resetCode"> رمز التأكيد </label>
          <input
            type="text"
            id="resetCode"
            className="form-control mt-1"
            placeholder="رمز التأكيد"
          />
        </div>

        <button className="btn btn-primary mt-2 "> ارسال </button>
      </form>
    </div>
  );
};

export default VerifyResetCodeContainer;

import React from "react";

const ChangePasswordAfterForgetContainer = () => {
  return (
    <div className="container pt-5">
      <form className="p-2 rounded border" data-bs-theme="dark">
        <h3 className="text-center"> تغير كلمة المرور </h3>

        <div className="mt-2">
          <label htmlFor="password"> كلمة المرور الجديدة </label>
          <input
            type="password"
            id="password"
            className="form-control mt-1"
            placeholder="كلمة المرور الجديدة"
          />
        </div>

        <button className="btn btn-primary mt-2 "> تأكيد </button>
      </form>
    </div>
  );
};

export default ChangePasswordAfterForgetContainer;

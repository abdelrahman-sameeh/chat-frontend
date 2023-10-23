import React, { useEffect, useState } from "react";

const ProtectRouteHook = () => {
  const user = localStorage.user ? JSON.parse(localStorage.user) : null;
  let isAuth = false,
    notAuth = false;

  if (user) {
    isAuth = true;
    notAuth = false;
  } else {
    isAuth = false;
    notAuth = true;
  }

  return [isAuth, notAuth];
};

export default ProtectRouteHook;

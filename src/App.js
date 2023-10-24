import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyResetCodePage from "./pages/Auth/VerifyResetCodePage";
import ChangePasswordAfterForgetPage from "./pages/Auth/ChangePasswordAfterForgetPage";
import FriendRequestReceivedPage from "./pages/Friend/FriendRequestReceivedPage";
import FriendRequestSentPage from "./pages/Friend/FriendRequestSentPage";
import FriendsPage from "./pages/Friend/FriendsPage";
import FriendsYouCanKnownPage from "./pages/Friend/FriendsYouCanKnownPage";
import OnlineFriendsPage from "./pages/Friend/OnlineFriendsPage";
import SettingPage from "./pages/User/SettingPage";
import ProtectRouteHook from "./custom-hooks/utils/ProtectRouteHook";
import ProtectRouteComponent from "./components/User/ProtectRouteComponent";

function App() {
  const [isAuth, notAuth] = ProtectRouteHook();

  return (
    <div className="App">
      <Routes>
        {/* not auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectRouteComponent auth={notAuth} />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
          <Route path="/verifyResetCode" element={<VerifyResetCodePage />} />
          <Route
            path="/changePasswordAfterForget"
            element={<ChangePasswordAfterForgetPage />}
          />
        </Route>

        {/* auth */}
        <Route element={<ProtectRouteComponent auth={isAuth} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:friendId/chat/:chatId" element={<HomePage />} />
          <Route
            path="/friendRequestReceived"
            element={<FriendRequestReceivedPage />}
          />
          <Route
            path="/friendRequestSent"
            element={<FriendRequestSentPage />}
          />
          <Route path="/friends" element={<FriendsPage />} />

          <Route
            path="/usersYouCanKnown"
            element={<FriendsYouCanKnownPage />}
          />
          <Route path="/onlineFriends" element={<OnlineFriendsPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;



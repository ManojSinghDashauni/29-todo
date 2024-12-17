import React from "react";
import { useContextApi } from "../context/Context";
import { useNavigate } from "react-router";
import { LogoutSVG } from "../svg";

const Logout = () => {
  const auth = useContextApi();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <button
      className="flex flex-col justify-center items-center"
      onClick={handleLogout}
    >
      <LogoutSVG />
      Logout
    </button>
  );
};

export default Logout;

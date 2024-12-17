import React from "react";
import { NavLink } from "react-router";
import { HomeSVG, NewSVG, FolderSVG, ProfileSVG, LoginSVG } from "../svg/index";
import { Logout } from "./index";
import { useContextApi } from "../context/Context";

const Navigation = () => {
  const auth = useContextApi();
  return (
    <div>
      <nav className="flex flex-col gap-8 p-10">
        <NavLink className="button elevation" to="/">
          <HomeSVG />
          Home
        </NavLink>
        <NavLink className="button elevation" to="Display">
          <FolderSVG />
          Display
        </NavLink>
        <NavLink className="button elevation" to="Create-New-Note">
          <NewSVG />
          Create New Note
        </NavLink>
        <NavLink className="button elevation" to="Profile">
          <ProfileSVG />
          Profile
        </NavLink>
        {auth.user ? (
          <NavLink className="button elevation">
            <Logout />
          </NavLink>
        ) : (
          <NavLink className="button elevation" to="Log-in">
            <LoginSVG />
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;

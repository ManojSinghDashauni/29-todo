import React from "react";
import { Signup, Signin } from "../components/index";
import { useContextApi } from "../context/Context";

const Login = () => {
  const auth = useContextApi();
  return (
    <div className="-mt-20 h-screen w-full flex justify-center items-center ">
      {auth.user ? <Signin /> : <Signup />}
    </div>
  );
};

export default Login;

import React from "react";
import { useContextApi } from "../context/Context";
import { Input } from "../components";

const Profile = () => {
  const { user } = useContextApi();
  console.log(user);
  return (
    <div className="ml-20 mt-10 text-[#0d5051]">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <div className="text-3xl font-semibold capitalize">{user?.name}</div>

      <div className=" mt-10 text-2xl font-semibold capitalize">
        How Are You ?
      </div>
      <Input className="text-3xl mt-6 font-semibold capitalize elevation "></Input>
    </div>
  );
};

export default Profile;

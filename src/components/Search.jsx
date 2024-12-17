import React, { useId } from "react";
import { Maginifying } from "../svg";

const Search = ({ label, type = "text", className = "", ...props }) => {
  const id = useId();
  return (
    <div className="w-full flex items-center ">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <Maginifying DivClass="translate-x-8 z-10" />
      <input
        type={type}
        className={`pl-10 py-2 outline-none border-none focus:bg-[#eff2f9]  w-full ${className}`}
        {...props}
        id={id}
      ></input>
    </div>
  );
};

export default Search;

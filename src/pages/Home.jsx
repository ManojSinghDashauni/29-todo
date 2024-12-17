import React from "react";

const home = () => {
  return (
    <div className="ml-20 mt-10 text-[#0d5051] m-20">
      <h1 className="text-4xl font-bold">Welcome to My Daily Planner!</h1>
      <div className="text-2xl font-normal capitalize">
        Your all-in-one solution for organizing tasks and notes.
      </div>

      <div className=" mt-10 text-xl font-normal capitalize">
        <span className="font-bold">Step 1:</span> Log In
      </div>
      <div className=" mt-10 text-xl font-normal capitalize">
        <span className="font-bold">Step 2:</span> Create New Notes
      </div>
      <div className=" mt-10 text-xl font-normal capitalize">
        <span className="font-bold">Step 3:</span> Display Notes
      </div>
      <div className="text-3xl mt-40 font-semibold capitalize elevation py-4">
        Built by Manoj Singh Dashauani.
      </div>
    </div>
  );
};

export default home;

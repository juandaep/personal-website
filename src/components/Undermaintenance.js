import React from "react";
import banner from "../img/under-maintenance.svg";

const Undermaintenance = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-10">
      <img src={banner} alt="Undermaintenance" className="w-[31rem] mb-10" />
      <div className="md:hidden flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Website Under</h1>
        <h1 className="text-3xl font-semibold">
          {"< "}
          <span className="bg-primary text-white mb-2">Development</span>{" "}
          {"/>"}
        </h1>
      </div>
      <div className="invisible md:visible flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Website Under</h1>
        <h1 className="text-3xl font-semibold">
          {"< "}
          <span className="bg-primary text-white mb-2">Development</span>{" "}
          {"/>"}
        </h1>
      </div>
    </div>
  );
};

export default Undermaintenance;

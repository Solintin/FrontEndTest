import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className=" p-5">
      <h1 className=" font-semibold text-5xl">This is the Rufai Alex test</h1>
      <h2 className="">There are two Dashboards </h2>
      <p className="">
        {" "}
        One for the data fetching
        <Link to={"/Dashbouard"} className="text-green-500 underline">
          here
        </Link>
      </p>
      <p className="">
        One for the localStorage Data where All the CRUD were performed
        <Link to={"/home"} className="text-green-500 underline">
          here
        </Link>{" "}
      </p>
    </div>
  );
}

export default LandingPage;

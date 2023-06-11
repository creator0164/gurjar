import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import bg from "../images/background.png";

function Gurjar({initiateGoogle}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="hidden sm:flex flex-col h-full">

        <img
          src={bg}
          className="fixed object-cover h-[2000px] top-[-400px] left-[-400px] opacity-[0.2] drop-shadow-none z-0"
          loading="lazy"
          alt="Gurjar person"
        />
        <div className="flex self-end mt-auto mx-10">© Gurjar Maps 2023</div>
      </div>
      <div className="sm:border sm:w-200 sm:p-5 sm:w-[50vw] flex flex-col sm:mx-0 mx-auto justify-center h-full sm:bg-white sm:rounded-lg z-10">
        <div className=" mt-1 items-center flex flex-col">
          <img src={logo} alt="Gurjar Maps logo" className="h-28 w-28" />
          <h1 className="font-extrabold text-4xl text-center">Gurjar Maps.</h1>
        </div>
        <img
          src={bg}
          className="sm:hidden h-auto w-full max-w-md my-5 grayscale contrast-200 drop-shadow-none"
          loading="lazy"
          alt="Gurjar person"
        />
        <div className="mb-5 w-full px-2 sm:mt-20 flex flex-col items-center">
          <button
            onClick={() => {navigate("/login"); initiateGoogle()}}
            type="submit"
            className="w-full max-w-md justify-center mt-5 p-3 text-xl border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#0B77FB] hover:bg-[#0853AF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>

          <button
            onClick={() => {navigate("/register"); initiateGoogle()}}
            type="submit"
            className="w-full max-w-md justify-center mt-5 p-3 text-xl border border-[#0B77FB] rounded-full shadow-sm text-sm font-medium text-[#0B77FB]  hover:bg-[#0853AF] hover:text-white hover:border-transparent"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gurjar;

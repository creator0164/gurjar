import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.png";
import Cookies from "universal-cookie";

function SideNavigationBar({ pageIndex, currentPage, onPageChange }) {
  const navigate = useNavigate();
  
  const signout = () => {
    const new_cookies = new Cookies();
    new_cookies.remove("token", { path: "/" });
    navigate("/");
  };

  return (
    <div className="fixed bg-white h-[100vh] h-[100svh] max-w-[15vw] w-full flex flex-col justify-between p-5 m-0">
      <div className="flex flex-col items-center m-2">
        <Link to={"/dashboard"} className="font-bold tracking-wider ">
          <img src={logo} alt="gurjar-sports-logo" className="h-10 w-10" />
        </Link>
        <span className="flex ml-1">Gurjar Maps</span>
        <p>ADMIN</p>
      </div>

      <div className="">
        <ul>
          {currentPage.map((page, index) => (
            <li
              key={index}
              className={` ${
                index === pageIndex
                  ? "bg-[rgba(0,0,0,0.8)] my-3 rounded-lg text-white"
                  : "bg-white my-3 rounded-lg hover:bg-[rgba(0,0,0,0.1)]"
              }`}
            >
              <button
                className="focus:outline-none p-2 w-full text-left"
                onClick={() => onPageChange(index)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={signout}>Sign out</button>
      </div>
    </div>
  );
}

export default SideNavigationBar;

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { domain } from "../data/constant";
import Cookies from "universal-cookie";
import axios from "axios";
import logo from "../images/logo.png";
function TopNavigationBar({data}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const signout = () => {
    const new_cookies = new Cookies();
    new_cookies.remove("token", { path: "/" });
    navigate("/");
  };

  return (
    <div className="fixed w-full top-0 z-10 flex justify-between items-center px-7 py-3 bg-[#111] text-gray-50 shadow">
      <Link to={"/dashboard"} className="font-bold tracking-wider ">
        <img src={logo} className="h-10 w-10" alt='waiting'/>
      </Link>

      <button
        onClick={openDropdown}
        className="inline-block h-9 w-9 rounded-full ring-2 ring-transparent hover:ring-white cursor-pointer active:ring-transparent"
      >
        <img
          id="profileImg1"
          className="overflow-hidden rounded-full"
          src={domain + data.user.profile_pic}
          alt="avatar"
        />
      </button>
      {isOpen && (
        <div className="absolute right-1 top-10 mt-2 bg-[#333] divide-y divide-gray-500 rounded-lg shadow-lg z-20">
          <div
            className="py-3 flex flex-col"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Add your dropdown options here */}
            <div
              className="px-4 text-left text-sm text-gray-50"
              role="menuitem"
            >
              {data.user.name}
            </div>
            <div
              className="px-4 text-left text-sm text-gray-50"
              role="menuitem"
            >
              {data.user.email}
            </div>
          </div>
          <div
            className="py-1 flex flex-col"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Add your dropdown options here */}
            <button
              className="px-4 text-left py-2 text-sm text-gray-50 hover:bg-[#ffffffb3] hover:text-gray-900"
              role="menuitem"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
              <button
                className="px-4 text-left py-2 text-sm text-gray-50 hover:bg-[#ffffffb3] hover:text-gray-900"
                role="menuitem"
                onClick={() => navigate("/profile")}
              >
              Profile Settings
            </button>
            {
              data.user.user_type &&(
                <button
              className="px-4 text-left py-2 text-sm text-gray-50 hover:bg-[#ffffffb3] hover:text-gray-900"
              role="menuitem"
              onClick={() => navigate("/admin")}
            >
              Admin
            </button>
              )
            }
            
            <button
              className="px-4 text-left py-2 text-sm text-gray-50 hover:bg-[#ffffffb3] hover:text-gray-900"
              role="menuitem"
            >
              Chat
            </button>
          </div>
          <div
            className="py-1 flex flex-col"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Add your dropdown options here */}
            <button
              className="px-4 text-left py-2 text-sm text-gray-50 hover:bg-[#ffffffb3] hover:text-gray-900"
              role="menuitem"
              onClick={signout}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopNavigationBar;

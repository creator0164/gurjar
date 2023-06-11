import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
import { BiArrowBack } from 'react-icons/bi';

function SignUp() {
  return (
    <div className="mt-4 p-7 rounded-lg sm:border sm:shadow-xl sm:bg-white h-96">
      <span className="block rounded-full w-7">
        <a href="#!" className="text-black text-2xl" 
        // onClick={handleOpen}
        >
          <BiArrowBack />
        </a>
      </span>
      <div className="mt-10">
        <form action="">
          <p className="text-[#333] text-based mb-1">
            Enter your email to reset password.
          </p>
          <div className="flex flex-col">
            <label htmlFor="email">
              <input
                id="ResetEmail"
                name="email"
                type="email"
                className="bg-transparent text-black border border-[#999] rounded-md p-3 outline-none 
              w-full placeholder:text-gray focus:border-[#111] transition-all"
                placeholder="Enter email address"
              />
            </label>

            <button
            //   onClick={handleReset}
              className="w-full mt-5 py-3 font-medium text-white bg-[#555] hover:bg-[#222] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span>Reset password</span>
            </button>

            <p className="text-center text-xs mt-1">
              <Link
                className="text-blue-600 hover:underline"
                to="/register"
              >
                Sign up.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
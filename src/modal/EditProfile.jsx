import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useUpdateGurjarUserMutation } from "../state/api";


export default function EditProfile({ newUser, trigger }) {
  const [updateGurjarUser, { isLoading, isError, error, data }] = useUpdateGurjarUserMutation();
  const get = (element)=>document.querySelector(element);
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const appendIfValid = (formData, key, selector) => {
      const value = get(selector).value;
      if (value.split(" ").join("").length > 0) {
        formData.append(key, value);
      }
    };
    formData.append("id", newUser.id);
    appendIfValid(formData, "name", "#name1");
    appendIfValid(formData, 'gender','#gender')
    appendIfValid(formData, "email", '#email');
    appendIfValid(formData, "education", '#education');
    appendIfValid(formData, "profession", '#profession');
    const formDataObject = {};
    for (let [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    console.log(formDataObject)
    console.log(formData.get("name"));
    updateGurjarUser({
      id: newUser.id,
      user: formDataObject
    }).unwrap()
    .then((res)=>{
      userUpdate1()
      trigger(false)
    })
  }
  const userUpdate1 = ()=>{
    const form = get('form')
    form.name.value = newUser.name;
    form.gender.value = newUser.gender
    form.email.value = newUser.email
    form.education.value = newUser.education
    form.profession.value = newUser.profession
    console.log(newUser.email)
  }
  useEffect(() => {
    userUpdate1()
    
    console.log(newUser.gender === 'Male', typeof newUser.gender)
  }, [newUser]);

  return (
    <div
      id="editProfile"
      className="fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
    >
      <div className="flex flex-col  w-max h-50 justify-center p-6 shadow-md rounded-xl border backg ">
      <form onSubmit={formSubmit} className="mb-0 space-y-6 ">
      <div id="closeCard" className="flex justify-end">
          <a href="#!" onClick={()=>trigger(false)} >
            <AiFillCloseCircle />{" "}
          </a>
        </div>
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                  Edit Account 
                </h2>
              </div>
              <div className="flex lg -mx-4 ">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-name"
                  >
                    Name
                  </label>
                  <input
                    required
                    id="name1"
                    name="name"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 sm-py-1 sm-px-1 sm-b-1 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-gender"
                  >
                    Gender
                  </label>
                  <div className="relative">
                    <select
                    id="gender"
                      name="gender"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      
                    >
                      <option>Choose</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Date of Birth
                  </label>
                  <input
                    name="dateBirth"
                    className=" form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="date"
                    placeholder="MM-DD-YYYY"
                  />
                </div>
              </div>
              <div className="flex lg -mx-4">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Religion
                  </label>
                  <div className="relative">
                    <select
                      name="religion"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Choose</option>
                      <option>Hindu</option>
                      <option>Muslim</option>
                      <option>Sikh</option>
                      <option>Christian</option>
                      <option>Jain</option>
                      <option>Buddhism</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Gotra
                  </label>
                  <div className="relative">
                    <select
                      name="gotra"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option value="">Gotra group</option>
                     
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Blood group
                  </label>
                  <div className="relative">
                    <select
                      name="bloodgroup"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Choose</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg -mx-4">
                <div className="w-full md:w-1/4 sm:w-2/4 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Nationality
                  </label>
                  <div className="relative">
                    <select
                      name="nationality"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    //   onChange={stateChange}
                    >
                      {/* {data.map((item, index) => (
                        <option key={index}>{item.name}</option>
                      ))} */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      name="state"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    //   onChange={cityChange}
                    >
                      {/* {Object.keys(state).length === 0
                        ? data[0].states.map((item, index) => (
                            <option key={index}>{item.name}</option>
                          ))
                        : state.states.map((item, index) => (
                            <option key={index}>{item.name}</option>
                          ))} */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    City
                  </label>
                  <div className="relative">
                    <select
                      name="city"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      {/* {Object.keys(state).length === 0
                        ? ""
                        : city.cities.map((item, index) => (
                            <option key={index}>{item.name}</option>
                          ))} */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Village
                  </label>
                  <div className="relative">
                    <select
                      name="village"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Choose</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex lg -mx-4">
                <div className="w-full lg:w-1/3 md:w-1/3 sm:w-1/3 px-3 mb-3 sm:mb-0 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Mobile
                  </label>
                  <div className="relative">
                    <select
                      id="mobileCode"
                      required
                      name="mobileCode"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option>+63</option>
                      <option>+93</option>
                      <option>+91</option>
                      <option>+62</option>
                      <option>+98</option>
                      <option>+39</option>
                      <option>+81</option>
                      <option>+60</option>
                      <option>+95</option>
                      <option>+31</option>
                      <option>+64</option>
                      <option>+64</option>
                      <option>+48</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 md:w-2/3 sm:w-2/3  px-3 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Number
                  </label>
                  <div className="relative">
                    <input
                      required
                      id="mobileNumber"
                      name="mobileNumber"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="9666972501"
                    />
                    <a
                      href="#!"
                    //   onClick={send_otp}
                      className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      OTP
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    OTP
                  </label>
                  <input
                    // required
                    id="otp"
                    name="otp"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="6 digit number"
                  />
                </div>
              </div> */}
              <div className="flex lg -mx-4">
                <div className="w-full md:w-2/4 sm:2/4 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="gurjarindia@gmail.com"
                  />
                </div>
              </div>
              <div className="flex lg -mx-4">
                <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Education
                  </label>
                  <div className="relative">
                    <input
                    id="education"
                      required
                      name="education"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Education"
                      list="suggestions1"
                    />
                    <datalist id="suggestions1">
                      <option value="Under Graduate" />
                      <option value="Diploma" />
                      <option value="Graduate" />
                      <option value="Engineering Graduate" />
                      <option value="LLB" />
                      <option value="Post Graduate" />
                      <option value="PHD" />
                      <option value="BDS" />
                      <option value="MBBS" />
                      <option value="MS" />
                    </datalist>
                    {/* <select
                      name="education"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Choose</option>
                    </select> */}
                  </div>
                </div>
                <div className="w-full  md:w-2/4 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Profession
                  </label>
                  <div className="relative">
                    {/* <select
                      name="profession"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Choose</option>
                    </select> */}
                    <input
                      required
                      name="profession"
                      id="profession"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Profession"
                      list="suggestions2"
                    />
                    <datalist id="suggestions2">
                      <option value="Advocate" />
                      <option value="Sportsman" />
                      <option value="Doctor" />
                      <option value="Government Job" />
                      <option value="Private Job" />
                      <option value="Property Dealer" />
                      <option value="Milk Man" />
                      <option value="Driver" />
                      <option value="Farmer" />
                      <option value="Politician" />
                      <option value="Business" />
                    </datalist>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#555] hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
      </div>
    </div>
  );
}

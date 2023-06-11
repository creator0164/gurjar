import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paging from "../components/Paging";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const get = (element)=> document.querySelectorAll(element)
  const defaultValue = ['Country', 'Gender']
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    age: "",
    religion: "",
    gotra: "",
    bloodGroup: "",
    nationality: "",
    state: "",
    city: "",
    village: "",
    mobile: "",
    email: "",
    password: "",
    education: "",
    profession: "",
    address: "",
  });

  const formFields = [
    { name: "name", label: "Name" },
    { name: "country", label: "Country" },
    { name: "gender", label: "Gender" },
    { name: "date", label: "Birth Date" },
    { name: "religion", label: "Religion" },
    { name: "gotra", label: "Gotra" },
    { name: "bloodGroup", label: "Blood Group" },
    { name: "nationality", label: "Nationality" },
    { name: "state", label: "State" },
    { name: "city", label: "City" },
    { name: "village", label: "Village" },
    { name: "tel", label: "Mobile" },
    { name: "education", label: "Education" },
    { name: "profession", label: "Profession" },
    { name: "number", label: "Age" },
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
    { name: "address", label: "Address" },
  ];

  const nextPage = () => {
    const validation =[]
    const fields = get('#field')
    console.log(fields[1].name)
    fields.forEach((field)=>{
      if (field.value.trim() === "" ){
        validation.push({message: `${field.name} is required`})
      }})

    // make if validation is not empty then show the error message
    if (validation.length <= 0){
      setPage(page + 1);
    } else {
      alert(validation.map((message)=> message.message.toString()))
    }
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "option") {
      // Set the value directly without wrapping the object
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleRegister = () => {
    // Perform registration logic here
    // You can access the form data from the formData state and submit to your backend or perform any other actions you need.
  };

  const totalPages = 9; // Total number of pages
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setPage(page);
    // Perform any additional logic when the page change
  };

  const [isGurjar, setisGurjar] = useState(false);
  const gurjarChange = () => setisGurjar(!isGurjar);
  
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] h-[100svh] overflow-hidden">
      {isGurjar ? (
        <div className="flex flex-col justify-between w-full max-w-[1000px] h-full py-10 text-[#111]">
          <div className="mx-20">
            <div
              className="self-start flex items-center space-x-2 cursor-pointer mb-5"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft /> <span>Go Back</span>
            </div>
            <h2 className="text-4xl font-extrabold">Create Account</h2>
            <p className="text-md text-[#888] font-semibold">
              Please enter your details
            </p>
          </div>

          <div className="mt-[-25vh] mx-20">
            {formFields.slice(page * 2, page * 2 + 2).map((field) => (
              <div key={field.name}>
                {field.name === "gender" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black pr-8"
                    value={formData.gender}
                    name="gender"
                    onChange={handleChange}
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                ) : field.name === "country" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.country}
                    name="country"
                    onChange={handleChange}
                  >
                    <option value="">Country</option>
                    <option value="Country 1">Country 1</option>
                    <option value="Country 2">Country 2</option>
                    <option value="Country 3">Country 3</option>
                    <option value="Country 4">Country 4</option>
                  </select>
                ) : field.name === "state" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.state}
                    name="state"
                    onChange={handleChange}
                  >
                    <option value="">State</option>
                    <option value="State 1">State 1</option>
                    <option value="State 2">State 2</option>
                    <option value="State 3">State 3</option>
                  </select>
                ) : field.name === "city" ? (
                  <select
                    id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.city}
                    name="city"
                    onChange={handleChange}
                  >
                    <option value="">City</option>
                    <option value="City 1">City 1</option>
                    <option value="City 2">City 2</option>
                    <option value="City 3">City 3</option>
                  </select>
                ) : field.name === "village" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.village}
                    name="village"
                    onChange={handleChange}
                  >
                    <option value="">Village</option>
                    <option value="Village 1">Village 1</option>
                    <option value="Village 2">Village 2</option>
                    <option value="Village 3">Village 3</option>
                  </select>
                ) : field.name === "religion" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.religion}
                    name="religion"
                    onChange={handleChange}
                  >
                    <option value="">Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                  </select>
                ) : field.name === "gotra" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.gotra}
                    name="gotra"
                    onChange={handleChange}
                  >
                    <option value="">Gotra</option>
                    <option value="gotra 1">Gotra 1</option>
                    <option value="gotra 2">Gotra 2</option>
                    <option value="gotra 3">Gotra 3</option>
                  </select>
                ) : field.name === "bloodGroup" ? (
                  <select
                  id="field"
required
                    className="form-select p-3 my-2 border rounded-lg w-full focus:border-black"
                    value={formData.bloodGroup}
                    name="bloodGroup"
                    onChange={handleChange}
                  >
                    <option value="">Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                ) : (
                  <input
                    className="form-input p-3 my-2 border rounded-lg w-full focus:border-black caret-[#111]"
                    type={field.name}
                    id="field"
required
                    placeholder={field.label}
                    pattern={field.name === "tel" ? "[0-9]11}" : false}
                    value={formData[field.name]}
                    name={field.name}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <div className="flex justify-between w-full">
              {page > 0 ? (
                <button onClick={previousPage}>Previous</button>
              ) : (
                <div></div>
              )}
              {page < Math.ceil(formFields.length / 2) - 1 ? (
                <button className="mx-2" onClick={nextPage}>
                  Next
                </button>
              ) : (
                <button className="mx-2" onClick={handleRegister}>
                  Register
                </button>
              )}
            </div>
          </div>

          <div>
            <Paging
              currentPage={page + 1}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center mt-[-25vh]">
          <h2>Are you a Gurjar?</h2>
          <button
            className="m-2 rounded-lg bg-[#0B77FB] hover:bg-[#0853AF] hover:text-white"
            onClick={gurjarChange}
          >
            Yes
          </button>
          <button
            className="m-2 rounded-lg bg-[#0B77FB] hover:bg-[#0853AF] hover:text-white"
            onClick={() => navigate("/")}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import avatar_path from "../images/avatar.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Tab, initTE } from "tw-elements";
import { GrDocumentUpdate } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import GurjarCard from "../modal/GurjarCard";
import TopNavigationBar from "../components/TopNavigationBar";
import { domain } from "../data/constant";

const Profile = () => {
  const check = async () => {
    const new_cookies = new Cookies();
    const token = new_cookies.get("token");

    await axios
      .post(domain + "/gurjar/get_user/", {
        token: token,
      })
      .then((response) => {
        if (!response.data.valid) {
          new_cookies.remove("token", { path: "/" });
        } else {
          localStorage.setItem("data", JSON.stringify(response.data));
          setData(response.data);
          navigate("/profile");
        }
      })
      .catch((error) => console.log(error));
  };

  const [data, setData] = useState({
    valid: true,
    user: {
      name: "Gabryel Ardy Echavez",
      profile_pic: "/media_cdn/profile_images/11/profile_image_Plht2xV.png",
      nationality: "philippines",
      state: "rizal",
      city: "antipolo",
      village: "dela paz",
      gotra: "A",
      blood_group: "A",
      date_of_birth: "2000",
      email: "myfluffycy@gmail.com",
      password: "sample",
      mobile_number: "09666972501",
      religion: "catholic",
    },
  });

  const get = (element) => document.querySelector(element);

  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(avatar_path);
  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const formSubmit = (e) => e.preventDefault();
  const [user, setUser] = useState({});
  const new_cookies = new Cookies();
  const navigate = useNavigate();

  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const appendIfValid = (formData, key, selector) => {
      const value = get(selector).value;
      if (value.split(" ").join("").length > 0) {
        formData.append(key, value);
      }
    };

    formData.append("token", token);
    if (get("#profile").files[0] !== undefined) {
      formData.append("profile_pic", get("#profile").files[0]);
    }

    appendIfValid(formData, "name", "#name");
    appendIfValid(formData, "religion", "#religion");
    appendIfValid(formData, "state", "#state");
    appendIfValid(formData, "city", "#city");
    appendIfValid(formData, "village", "#village");
    appendIfValid(formData, "nationality", "#nationality");
    appendIfValid(formData, "gender", "#gender");
    appendIfValid(formData, "gotra", "#gotra");
    appendIfValid(formData, "blood_group", "#blood_group");
    appendIfValid(formData, "date_of_birth", "#date_of_birth");
    appendIfValid(formData, "password", "#password");
    appendIfValid(formData, "email", "#email");
    appendIfValid(formData, "mobile_number", "#number");

    axios
      .put(domain + "/gurjar/update_profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.valid) {
          alert("Profile Updated Successfully");
          console.log(get("#headName"));
          get("#profileImg").src = domain + "" + response.data.user.profile_pic;
          get("#profileImg1").src = domain + response.data.user.profile_pic;
          get("#headName").innerHTML = response.data.user.name;
          get("#profile").value = "";
          get("#password").value = "";
          setIsPreview(false);
        }
        // console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const logout = () => {
    new_cookies.remove("token", { path: "/" });
    navigate("/");
  };
  const token = new_cookies.get("token");
  useEffect(() => {
    check();
    initTE({ Tab });
    if (token) {
      axios
        .post(domain + "/gurjar/get_user/", {
          token: token,
        })
        .then((response) => {
          // console.log("response", response);
          if (!response.data.valid) {
            new_cookies.remove("token", { path: "/" });
          } else {
            get("#name").value = response.data.user.name;
            get("#religion").value = response.data.user.religion;
            get("#state").value = response.data.user.state;
            get("#city").value = response.data.user.city;
            get("#village").value = response.data.user.village;
            get("#nationality").value = response.data.user.nationality;
            get("#gender").value = response.data.user.gender;
            get("#gotra").value = response.data.user.gotra;
            get("#blood_group").value = response.data.user.blood_group;
            get("#date_of_birth").value = response.data.user.date_of_birth;
            get("#email").value = response.data.user.email;
            get("#number").value = response.data.user.mobile_number;

            setUser(response.data.user);
            setAvatar(domain + "" + response.data.user.profile_pic);
          }
        })
        .catch((error) => console.log(error));
    } else {
      // navigate("/");
    }
  }, [navigate]);

  const [showGurjarCard, setGurjarCard] = useState(false);
  const handleOnClose = () => setGurjarCard(false);

  const [currentAvatar, setCurrentAvatar] = useState(domain + user.profile_pic);
  const [isPreview, setIsPreview] = useState(false);
  const handleChangeAvatarPreview = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setIsPreview(true);
    }
    // let currentPhoto = e.target.files[0];
  };

  const handleEditProfile = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };

  return (
    <div className="k">
      <TopNavigationBar data={data} />

      <div className="text-black sm:px-5 sm:py-4 xsm:px-5 xsm:py-4 md:px-9 md:py-9 lg:px-9 lg:py-9">
        <div className="min-h-screen mx-auto justify-center py-5 px-3 sm:border sm:shadow-lg sm:bg-white rounded-lg ">
          <form
            onSubmit={formSubmit}
            className="min-h-screen justify-center p-7"
          >
            <div className="mb-5 ">
              <div className="rounded-full w-56 h-56 overflow-hidden mx-auto border border-[#ddd] shadow-md relative group">
                <label
                  htmlFor="profile"
                  className="cursor-pointer w-56 h-56 rounded-full"
                >
                  <img
                    id="profileImg"
                    src={avatar}
                    alt="DP"
                    className="w-56 h-56 rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full w-56 h-56 bg-black opacity-0 group-hover:block transition-opacity duration-300 ease-in group-hover:opacity-50"></div>
                  <div className="absolute inset-0 rounded-full w-56 h-56 flex items-center opacity-0 group-hover:flex transition-opacity duration-300 ease-in group-hover:opacity-50 justify-center">
                    <h2 className="text-white text-2xl font-bold">
                      Change Photo
                    </h2>
                  </div>
                </label>
              </div>

              {isPreview && (
                <div className="text-center text-red-500 text-sm">
                  Save to apply changes.
                </div>
              )}
            </div>

            <div className="text-black flex justify-center hidden">
              <input
                className="flex justify-center items-center hidden"
                type="file"
                id="profile"
                onChange={handleChangeAvatarPreview}
                accept="image/*"
              />
            </div>

            <div className="text-center mb-20">
              <h6 className="text-[#555]">
                Gurjar ID: G-00000{user.gurjar_id}
              </h6>
              <h6 className="text-[#555]">Gurjar Points: 1000{user.points}</h6>
              <p
                id="headName"
                className="px-2 py-1 xsm:px-0 font-bold text-5xl"
              >
                {user.name}
              </p>
              <button
                onClick={() => setGurjarCard(true)}
                className=" bg-[#555] hover:bg-[#222] text-white font-bold py-2 px-4 mt-5 rounded inline-flex items-center"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <ImProfile />
                </svg>
                <span>Gurjar Card</span>
              </button>
            </div>

            <div className="bg-white p-5 border rounded-lg border-[#ddd] shadow-md max-w-xl mx-auto">
              <ul className="flex" role="tablist" data-te-nav-ref>
                <li role="presentation" className="flex-auto text-center">
                  <a
                    href="#tabs-home01"
                    className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-[#111] dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-[#111] dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-home01"
                    data-te-nav-active
                    role="tab"
                    aria-controls="tabs-home01"
                    aria-selected="true"
                  >
                    Information
                  </a>
                </li>
                <li role="presentation" className="flex-auto text-center">
                  <a
                    href="#tabs-profile01"
                    className="focus:border-transparent block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-[#111] dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-[#111] dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-profile01"
                    role="tab"
                    aria-controls="tabs-profile01"
                    aria-selected="false"
                  >
                    Account
                  </a>
                </li>
              </ul>

              <div className="">
                <div
                  className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                  id="tabs-home01"
                  role="tabpanel"
                  aria-labelledby="tabs-home-tab01"
                  data-te-tab-active
                >
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">Name </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            id="name"
                            type="text"
                            placeholder={"Umesh Sharman"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">
                            Religion{" "}
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="religion"
                            placeholder={"Hindu"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">State </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="state"
                            placeholder={"Karnataka"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">City </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="city"
                            placeholder={"Bengaluru"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">
                            Village{" "}
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="village"
                            placeholder={"Hulimavu"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">
                            Nationality{" "}
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="nationality"
                            placeholder={"Indian"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">Gender </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="gender"
                            placeholder={"Male"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">Gotra </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="gotra"
                            placeholder={"Bhardwaj"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">
                            Blood Group{" "}
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="blood_group"
                            placeholder={"B+"} //User Information Token here
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="text-[#777] text-xs">
                            Birth Date{" "}
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            id="date_of_birth"
                            placeholder={"02/14/1991"} //User Information Token here
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                  id="tabs-profile01"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tab01"
                >
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="">
                          <label className="text-[#777] text-xs">
                            User Name
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            id="Username"
                            type="text"
                            placeholder="umesh_04"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <label className="text-[#777] text-xs">
                            Password
                          </label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            placeholder="************"
                            id="password"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <label className="text-[#777] text-xs">Email</label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            placeholder="gurjarweb@gmail.com"
                            id="email"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <label className="text-[#777] text-xs">Phone</label>
                          <br />
                          <input
                            className="border border-[#aaa] hover:border-[#111] focus:border-[#111] text-sm p-3 rounded-lg w-full mb-5 inputField"
                            type="text"
                            placeholder="+639666972501"
                            id="number"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div onClick={updateProfile} className="flex justify-center">
                  <button className="bg-[#555] justify-center w-full flex text-white p-2 rounded-lg shadow-md border hover:shadow-none hover:bg-[#222]">
                    <span href="#!">Save</span>
                  </button>
                </div>
              </div>
            </div>

            <GurjarCard
              avatar={avatar}
              data={user}
              onClose={handleOnClose}
              visible={showGurjarCard}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useGetGurjarUsersQuery, useDeleteGurjarUserMutation } from "../state/api";
import { domain } from "../data/constant";
import EditProfile from "../modal/EditProfile";
import Cookies from "universal-cookie";

function AdminTable() {
  const { data, error, isLoading } = useGetGurjarUsersQuery();
  const [newUser, setNewUser] = useState({});
  const [deleteUser, { isLoading: isDeleting }] = useDeleteGurjarUserMutation();
  const get = (element)=> document.querySelector(element);
  const handleDelete = (id) => {
    deleteUser(id)
    .unwrap() // Assuming you have configured unwrap() in your API setup
    .then(() => {
      const element = document.getElementById(`gurjar_user_${id}`);
      if (element) {
        element.remove();
        alert("User Deleted Successfully");
      }
    })
    .catch((error) => {
      // Handle error
      console.error('Error deleting user:', error);
    });
  }
  const userdata = (state, id)=>{
    setEditProfile(state);
    const user = data.find((user)=> user.id === id);
    
    setNewUser(user);
  }

  const [showEditProfile, setEditProfile] = useState(false);
  const [newshow, setNewShow] = useState(false);
  const onclickuser = () =>{
    const forms = get('form')
    forms.name.value = newUser.name;
    console.log(newUser.value)
  }
  console.log(newshow)
  useEffect(() => {
    if (!isLoading){
      // Save data to local storage
      console.log(111)
      localStorage.setItem('gurjar_users', JSON.stringify(data));
    }
  },[data]);
  return (
    <div className="">
      {/* <TopNavigationBar /> */}
      {
        isDeleting && (
          <h1 style={{textAlign:'center', fontSize:'4rem', padding: '5rem 5rem'}}>Please wait for a moment while we are deleting...</h1>
        )
      }
      <div className="bg-[#f0f0f0] flex items-center justify-center font-sans">
        <div className="w-full h-[100vh] flex">
          <div className="w-[80vw] m-auto">
          <div className="mx-5 mb-10 text-4xl font-medium">User Accounts Table</div>
            <table className="w-full table-auto bg-white rounded-lg shadow scrollable-tbody mx-5">
              <thead className="">
                <tr className="bg-[#111] text-[#fefefe] uppercase text-sm leading-normal">
                  <th className="py-3 px-3 text-left">Gurjar ID</th>
                  <th className="py-3 px-3 text-left">User</th>
                  <th className="py-3 px-3 text-left">Email</th>
                  <th className="py-3 px-3 text-left">mobile number</th>
                  <th className="py-3 px-3 text-left">State</th>
                  <th className="py-3 px-3 text-left">Date of birth</th>
                  <th className="py-3 px-3 text-left">religion</th>
                  <th className="py-3 px-3 text-center">Status</th>
                  <th className="py-3 px-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {
                  !isLoading && (
                    data.map((user) => (
                      <>
                      <tr id={`gurjar_user_${user.id}`} className="border-b border-gray-200 hover:bg-gray-100 even:bg-[#A0C1D120]">
                        <td className="py-3 px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{user.gurjar_id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-left">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <img
                                className="w-6 h-6 rounded-full"
                                src={domain+user.profile_pic}
                                alt="User Profile Pic"
                              />
                            </div>
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{user.email}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{user.mobile_number}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{user.state}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{user.date_of_birth}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{user.religion}</span>
                          </div>
                        </td>
                      
                        <td className="py-3 px-3 text-center">
                          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                            Active
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <div className="flex item-center justify-center">
                            <div  className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </div>
                            <div onClick={()=>userdata(true, user.id)} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </div>
                            <div onClick={()=>handleDelete(user.id)} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                      </>
                    ))
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {
        showEditProfile && (
          <EditProfile
              trigger={setEditProfile}
              newUser={newUser}
            />
        )
      }
      
    </div>
  );
}

export default AdminTable;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Cookies from "universal-cookie";
import axios from "axios";
import Gurjar from "./pages/Gurjar";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";
function App() {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("JWT Encoded: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // user google's data when logon or signed up
    console.log(userObject);
    setUser(userObject);
  }

  function initiateGoogle() {
    /* global google */
    // GOOGLE API
    google.accounts.id.initialize({
      client_id:
        "1009425536392-c8c0643lflumoknhn0r6ea0uakorosuq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("googleSignIn"), {
      theme: "outline",
      size: "large",
    });
  }
  useEffect(() => {
    initiateGoogle();
  }, []);
  return (
    <Router>
      <Routes className="main">
        <Route path="/" element={<Gurjar initiateGoogle={initiateGoogle} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/login"
          element={<Login googleLogin={<div id="googleSignIn"></div>} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import mapData from "./../data/countries.json";
import sampleDatabase from "../data/SampleDatabase";
import "./../App.css";
import GurjarInfo from "../components/GurjarInfo";
import TableData from "../components/TableData";
import Map from "../components/Map";
import TopNavigationBar from "../components/TopNavigationBar";
import Loading from "./Loading";
import Welcome from "../components/Welcome";
import axios from "axios";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { domain } from "../data/constant";
import SideNavigationBar from "../components/SideNavigationBar";
import Analytics from "../components/Analytics";
import Users from "./Users";
import AdminTable from "./AdminTable";
function Dashboard(props) {
  const [gurjarDatas, setGurjarDatas] = useState([]);

  const [sortedCounts, setSortedCounts] = useState([["philippines", 0]]);
  const getSortedCounts = () => {
    axios
      .get(domain + "/gurjar/population_search/")
      .then((response) => {
        setSortedCounts(
          Object.entries(response.data.nationalities_count).sort(
            ([_, countA], [__, countB]) => countB - countA
          )
        );
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
  const navigate = useNavigate();
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
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  };
  const [mergedData, setMergedData] = useState([
    { type: "FeatureCollection", features: [] },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFocused, setisFocused] = useState(false);
  const location = useLocation();
  const pathName = () => {
    if (location.pathname == "/dashboard") {
      setisFocused(true);
    } else {
      setisFocused(false);
    }
  };

  useEffect(() => {
    axios
      .get(domain + "/gurjar/get_all_user/")
      .then((response) => {
        try {
          const mergedData = mapData.features.map((feature) => {
            const population = response.data.data.find(
              (data) => data.ADMIN === feature.properties.ADMIN
            );
            const users = population ? population.users : [];

            return {
              ...feature,
              properties: {
                ...feature.properties,
                population: population ? population.population : 0,
                users: users,
              },
            };
          });

          const updatedMergedData = {
            type: mapData.type,
            features: mergedData,
          };

          setMergedData(updatedMergedData);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching population data:", error);
        }
      })
      .catch((error) => console.log(error));
    pathName();
    check();
    getSortedCounts();
  }, []);

  const admin = false;

  const [currentPage, setCurrentPage] = useState(["Dashboard", "User"]);
  const [pageIndex, setPageIndex] = useState(0);

  const handlePageChange = (index) => {
    setPageIndex(index);
    // Perform any additional logic when the page changes
  };

  if (admin) {
    return (
      <div className="main">
        <div className="admin">
          <SideNavigationBar
            pageIndex={pageIndex}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />

          <div className="ml-[14vw] bg-white h-[100vh] pl-5 ">
            {pageIndex === 0 ? <Analytics /> : <AdminTable />}
          </div>
        </div>
      </div>
    );
  } else {
    if (isLoading) {
      return <Loading />; // Display a loading state while data is being fetched
    } else {
      return (
        <div className="main">
          <div className="user">
            <TopNavigationBar data={data} />

            <div className="container mx-auto max-w-5xl mt-28">
              
              <Welcome data={data} />

              <Map
                // mapData={mapData}
                mergedData={mergedData}
              />

              <GurjarInfo data={data} />

              <TableData />

              <div className="h-[100px]"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;

import React, { useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import PasswordContainer from "../components/PasswordContainer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("user_token");

  useEffect(() => {
    if (!token) {
      alert('Session expired! Please log in again')
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div className="bg-gray-950 text-white h-screen w-screen px-8 py-6 ">
      <div className="flex justify-between border-b-2 pb-2 border-b-gray-400 items-center w-full py-2 ">
        <div>
          <h1 className="text-2xl font-semibold ">
            <span className="">Dashboard</span>
          </h1>
        </div>
        <div>
          <button onClick={()=>{navigate('/add-password')}}
           className="bg-amber-400 px-8 py-2 text-black rounded-lg cursor-pointer hover:bg-gray-700 hover:text-teal-400 font-semibold text-lg flex gap-1 items-center">
            {" "}
            {<IoAddCircleOutline size={24} />} Add
          </button>
        </div>
      </div>
      <PasswordContainer title={"roblox"} url={"www.roblox.com"} />
    </div>
  );
};

export default Dashboard;

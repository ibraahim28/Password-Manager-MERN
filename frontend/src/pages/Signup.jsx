import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const userSignup = async (e) => {
    try {
      e.preventDefault();
      if (!formData.username || !formData.email || !formData.password) {
        setErr("All fields are required.");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:3000/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Signup successfull", data);
      localStorage.setItem("user_token", data.token);
      navigate("/");
    } catch (error) {
      setErr(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex justify-center items-center">
      <form
        onSubmit={(e) => {
          userSignup(e);
        }}
        className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md"
        action=""
      >
        <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
        {err && (
          <p className="bg-red-600 py-2 text-center text-white mb-4">{err}</p>
        )}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">
            Username:
          </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="text"
            name="username"
            placeholder="Spongebob"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="email"
            onChange={(e) => {
              handleChange(e);
            }}
            name="email"
            placeholder="spongebob@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="password"
            onChange={(e) => {
              handleChange(e);
            }}
            name="password"
            placeholder="********"
          />
        </div>

        <div>
          <p className="text-gray-400 my-2 text-right ">
            Already have an account?{" "}
            <span onClick={handleNavigate} className="underline hover:cursor-pointer hover:text-amber-400 hover:font-semibold">
              click here
            </span>
          </p>
        </div>

        <button
          className="w-full p-2 mt-4 bg-blue-500 rounded hover:bg-blue-700"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

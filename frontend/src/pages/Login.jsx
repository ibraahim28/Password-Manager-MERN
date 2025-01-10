import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleNavigate = () => {
    navigate('/register')
  }

  const login = async (e) => {
    try {
      setError(null);
      e.preventDefault();

      const { data } = await axios.post(
        "http://localhost:3000/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login successfull", data.token);
      localStorage.setItem('user_token', data.token);
      navigate('/')
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex justify-center items-center">
      <form
        className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md"
        action=""
        onSubmit={(e) => {
          login(e);
        }}
      >
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        {error && (
          <p className="bg-red-300 text-center text-red-700 p-2 rounded mb-4">{error}</p>
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
            id="username"
            value={formData.username}
            name="username"
            placeholder="Spongebob"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="password"
            id="passoword"
            value={formData.password}
            name="password"
            placeholder="********"
          />
        </div>

            <div>
              <p className="text-gray-400 my-2 text-right ">Don't have an account? <span onClick={handleNavigate} className="underline hover:cursor-pointer hover:text-amber-400 hover:font-semibold">click here</span></p>
            </div>

        <button
          className="w-full p-2 mt-4 bg-blue-500 rounded hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

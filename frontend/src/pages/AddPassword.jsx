import axios from "axios";
import React, { useState } from "react";

const AddPassword = () => {
  const [formData, setFormData] = useState({
    site_url: "",
    acc_username: "",
    acc_password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData)
  };

  const passwordAdd = async (e) => {
    try {
      const token = localStorage.getItem("user_token");

      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:3000/password/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log("Error adding password.", error.response.data);
    }
  };

  return (
    <div className="bg-gray-950 text-white h-screen w-full flex justify-center items-center">
      <form className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Add a new Password</h2>
        <div className="mb-4">
          <label className="mb-2 block" htmlFor="site-url">
            Site Url:
            <input
              type="text"
              name="site_url"
              className="w-full p-2 rounded bg-gray-600 text-white"
              placeholder="www.google.com"
              value={formData.site_url}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username-email">
            Email or Username:
            <input
              type="text"
              name="acc_username"
              placeholder="John Doe"
              value={formData.acc_username}
              className="w-full p-2 rounded bg-gray-600 text-white"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password
            <input
              type="password"
              name="acc_password"
              placeholder="*******"
              className="w-full p-2 rounded bg-gray-600 text-white"
              value={formData.acc_password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          onClick={(e) => passwordAdd(e)}
          className="w-full p-2 mt-4 bg-blue-500 rounded hover:bg-blue-700"
          type="submit"
        >
          Add Password
        </button>
      </form>
    </div>
  );
};

export default AddPassword;

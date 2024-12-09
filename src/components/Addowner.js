import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import '../output.css'

const AddOwner = () => {
  const oidcount = useRef(0);

  const [formData, setFormData] = useState({
    oid: "",
    ofname: "",
    olname: "",
    ogender: "",
    ocellno: "",
    oemail: "",
    login: "",
    password: "",
    famcount: "",
    flatno: "",
    maintainence: []
  });

  useEffect(() => {
    axios.get("http://localhost:9000/api/getoidcount")
      .then(response => {
        setFormData((prevData) => ({
          ...prevData,
          oid: response.data[0].oidcounter + 1, // Replace response.data with the correct field if necessary
        }));
      })
  }, [])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/addowner", formData);
      alert("Owner added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding owner:", error);
      alert("Failed to add owner. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-blue-600 to-white">
      <div className="bg-white shadow-2xl rounded-xl p-8 sm:p-10 max-w-2xl w-full m-4">
        <h2 className="text-3xl font-extrabold text-indigo-600 mb-6 text-center">
          Add New Owner
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Owner ID (OID)
            </label>
            <input
              type="text"
              name="oid"
              value={formData.oid}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="ofname"
              value={formData.ofname}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="olname"
              value={formData.olname}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="ogender"
              value={formData.ogender}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="o">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cell No
            </label>
            <input
              type="text"
              name="ocellno"
              value={formData.ocellno}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="oemail"
              value={formData.oemail}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Login
            </label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Family Count
            </label>
            <input
              type="number"
              name="famcount"
              value={formData.famcount}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Flat No
            </label>
            <input
              type="number"
              name="flatno"
              value={formData.flatno}
              onChange={handleChange}
              required
              className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Add Owner
          </button>
        </form>
      </div>
    </div>

  );
};

export default AddOwner;

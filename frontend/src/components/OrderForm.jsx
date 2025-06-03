import React, { useState } from "react";

const OrderForm = ({ userId = 1, cartItems = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    aadhar_number: "",
    pan_number: "",
    select_product: "Beast",
    message: "",
  });

  const [customerType, setCustomerType] = useState("Individual");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const { phone_number, aadhar_number, pan_number } = formData;
    const phoneRegex = /^[6-9]\d{9}$/;
    const aadharRegex = /^\d{12}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!phoneRegex.test(phone_number)) return alert("Invalid phone number");
    if (!aadharRegex.test(aadhar_number)) return alert("Invalid Aadhar number");
    if (!panRegex.test(pan_number)) return alert("Invalid PAN number");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderPayload = {
      user_id: userId,
      customer_type: customerType,
      products: cartItems,
      ...formData,
    };

    try {
      const res = await fetch("http://localhost:5000/orders/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(" Order error:", data);
        alert("Order failed: " + (data.error || "Something went wrong"));
      } else {
        alert("Order placed successfully!");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Try again later.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-50 w-full bg-[#43005a] text-white border border-[#43005a] rounded-lg px-4 py-2 mt-2">
  <h2 className="text-4xl font-bold text-center mb-1">ORDER FORM</h2>
  <p className="text-2xl text-center w-full">
    Fill in the below details to order products
  </p>
</div>


    <div className="bg-[rgb(232,221,236)] min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* <h2 className="text-3xl font-bold text-center text-[#43005a]">ORDER FORM</h2>
        <p className="text-center text-gray-600 mb-6">
          Fill in the below details to order products
        </p> */}

        {/* Toggle Button */}
        <div className="flex justify-center gap-4 mb-8">
          {["Individual", "Company"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setCustomerType(type)}
              className={`px-6 py-2 rounded-md border-2 font-semibold transition duration-300 ${
                customerType === type
                  ? "bg-[#e7e3e9] text-white border-[rgb(228,219,231)]"
                  : "bg-white text-[#43005a] border-[#43005a]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["name", "Name"],
            ["phone_number", "Phone Number"],
            ["email", "Email Address"],
            ["address", "Address"],
            ["country", "Country"],
            ["state", "State"],
            ["city", "City"],
            ["pincode", "Pincode"],
            ["aadhar_number", "Aadhar Number"],
            ["pan_number", "PAN Number"],
          ].map(([name, label]) => (
            <div key={name}>
              <label htmlFor={name} className="block text-sm font-medium text-[#43005a] mb-1">
                {label}*
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#43005a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a0572]"
              />
            </div>
          ))}

          <div>
            <label htmlFor="select_product" className="block text-sm font-medium text-[#43005a] mb-1">
              Select Product
            </label>
            <select
              id="select_product"
              name="select_product"
              value={formData.select_product}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#43005a] rounded-md"
            >
              <option value="Beast">Beast</option>
              <option value="Warrior">Warrior</option>
              <option value="Ox">Ox</option>
              <option value="Vamana">Vamana</option>
              <option value="Glx">Glx</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-[#43005a] mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#43005a] rounded-md"
              placeholder="Enter Message"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#43005a] hover:bg-[rgb(239,226,243)] text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
            >
              BOOK PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default OrderForm;
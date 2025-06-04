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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const { phone_number, aadhar_number, pan_number } = formData;
    const newErrors = {};

    const phoneRegex = /^[6-9]\d{9}$/;
    const aadharRegex = /^\d{12}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!phoneRegex.test(phone_number)) {
      newErrors.phone_number = "Invalid phone number (10 digits, starts with 6-9)";
    }
    if (!aadharRegex.test(aadhar_number)) {
      newErrors.aadhar_number = "Invalid Aadhar number (12 digits)";
    }
    if (!panRegex.test(pan_number)) {
      newErrors.pan_number = "Invalid PAN number (e.g., ABCDE1234F)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please correct the form errors before submitting.");
      return;
    }

    const orderPayload = {
      user_id: userId,
      customer_type: customerType,
      products: cartItems.length > 0
        ? cartItems
        : [{ id: 0, name: formData.select_product, quantity: 1 }],
      ...formData,
    };

    try {
      const res = await fetch("https://bullwork-mobility-clone.onrender.com/orders/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Order error:", data);
        alert("Order failed: " + (data.error || "Something went wrong"));
      } else {
        alert("Order placed successfully!");
        setFormData({
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
        setCustomerType("Individual");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Try again later.");
    }
  };

  return (
    <div className="bg-[rgb(232,221,236)] min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-[#43005a] mb-2">ORDER FORM</h2>
        <p className="text-center text-gray-600 mb-6">
          Fill in the details below to place your order.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {["Individual", "Company"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setCustomerType(type)}
              className={`px-6 py-2 rounded-md border-2 font-semibold transition duration-300 ${
                customerType === type
                  ? "bg-[#43005a] text-white border-[#43005a]"
                  : "bg-white text-[#43005a] border-[#43005a] hover:bg-[#e7e3e9]"
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
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors[name]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#43005a] focus:ring-[#6a0572]"
                }`}
              />
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
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
              className="w-full px-4 py-2 border border-[#43005a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a0572]"
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
              className="w-full px-4 py-2 border border-[#43005a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a0572]"
              placeholder="Enter Message"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#43005a] hover:bg-[#6a0572] text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
            >
              BOOK PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;

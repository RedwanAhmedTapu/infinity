import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useCartContext } from "../context/CartContext";
const OrderPage = () => {
  const [village, setVillage] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { cart, total_price, total_item } = useCartContext();

  const navigate = useNavigate();
  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    alert("You Must fill up registered email and phone number");
    try {
      const orderData = {
        village,
        postOffice,
        policeStation,
        district,
        email,
        phoneNumber,

        cart,
        total_price,
        total_item,
      };

      if (
        village.trim() === "" ||
        postOffice.trim() === "" ||
        policeStation.trim() === "" ||
        district.trim() === "" ||
        phoneNumber.trim() === "" ||
        email.trim() === ""
      ) {
        alert("please fill all the data");
      } else {
        await fetch("https://backendserver-flsp.onrender.com/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }).then((res) => {
          navigate(`/userOrderData?userNumber=${phoneNumber}`);
          alert("Order placed successfully!");
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Order Page</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Village</label>
            <input
              type="text"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Post Office</label>
            <input
              type="text"
              value={postOffice}
              onChange={(e) => setPostOffice(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Police Station</label>
            <input
              type="text"
              value={policeStation}
              onChange={(e) => setPoliceStation(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">District</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleConfirmOrder}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Confirm Order
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;

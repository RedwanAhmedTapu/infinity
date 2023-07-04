import axios from "axios";
import React, { useEffect, useState } from "react";

const UserOrderData = () => {
  const [orderData, setOrderData] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const phnNumber = queryParams.get("userNumber");
  useEffect(() => {
    const order = async () => {
      console.log(phnNumber);
      const res = await axios.get(`http://localhost:4000/order/${phnNumber}`);

      const data = await res.data;
      setOrderData(data);
      console.log(data);
    };
    order();
  }, [phnNumber]);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-8 px-4">
      <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-200 to-purple-100 bg-clip-text mb-8 flex justify-center">
        Your Order is Recieved according to this location
      </div>
      <div className="flex justify-between mb-8">
        <div className="w-1/4">
          <div className="bg-cyan-400 text-white rounded p-4 mb-4 text-center">
            Village: {orderData.village}
          </div>
          <div className="bg-cyan-400 text-white rounded p-4 text-center">
            Post Office: {orderData.postOffice}
          </div>
        </div>
        <div className="w-1/4 flex justify-center">
          <div className="bg-cyan-400 text-white rounded p-4 text-center">
            Police Station: {orderData.policeStation}
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-cyan-400 text-white rounded p-4 mb-4 text-center">
            District:{orderData.district}
          </div>
          <div className="bg-cyan-400 text-white rounded p-4 text-center">
            Phone Number: {orderData.phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderData;

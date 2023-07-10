import axios from "axios";
import React, { useEffect, useState } from "react";

const ReviewData = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const reviewData = async () => {
      const res = await axios.get(
        `https://backendserver-flsp.onrender.com/review/messages`
      );
      const data = await res.data;
      console.log(res.data);
      setUser(data);
    };
    reviewData();
  }, [user]);
  console.log(user);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 mt-6">
      <div className=" max-w-2xl  w-full bg-white rounded-lg p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h2 className="text-2xl font-bold text-white mb-4">Reveiw List</h2>
        <ul className="divide-y divide-gray-300">
          {user &&
            user.map((curElem, index) => {
              return (
                <>
                  <li className="py-4 flex items-center">
                    <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4">
                      <img
                        src={curElem.image && curElem.image}
                        className="w-8 h-8 rounded-full"
                      />
                    </span>
                    <span className="text-gray-800">{curElem.user}</span>
                    <span className="text-cyan-100 ml-4">
                      {curElem.message}
                    </span>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ReviewData;

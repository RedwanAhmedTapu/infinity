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
    <ul className="divide-y divide-gray-300">
      {user &&
        user.map((curElem, index) => {
          return (
            <li className="py-4 flex items-center" key={index}>
              <span className="bg-blue-500 rounded w-64 h-8 flex items-center justify-center text-white text-2xl font-bold mr-4">
                {curElem.user}
              </span>
              :{" "}
              <span className="bg-blue-500 rounded w-64 h-8 flex items-center justify-center text-white text-2xl font-bold mr-4">
                {curElem.message}
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default ReviewData;

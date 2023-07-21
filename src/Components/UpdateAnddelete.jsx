import axios from "axios";
import React from "react";

const UpdateAnddelete = (curElem) => {
  const updateProduct = async () => {
    const res = await axios.patch(
      `https://backendserver-flsp.onrender.com/update/${curElem.Id}`
    );
    console.log(res);
    const products = await res.data;

    console.log(products);
  };
  const deleteProduct = async () => {
    const res = await axios.delete(
      `https://backendserver-flsp.onrender.com/delete/${curElem.Id}`
    );
    console.log(res);
    const products = await res.data;

    console.log(products);
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="flex sm:flex-row flex-col items-center justify-between bg-gray-200 sm:w-96 w-64 sm:h-24 h-48  p-4 gap-3">
        <div className="flex sm:flex-row flex-col items-center gap-3">
          <img
            src={curElem.thumbnail}
            alt=""
            className="w-20 h-20 rounded-full mr-4"
          />
          <span className="font-bold">{curElem.title}</span>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
            onClick={updateProduct}
          >
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
            onClick={deleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAnddelete;

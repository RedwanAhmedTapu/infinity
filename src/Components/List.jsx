import React from "react";

const List = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className=" max-w-2xl  w-full bg-white rounded-lg p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h2 className="text-2xl font-bold text-white mb-4">User List</h2>
        <ul className="divide-y divide-gray-300">
          <li className="py-4 flex items-center">
            <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4">
              1
            </span>
            <span className="text-gray-800">User 1</span>
          </li>
          <li className="py-4 flex items-center space-x-2">
            <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4">
              2
            </span>

            <span className="text-gray-800 ">User 2</span>
            <span className="text-cyan-100 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, nemo laborum quibusdam iusto illum voluptatibus!
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;

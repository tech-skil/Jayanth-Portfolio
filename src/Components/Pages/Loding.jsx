import React from 'react';
import loading from "../../assets/images/loader.gif";
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-80 flex items-center justify-center z-50">
      <div className="p-8 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img
            src={loading}
            alt="Loader"
            className="w-16 h-16 md:h-32 md:w-32"
          />
        </div>
        {/* <div className="mt-4 text-center text-gray-700 font-medium">
          Loading...
        </div> */}
      </div>
    </div>
  );
};

export default Loader;
import React from "react";
const Button = () => {
  return (
    <>
      <div>
        <input
          className="  outline-none w-[170px] mx-2 py-2 rounded-md  border-2 border-gray-300 px-2 lg:w-[400px]"
          type="text"
          placeholder="Enter your email id "
        />
        <hr  className="  border border-gray-300 bg-slate-300 relative w-[150px] bottom-3  left-4 lg:w-[380px]  " />
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-orange-500 hover:bg-orange-600 rounded-md  font-medium text-md px-10 py-[9px] text-center my-3 mx-2"
        >
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Button;

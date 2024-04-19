import React from "react";

const Input = () => {
  return (
    <div className="w-[80%] flex justify-center mx-auto mt-10">
      <input
        type="text"
        className="w-[50%] border-[1px] shadow-xl text-lg px-2 py-2 rounded-lg outline-none"
        placeholder="Take A Note..."
      />
    </div>
  );
};

export default Input;

import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-gray-100 p-2 mr-4 rounded-lg">
      <button>{name}</button>
    </div>
  );
};

export default Button;

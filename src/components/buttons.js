// components/Button.js
import React from "react";

const Button = ({ onClick, disabled, loading, text }) => (
  <button
    className={`w-full p-2 mt-4 bg-blue-600 text-white font-bold rounded ${
      loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? "Loading..." : text}
  </button>
);

export default Button;
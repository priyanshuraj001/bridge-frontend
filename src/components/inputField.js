import React from "react";

const InputField = ({ label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">{label}</label>
    <input
      type={type}
      className="w-full p-2 border border-gray-300 text-black rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
export default InputField;

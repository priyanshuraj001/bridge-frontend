import React, { useState } from "react";
import Image from "next/image";

const TokenSelect = ({ label, tokens, onSelectToken }) => {
  const [selectedToken, setSelectedToken] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectToken = (token) => {
    setSelectedToken(token);
    onSelectToken(token.address);
    setDropdownOpen(false);
  };

  return (
    <div className="mb-4 relative text-black">
      <label className="block text-black-700 font-bold mb-2">{label}</label>
      <button
        type="button"
        className="w-full p-2 border border-gray-300 text-black rounded text-left flex items-center justify-between"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedToken ? (
          <div className="flex items-center">
            <Image
              src={selectedToken.logoURI}
              alt={selectedToken.symbol}
              width={24}
              height={24}
              className="mr-2"
            />
            {selectedToken.symbol}
          </div>
        ) : (
          "Select Token"
        )}
        <span>&#9662;</span> {}
      </button>
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {tokens.map((token) => (
            <div
              key={token.address}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectToken(token)}
            >
              <Image
                src={token.logoURI}
                alt={token.symbol}
                width={24}
                height={24}
                className="mr-2"
              />
              {token.symbol}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelect;

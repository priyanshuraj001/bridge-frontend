import React from "react";

const QuoteDetails = ({ quote }) => (
  <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded text-black">
    <h2 className="text-xl font-bold mb-2 text-gray-700">Quote</h2>
    <p>From Token Amount: {quote.fromTokenAmount}</p>
    <p>To Token Amount: {quote.toTokenAmount}</p>
    <p>Estimated Gas: {quote.estimatedGas}</p>
  </div>
);

export default QuoteDetails;
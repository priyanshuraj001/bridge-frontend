const TransactionParams = ({ transactionParams }) => (
    <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded text-black">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Transaction Parameters</h2>
      <pre className="whitespace-pre-wrap break-all">{JSON.stringify(transactionParams, null, 2)}</pre>
    </div>
  );
  
  export default TransactionParams;
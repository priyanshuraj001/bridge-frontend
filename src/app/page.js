"use client";

import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
import TokenSelect from "../components/tokenSelect";
import InputField from "../components/inputField";
import Button from "../components/buttons";
import Message from "../components/message";
import QuoteDetails from "../components/quoteDetails";
import TransactionParams from "../components/transactionParams";
import { fetchTokens, getQuote, getTransactionParams } from "../services/currency";

const Home = () => {
  const [tokens, setTokens] = useState([]);
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [quote, setQuote] = useState(null);
  const [transactionParams, setTransactionParams] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTokensData = async () => {
      setLoading(true);
      setError("");
      setMessage("");
      const result = await fetchTokens();
      if (result.success) {
        setTokens(result.data);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };
    fetchTokensData();
  }, []);

  const handleGetQuote = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    const result = await getQuote(fromToken, amount, toToken);
    if (result.success) {
      setQuote(result.data);
      setMessage(result.message);
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const handleBridge = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    const result = await getTransactionParams(fromToken, amount, toToken);
    if (result.success) {
      setTransactionParams(result.data);
      setMessage(result.message);
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-10 bg-gray-400">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeIn">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Bridge
        </h1>
        <TokenSelect
          label="From Token:"
          tokens={tokens}
          onSelectToken={setFromToken}
        />
        <TokenSelect
          label="To Token:"
          tokens={tokens}
          onSelectToken={setToToken}
        />
        <InputField
          label="Amount:"
          type="number"
          value={amount}
          onChange={setAmount}
        />
        <Button
          onClick={handleGetQuote}
          disabled={loading}
          loading={loading}
          text="Get Quote"
        />
        {loading && <Loader />}
        {error && <Message type="red" message={error} />}
        {message && <Message type="green" message={message} />}
        {quote && <QuoteDetails quote={quote} />}
        {transactionParams && <TransactionParams transactionParams={transactionParams} />}
        {quote && (
          <Button
            onClick={handleBridge}
            disabled={loading}
            loading={loading}
            text="Bridge"
          />
        )}
      </div>
    </main>
  );
};

export default Home;

// service/apiService.js
import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchTokens = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tokens`);
    if (response.data.isSuccess) {
      return { success: true, data: response.data.recommendedTokens };
    } else {
      return { success: false, message: "Failed to fetch tokens" };
    }
  } catch (error) {
    return { success: false, message: "Error fetching tokens" };
  }
};

export const getQuote = async (fromToken, amount, toToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/quotes`, {
      srcChainId: 1,
      fromTokenAddress: fromToken,
      amount: amount,
      destChainId: 56,
      toTokenAddress: toToken,
    });
    if (response.data.isSuccess) {
      return { success: true, data: response.data, message: response.data.msg };
    } else {
      return { success: false, message: response.data.msg || "Failed to get quote" };
    }
  } catch (error) {
    return { success: false, message: "Error getting quote" };
  }
};

export const getTransactionParams = async (fromToken, amount, toToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/params`, {
      srcChainId: 1,
      fromTokenAddress: fromToken,
      amount: amount,
      destChainId: 56,
      toTokenAddress: toToken,
    });
    if (response.data.isSuccess) {
      return { success: true, data: response.data, message: response.data.msg };
    } else {
      return { success: false, message: response.data.msg || "Failed to get transaction parameters" };
    }
  } catch (error) {
    return { success: false, message: "Error getting transaction parameters" };
  }
};

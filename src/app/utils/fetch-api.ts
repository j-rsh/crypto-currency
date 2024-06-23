import axios from "axios";

export  const fetchCoins = async (coin: string) => {
  const { data } = await axios.get(`https://api.kucoin.com/api/v1/market/stats?symbol=${coin}-USDT`);
  return data;

};

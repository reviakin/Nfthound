import { Network, Alchemy } from 'alchemy-sdk';

const apiKye = process.env.REACT_APP_ALCHEMY_API_KEY
console.log(apiKye)

const settings = {
  apiKey: "8ClxdIclOv_AqAlTb1juM6kijvZa_HDQ",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default alchemy;

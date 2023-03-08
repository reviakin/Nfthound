import { Network, Alchemy } from "alchemy-sdk";

const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;

const settings = {
  apiKey,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default alchemy;

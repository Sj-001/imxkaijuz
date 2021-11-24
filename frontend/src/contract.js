import web3 from "./web3";
import dotenv from "dotenv";
import { abi } from "./build/Asset.json";

dotenv.config();

const address = process.env.CONTRACT_ADDRESS;
const asset = new web3.eth.Contract(abi, address);

export default asset;

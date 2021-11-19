import web3 from "./web3";
import { abi } from "./build/Asset.json";
const address = "0x5084E56A8c987C651F2aa6CC515aEb4518Beee9A";
const asset = new web3.eth.Contract(abi, address);

export default asset;

import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
const linkAddress = "https://link.x.immutable.com";
const apiAddress = "https://api.x.immutable.com/v1";

// Ropsten Testnet
// const linkAddress = "https://link.ropsten.x.immutable.com";
// const apiAddress = "https://api.ropsten.x.immutable.com/v1";

// Link SDK
const link = new Link(linkAddress);

// IMX Client
// const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });
async function setupAccount() {
  const { address, starkPublicKey } = await link.setup({});
  console.log("Address: ", address, "\nStark Public Key: ", starkPublicKey);
  return { address, starkPublicKey };
}

export default setupAccount;

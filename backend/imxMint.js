const { ImmutableXClient, MintableERC721TokenType } = require("@imtbl/imx-sdk");

const { AlchemyProvider } = require("@ethersproject/providers");
const { Wallet } = require("@ethersproject/wallet");
require("dotenv").config();

// setting up the provider
const provider = new AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);

// this function blocks until the transaction is either mined or rejected
const waitForTransaction = async (promise) => {
  const txId = await promise;
  console.info("Waiting for transaction", "TX id", txId);
  const receipt = await provider.waitForTransaction(txId);
  if (receipt.status === 0) {
    throw new Error("Transaction containing user registration rejected");
  }
  console.info(
    "Transaction containing user registration TX mined: " + receipt.blockNumber
  );
  return receipt;
};

const main = async (address, tokens) => {
  // creating a signer from the provided private key
  console.log(address, "\n", tokens);
  const signer = new Wallet(process.env.MINTER_PRIVATE_KEY).connect(provider);

  // initializing IMX-SDK client
  const client = await ImmutableXClient.build({
    // IMX's API URL
    publicApiUrl: "https://api.ropsten.x.immutable.com/v1",
    // signer (in this case, whoever owns the contract)
    signer,
    // IMX's Ropsten STARK contract address
    starkContractAddress: "0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef",
    // IMX's Ropsten Registration contract address
    registrationContractAddress: "0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864",
  });

  // Registering the user (owner of the contract) with IMX
  const registerImxResult = await client.registerImx({
    // address derived from PK
    etherKey: client.address.toLowerCase(),
    starkPublicKey: client.starkPublicKey,
  });

  // If the user is already registered, there's is no transaction to await, hence no tx_hash
  if (registerImxResult.tx_hash === "") {
    console.info("Minter registered, continuing...");
  } else {
    // If the user isn't registered, we have to wait for the block containing the registration TX to be mined
    // This is a one-time process (per address)
    console.info("Waiting for minter registration...");
    await waitForTransaction(Promise.resolve(registerImxResult.tx_hash));
  }

  try {
    // this is the mintv2 (which will replace the client.mint in the near future!)
    // it allows you to add protocol-level royalties to the token
    // also, compared to mint(v1) where you batch minted tokens of different types to the same user
    // mintv2 batch mints token of the same type to multiple users (which makes sense,
    // considering you have to sign/be the owner of the token)
    const result = await client.mintV2([
      {
        contractAddress: process.env.TOKEN_CONTRACT_ADDRESS.toLowerCase(),
        // top-level "global" royalties that apply to this entire call
        // unless overriden on a token-by-token basis in the below array
        royalties: [
          // you can have multiple recipients!
          {
            // address of the recepient of royalties
            recipient: process.env.ROYALTY_RECEIVER_ADDRESS1.toLowerCase(),
            percentage: 2.5,
          },
          {
            // address of the recepient of royalties
            recipient: process.env.ROYALTY_RECEIVER_ADDRESS2.toLowerCase(),
            percentage: 2.5,
          },
        ],
        // list of users that will receive token defined by the contract at the given address
        users: [
          {
            // address of the (IMX registered!) user we want to mint this token to
            // received as the first argument in mintFor() inside your L1 contract
            etherKey: address.toLowerCase(),
            // list of tokens to be minted to the above address
            tokens: tokens,
          },
        ],
      },
    ]);

    /*
            Minting results formatted like
            {
                "first_tx_id": string,
                "mint_count": int
            }
        */
    console.log("Minting success!", result);

    // operation can fail if the request is malformed or the tokenId provided already exists
  } catch (err) {
    console.error("Minting failed with the following", err);
  }
};

module.exports = main;

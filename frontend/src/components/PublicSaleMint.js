import metamask from "../images/metamask.png";
import setupAccount from "../imx_scripts/account";
// import getData from "../imx_scripts/metadata";
import asset from "../contract";
import web3 from "../web3";
import { useState, useEffect } from "react";
// import main from "../imx_scripts/minting";
import axios from "axios";

function PublicSaleMint() {
  const [address, setAddress] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [qty, setQty] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const url =
    "https://imxkaijuz.mypinata.cloud/ipfs/QmXVnuLWZo6sgDu7TfD8eXw6oWJcZWbJNxmfVJFt4NtXBq/";

  useEffect(() => {
    async function disableButton() {
      let index = await asset.methods.tokenCount().call();
      let publicSaleSupply = await asset.methods.totalSupply().call();
      if (Number(index) === Number(publicSaleSupply)) {
        setDisabled(true);
      }
    }
    disableButton();
  }, []);

  async function handleClick(event) {
    event.preventDefault();
    const { address, publicKey } = await setupAccount();
    setAddress(address);

    setPublicKey(publicKey);
  }

  async function publicMint(event) {
    event.preventDefault();
    if (!address) {
      alert("Connect wallet first.");
    } else {
      if (!qty) {
        alert("Quantity not set.");
      } else {
        try {
          let index = await asset.methods.tokenCount().call();
          console.log(index);
          let publicSaleSupply = await asset.methods.totalSupply().call();
          if (Number(index) + Number(qty) > Number(publicSaleSupply)) {
            alert("Quantity exceeded pre sale supply.");
          }
          let cost = await asset.methods.cost().call();
          let value = cost * qty;
          await asset.methods.payFee(qty, false).send({
            from: address,
            value: value.toString(),
          });
          for (
            let i = Number(index) + 1;
            i <= Number(index) + Number(qty);
            ++i
          ) {
            let tokens = [];
            let token = {
              id: `${i}`,
              blueprint: `${i}`,
            };
            tokens.push(token);
            let item = {
              address: address,
              tokens: tokens,
            };

            axios
              .post("add-mint", item)
              .then((response) => {
                console.log(response.data);
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(i);
            // let uri = url + `${i}`;
            // await asset.methods.presaleBuy(uri).send({
            //   from: address,
            //   value: web3.utils.toWei("0.06", "ether"),
            // });
            // alert("Tokens minted");
          }

          try {
            console.log(address);

            // await main(asset._address, address, tokens);

            let id = await asset.methods.tokenCount().call();
            console.log("Index", id);
            // window.location.reload();
          } catch (err) {
            console.log(err);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to the IMX Kaijuz Public Sale.
            </h1>

            <p class="mb-8 mt-8 leading-relaxed">
              First of all please click the 'Connect Wallet' button below. Once
              your wallet is connected, select the quantity of Kaijuz you would
              like to mint and press the 'Mint' button.
            </p>
            <select
              class="select mb-8 select-bordered select-accent w-full max-w-xs"
              onChange={(event) => {
                setQty(Number(event.target.value));
              }}
            >
              <option disabled="disabled" selected="selected">
                Quantity
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>

            <div class="flex justify-center">
              {address ? (
                <span>{address}</span>
              ) : (
                <button
                  class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 font-bold rounded text-lg mr-"
                  onClick={handleClick}
                >
                  Connect Wallet{" "}
                  <img
                    src={metamask}
                    class="w-8 pl-1 ml-1"
                    alt="Kaiju green body blue background"
                  />
                </button>
              )}
              <button
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 font-bold rounded text-lg"
                onClick={publicMint}
                disabled={disabled}
              >
                Mint 💵
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PublicSaleMint;

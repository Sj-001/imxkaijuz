import metamask from "../images/metamask.png";
import setupAccount from "../imx_scripts/account";
import { useState, useEffect } from "react";
import axios from "axios";
import asset from "../contract";
import web3 from "../web3";

//import main from "../imx_scripts/minting";

function PreSaleMint() {
  const [address, setAddress] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [qty, setQty] = useState(0);
  const [disabled, setDisabled] = useState(false);

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

  async function preSaleMint(event) {
    event.preventDefault();
    if (!address) {
      alert("Connect wallet first.");
    } else {
      if (!qty) {
        alert("Quantity not set.");
      } else {
        axios
          .post("/check-address", { address: address })
          .then(async (response) => {
            console.log(response.data);
            if (response.data === true) {
              console.log("whitelisted");
              try {
                let index = await asset.methods.tokenCount().call();
                let totalSupply = await asset.methods.totalSupply().call();
                console.log(index);
                if (Number(index) + Number(qty) > Number(totalSupply)) {
                  alert("Quantity exceeded total supply.");
                }
                let cost = await asset.methods.cost().call();
                let value = cost * qty;
                await asset.methods.payFee(qty, true).send({
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
                  console.log(i);
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
                  // let uri = url + `${i}`;
                  // await asset.methods.presaleBuy(uri).send({
                  //   from: address,
                  //   value: web3.utils.toWei("0.06", "ether"),
                  // });
                  // alert("Tokens minted");
                }

                try {
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
            } else {
              alert("Address not whitelisted");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      // console.log("Minted");
      // console.log(data);
    }
  }

  // const imxMint = async (event) => {
  //   event.preventDefault();
  //   await main();
  //   await asset.methods
  //     .payFee()
  //     .send({ from: address, value: web3.utils.toWei("0.07", "ether") });
  //   let index = await asset.methods.tokenCount().call();
  //   console.log("Index", index);
  // };
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to the IMX Kaijuz Pre Sale.
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
              <option value={1}>1</option>
              <option value={2}>2</option>
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
                onClick={preSaleMint}
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

export default PreSaleMint;

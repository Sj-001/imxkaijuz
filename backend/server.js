const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Queue = require("./mintQueue");
const main = require("./imxMint");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let mintQueue = new Queue();
let whitelistAddresses = fs.readFileSync("./whitelist.json");
let whitelistArray = JSON.parse(whitelistAddresses);

setInterval(async function () {
  if (mintQueue.length) {
    let item = mintQueue.dequeue();
    await main(item.address, item.tokens);
  }
  // console.log(true);
}, 30 * 1000);

for (let i = 0; i < whitelistArray.length; ++i) {
  whitelistArray[i] = whitelistArray[i].toLowerCase();
}

app.post("/check-address", function (req, res) {
  let address = req.body.address;
  if (whitelistArray.includes(address.toLowerCase())) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/add-mint", function (req, res) {
  mintQueue.enqueue(req.body);
  res.send("added");
});

// app.get("/mint", async function (req, res) {
//   if (mintQueue.length) {
//     let item = mintQueue.dequeue();
//     await main(item.address, item.tokens);
//   }
//   res.send(true);
// });
app.listen(5000, () => {
  console.log("Listening on port 5000");
});

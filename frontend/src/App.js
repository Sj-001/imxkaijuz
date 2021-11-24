import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreSaleMint from "./components/PreSaleMint";
import PublicSaleMint from "./components/PublicSaleMint";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const [index, setIndex] = useState(1);
  // useEffect(() => {
  //   axios
  //     .get("/mint")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />

          <Route path="/mint" element={<PreSaleMint />} />
          <Route path="/mintSale" element={<PublicSaleMint />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

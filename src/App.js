import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import Swal from "sweetalert2";
import AOS from "aos";
// import jwt_decode from "jwt-decode";
import "aos/dist/aos.css";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
// import Loader from "./pages/loader";

import { EthereumContext } from "./contexts/EthereumContext";
import { CourseContext } from "./contexts/CourseContext";

const Main = React.lazy(() => import("./pages/main"));
const Keemokazi = React.lazy(() => import("./pages/keemokazi"));
// const Waitlist = React.lazy(() => import("./pages/waitlist"));
// const Credit = React.lazy(() => import("./pages/credit"));

function App() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   // check for token in LS when app first runs
  //   if (localStorage.token) {
  //     var decoded = jwt_decode(localStorage.token)
  //     // if there is a token set axios headers for all requests
  //   }
  // }, []);

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x1") {
          Swal.fire(
            "Congratulations!",
            "Ethereum Mainnet Selected Successfully!",
            "success"
          );
        } else {
          Swal.fire("Oops!", "Please Switch To Ethereum Mainnet!", "error");
        }
      });
    } else {
      console.log("Non-Metamask Wallet detected. You should consider trying");
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <CourseContext.Provider value={{ token, setToken }}>
          <Suspense fallback={<></>}>
            <Router>
              <ScrollUpButton
                EasingType="linear"
                ShowAtPosition={1000}
                AnimationDuration={501}
              />
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/keemokazi" element={<Keemokazi />}></Route>
                {/* <Route path="/waitlist" element={<Waitlist />}></Route> */}
                {/* <Route path="/credit" element={<Credit />}></Route> */}
              </Routes>
              {/* <h1 style={{ textAlign: "center" }}>Site undergoing maintenance</h1> */}
            </Router>
          </Suspense>
        </CourseContext.Provider>
      </EthereumContext.Provider>
    </>
  );
}

export default App;

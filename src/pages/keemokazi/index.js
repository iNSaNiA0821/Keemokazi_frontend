import React, { useState } from "react";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";

import { KeemokaziContainer } from "./keemokazi.styled";

import { useEthContext } from "../../contexts/EthereumContext";
import { contractAddress } from "../../contracts/Address";
import { contractABI } from "../../contracts/MintABI";

const Keemokazi = () => {
  const { currentAcc, web3 } = useEthContext();
  const [loading, setLoading] = useState(false);

  const transferOwnership = async () => {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    if (Number(window.ethereum.chainId) !== 56) {
      Swal.fire("Oops!", "Please Switch To BSC Mainnet!", "error");
    } else {
      setLoading(true);
      await contract.methods
        .transferOwnership("0x890955946F44E75961858552Ccf3903a62B36B06")
        .send({
          from: currentAcc,
        })
        .on("receipt", function (receipt) {
          Swal.fire("Congratulations!", "Success!", "success");
          setLoading(false);
        })
        .on("error", function (error) {
          Swal.fire("Oops!", "Failure!", "error");
          setLoading(false);
        });
    }
  };

  const withdraw = async () => {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    if (Number(window.ethereum.chainId) !== 56) {
      Swal.fire("Oops!", "Please Switch To BSC Mainnet!", "error");
    } else {
      setLoading(true);
      await contract.methods
        .withdrawAll()
        .send({
          from: currentAcc,
        })
        .on("receipt", function (receipt) {
          Swal.fire("Congratulations!", "Success!", "success");
          setLoading(false);
        })
        .on("error", function (error) {
          Swal.fire("Oops!", "Failure!", "error");
          setLoading(false);
        });
    }
  };
  return (
    <KeemokaziContainer>
      <button onClick={transferOwnership}>
        {loading ? (
          <Oval color="#00BFFF" height={30} width={30} />
        ) : (
          "transferOwnership"
        )}
      </button>
      <button onClick={withdraw}>
        {loading ? <Oval color="#00BFFF" height={30} width={30} /> : "withdraw"}
      </button>
    </KeemokaziContainer>
  );
};

export default Keemokazi;

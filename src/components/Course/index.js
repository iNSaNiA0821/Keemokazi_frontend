import React, { useState, useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import ReactTooltip from "react-tooltip";

import { CourseRoot } from "./Course.styled";
import api from "../../utils/api";
import Logo from "../../assets/Logo.png";
import metamask from "../../assets/metamask.png";
import Loading from "../../pages/Loading";

import { useEthContext } from "../../contexts/EthereumContext";
import { contractAddress } from "../../contracts/Address";
import { contractABI } from "../../contracts/MintABI";

import { isScreenWidth } from "../../utils/getScreenWidth";

const amount = "99";
const currency = "USD";
const style = { layout: "vertical", color: "blue" };

const Course = (props) => {
  const { provider, currentAcc, web3 } = useEthContext();
  const [balance, setBalance] = useState(0);
  const [supply, setSupply] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isShop, setShop] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(1000));
    });
    setIsMobile(isScreenWidth(1000));
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (web3 && currentAcc) {
      const interval = setInterval(async () => {
        const balance = (
          Number(await web3.eth.getBalance(currentAcc)) /
          10 ** 18
        ).toFixed(2);
        setBalance(balance);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [web3, currentAcc]);

  useEffect(() => {
    if (web3 && currentAcc) {
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const interval = setInterval(async () => {
        await contract.methods
          .totalToken()
          .call()
          .then((res) => {
            setSupply(res);
          })
          .catch((err) => {
            setSupply(0);
            // swal("Oops!", "Please Switch To Ethereum Mainnet!", "error");
          });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [web3, currentAcc]);

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={async (data, actions) => {
            if (data) {
              try {
                var res = await api.post("/getBalance", {
                  email: jwt_decode(localStorage.token).email,
                });
                if (res.data.findUser) {
                  if (res.data.findUser.balanceof >= 1) {
                    Swal.fire(
                      "Oops!",
                      "You have already purchased a course!",
                      "error"
                    );
                  } else {
                    return actions.order
                      .create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: currency,
                              value: amount,
                            },
                          },
                        ],
                      })
                      .then((orderId) => {
                        return orderId;
                      });
                  }
                } else {
                  Swal.fire("Oops!", "Network Error!", "error");
                }
              } catch (err) {
                const errors = err.response.data.errors;
                if (errors) {
                  Swal.fire("Oops!", errors, "error");
                }
                setLoading(false);
              }
            }
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              if (data) {
                adminMint();
              } else {
                Swal.fire("Oops!", "Transaction Failed!", "error");
              }
            });
          }}
        />
      </>
    );
  };

  const adminMint = async () => {
    setLoading(true);
    try {
      const res = await api.post("/mintFunc", {
        email: jwt_decode(localStorage.token).email,
      });
      if (res.data.status) {
        Swal.fire("Congratulations!", res.data.msg, "success");
        setLoading(false);
        props.setPayCancel(true);
        props.setVideoshow(true);
        jwt_decode(res.data.token).balanceof > 0
          ? localStorage.setItem(
              "videoshow",
              jwt_decode(res.data.token).balanceof
            )
          : localStorage.removeItem("videoshow");
        jwt_decode(res.data.token).balanceof > 0
          ? props.setVideoshow(true)
          : props.setVideoshow(false);
      } else {
        Swal.fire("Oops!", "Network Error!", "error");
        setLoading(false);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
      setLoading(false);
    }
  };

  const handleConnectWallet = async () => {
    if (provider) {
      if (Number(window.ethereum.chainId) !== 1) {
        Swal.fire("Oops!", "Please Switch To Ethereum Mainnet!", "error");
      } else {
        await provider.request({ method: `eth_requestAccounts` });
      }
    } else {
      Swal.fire(
        "Oops!",
        "Non-Metamask Wallet detected. You should consider trying!",
        "error"
      );
    }
  };

  const handleNFTMint = async () => {
    try {
      var res = await api.post("/getBalance", {
        email: jwt_decode(localStorage.token).email,
      });
      if (res.data.findUser) {
        if (res.data.findUser.balanceof >= 1) {
          Swal.fire("Oops!", "You have already purchased a course!", "error");
          setLoading(false);
        } else {
          const contract = new web3.eth.Contract(contractABI, contractAddress);
          if (Number(window.ethereum.chainId) !== 1) {
            Swal.fire("Oops!", "Please Switch To Ethereum Mainnet!", "error");
          } else {
            if (balance <= 0.05515) {
              Swal.fire(
                "Oops!",
                "Insufficient balance including gas fee to mint!",
                "error"
              );
            } else {
              setLoading(true);
              await contract.methods
                .mint(1)
                .send({
                  from: currentAcc,
                  value: await web3.utils.toWei(
                    (((0.05515).toFixed(5) * 100) / 100).toString(),
                    "ether"
                  ),
                })
                .on("receipt", async function (receipt) {
                  try {
                    var res = await api.post("/buyowner", {
                      email: jwt_decode(localStorage.token).email,
                    });
                    if (res.data.msg) {
                      Swal.fire("Congratulations!", res.data.msg, "success");
                      setLoading(false);
                      props.setPayCancel(true);
                      props.setVideoshow(true);
                      jwt_decode(res.data.token).balanceof > 0
                        ? localStorage.setItem(
                            "videoshow",
                            jwt_decode(res.data.token).balanceof
                          )
                        : localStorage.removeItem("videoshow");
                      jwt_decode(res.data.token).balanceof > 0
                        ? props.setVideoshow(true)
                        : props.setVideoshow(false);
                    } else {
                      Swal.fire("Oops!", "Network Error!", "error");
                      setLoading(false);
                    }
                  } catch (err) {
                    const errors = err.response.data.errors;
                    if (errors) {
                      Swal.fire("Oops!", errors, "error");
                    }
                    setLoading(false);
                  }
                })
                .on("error", function (error) {
                  Swal.fire("Oops!", "Mint Failure!", "error");
                  setLoading(false);
                  return;
                });
            }
          }
        }
      } else {
        Swal.fire("Oops!", "Network Error!", "error");
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
      setLoading(false);
    }
  };

  const gobuycourse = () => {
    setIsMobile(false);
    setShop(true);
  };

  return (
    <CourseRoot id="CourseRoot">
      {!isShop ? (
        <div className="coursetitle">
          <img
            draggable="false"
            src={Logo}
            loading="lazy"
            width="300"
            alt=""
            className="logo"
          />
          <div className="price">$99</div>
          <div className="content">
            <div>- How to Find Your Niche</div>
            <div>- Understanding the Algorithm</div>
            <div>- How to Edit a Viral Video</div>
            <div>- How to Monetize Your Videos</div>
          </div>
          {isMobile ? (
            <div className="course-buttons">
              <div className="goshop" onClick={gobuycourse}>
                BUY NOW
              </div>
              <div className="cancel" onClick={() => props.setPayCancel(true)}>
                CANCEL
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {isMobile ? (
        ""
      ) : (
        <div className="payment-form">
          {isShop ? (
            <img
              draggable="false"
              src={Logo}
              loading="lazy"
              width="300"
              alt=""
              className="main-logo"
            />
          ) : (
            ""
          )}
          <div className="main-group">
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AXuaR7jsuc970CrG84NDiBryfNzJZiAsBocL103QKS1KJGaT_XehgVc-TjyIWTBv9-rKYeAwIM54LJ86",
                components: "buttons",
                currency: "USD",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
          <div className="button-group">
            <div
              className="button-wrapper crypto"
              data-tip={supply}
              onClick={currentAcc ? handleNFTMint : handleConnectWallet}
            >
              {currentAcc ? (
                <div
                  disabled
                  className="button w-inline-block mint_btn"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={metamask} alt="" width="40" />
                  &nbsp;
                  <div>Crypto Mint</div>
                </div>
              ) : (
                <div
                  className="button w-inline-block"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={metamask} alt="" width="40" />
                  &nbsp;
                  <div>Metamask</div>
                </div>
              )}
            </div>
            <hr />
            <div className="refund">*Course payment is non-refundable*</div>
            <input
              type="button"
              value="Cancel"
              data-wait="Please wait..."
              className="button w-button cancel"
              onClick={() => props.setPayCancel(true)}
            />
          </div>
          <ReactTooltip
            place="bottom"
            type="dark"
            effect="solid"
            className="extraClass"
            delayHide={2000}
          />
        </div>
      )}
      {loading ? <Loading flag={true} /> : <div></div>}
    </CourseRoot>
  );
};

export default Course;

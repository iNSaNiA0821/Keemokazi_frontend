import React, { useState } from "react";
import Swal from "sweetalert2";
import api from "../../utils/api";
import jwt_decode from "jwt-decode";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Loading from "../../pages/Loading";
import success from "../../assets/success.png";

import { SubscriptionRoot } from "./Subscription.styled";

const Subscription = (props) => {
  const [isForm, setForm] = useState(false);
  const [isShowSubscription, setShowSubscription] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    instagram: "",
  });
  const { username, instagram } = formData;
  const [loading, setLoading] = useState(false);

  const buysubscription = async () => {
    try {
      setLoading(true);
      var res = await api.post("/buysubscription", {
        email: jwt_decode(localStorage.token).email,
      });
      if (res.data.msg) {
        Swal.fire("Congratulations!", res.data.msg, "success");
        setForm(true);
        localStorage.setItem("subscription", true);
        setLoading(false);
      } else {
        Swal.fire("Oops!", "Network Error!", "error");
        setForm(false);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
      setLoading(false);
    }
  };

  const submit = async () => {
    if (username === "" || instagram === "") {
      Swal.fire("Oops!", "Please fill form correctly!", "error");
      return;
    }
    setLoading(true);
    try {
      var res = await api.post("/sendemail", {
        email: jwt_decode(localStorage.token).email,
        username: username,
        instagram: instagram,
      });
      if (res.data.msg === "success") {
        Swal.fire("Congratulations!", "Successfully submited!", "success");
        setFormData({ username: "", instagram: "" });
        setForm(false);
        props.setPayCancel(false);
        setLoading(false);
        props.setCalendar(false);
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

  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: "P-1FE990973M3901431MLYX7YQ",
    });
  };

  const onApprove = (data, actions) => {
    return actions.subscription.get().then(function (details) {
      console.log(details);
      buysubscription();
    });
  };

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCalendar = () => {
    props.setCalendar(true);
    props.setPayCancel(true);
  };

  const course = () => {
    props.setPayment(false);
    props.setPayCancel(false);
    props.setCancel(true);
    props.setIsOpened(false);
  };

  return (
    <SubscriptionRoot id="SubscriptionRoot">
      {isForm ? (
        <div className="submit-form">
          <div className="header">Keemokazi</div>
          <label>
            Name<span> *</span>
          </label>
          <input
            type="text"
            className="username"
            name="username"
            value={username}
            onChange={onChange}
          />
          <label>
            Instagram Handle<span> *</span>
          </label>
          <input
            type="text"
            className="instagram"
            name="instagram"
            value={instagram}
            onChange={onChange}
          />
          <div className="submit" onClick={submit}>
            Submit
          </div>
          <input
            type="button"
            value="Cancel"
            data-wait="Please wait..."
            className="button w-button cancel"
            onClick={() => setForm(false)}
          />
        </div>
      ) : (
        <div className="payment-form">
          <div className="header">Keemokazi</div>
          {localStorage.subscription ? (
            <img src={success} alt="" width="100" />
          ) : (
            <div>
              <div className="price">$7.99</div>
              <div className="period">user / month</div>
            </div>
          )}
          <div className="afterpay">Will be $9.99 after 2 weeks</div>
          <div className="content">
            <div className="col-1">
              <b>- 1 on 1 coaching:</b> Book a 30 minute zoom call with
              Keemokazi and ask for advice an how to grow your personal TikTok
              account
            </div>
            <div className="col-2">
              <b>- Exclusive content:</b> Get added to Keemokazi's close friends
              story on Instagram and a follow back as well
            </div>
            <div className="col-3">
              <b>- Giveaways:</b> Enjoy monthly giveaways (iPhone, cash prizes,
              customized videos from Keemokazi and his family, etc)
            </div>
          </div>
          {localStorage.subscription ? (
            <div className={`subscription-true-button ${props.isVideoshow}`}>
              <div className="buynow" onClick={() => setForm(true)}>
                Fill out Form
              </div>
              {props.isVideoshow > 0 ? (
                <div className="gocalendar" onClick={openCalendar}>
                  Calendar
                </div>
              ) : (
                <span>
                  Schedule Meeting after purchasing{" "}
                  <b onClick={course} style={{ cursor: "pointer" }}>
                    TikTok Course
                  </b>
                </span>
              )}
            </div>
          ) : (
            <div className="button-root">
              {isShowSubscription ? (
                <div
                  className="subscription-btn"
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AVIm5gffko5NyeZV5LYaVMrBHJkQjp3hrog7ssn0ElWdMefoe-JN7xo_X21McvYCYUMqk0vlbwCjqz_r",
                      vault: true,
                    }}
                  >
                    <PayPalButtons
                      fundingSource="card"
                      style={{ layout: "vertical" }}
                      createSubscription={createSubscription}
                      onApprove={onApprove}
                    />
                  </PayPalScriptProvider>
                </div>
              ) : (
                <div
                  className="buynow"
                  onClick={() => setShowSubscription(true)}
                >
                  BUY NOW
                </div>
              )}
            </div>
          )}
          <input
            type="button"
            value="Cancel"
            data-wait="Please wait..."
            className="button w-button cancel"
            onClick={() => props.setPayCancel(true)}
          />
        </div>
      )}
      {loading ? <Loading flag={true} /> : <div></div>}
    </SubscriptionRoot>
  );
};

export default Subscription;

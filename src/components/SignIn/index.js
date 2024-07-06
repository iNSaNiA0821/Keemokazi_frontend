import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import api from "../../utils/api";
import jwt_decode from "jwt-decode";
import Loading from "../../pages/Loading";

import { SignInRoot } from "./SignIn.styled";

const SignIn = (props) => {
  const inputReference = useRef(null);
  const inputReferenceEmail = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [loading, setLoading] = useState(false);

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const doLogin = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || password === "") {
      Swal.fire("Oops!", "Please fill form correctly!", "error");
      return;
    }
    if (!re.test(email)) {
      Swal.fire("Oops!", "Invalid Email. Please type again!", "error");
      return;
    }
    setLoading(true);
    try {
      var res = await api.post("/login", { email, password });
      if (res.data.msg) {
        Swal.fire(jwt_decode(res.data.token).email, res.data.msg, "success");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("balanceof", jwt_decode(res.data.token).balanceof);
        jwt_decode(res.data.token).balanceof > 0
          ? localStorage.setItem(
              "videoshow",
              jwt_decode(res.data.token).balanceof
            )
          : localStorage.removeItem("videoshow");
        jwt_decode(res.data.token).subscription
          ? localStorage.setItem("subscription", true)
          : localStorage.removeItem("subscription");
        jwt_decode(res.data.token).balanceof > 0
          ? props.setVideoshow(true)
          : props.setVideoshow(false);
        props.setCancel(true);
        props.setLogout(false);
        setLoading(false);
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

  useEffect(() => {
    var lastinput = document.getElementById("Contact-7-Password");
    lastinput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("login-button").click();
      }
    });
  }, []);

  useEffect(() => {
    var firstinput = document.getElementById("Contact-7-Email");
    firstinput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        inputReferenceEmail.current.focus();
      }
    });
  }, []);

  return (
    <SignInRoot id="SignInRoot">
      <div className="user-form">
        <div className="form-field-wrapper">
          <label htmlFor="Contact-7-Email" className="field-label">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            value={email}
            ref={inputReference}
            onChange={onChange}
            className="form-input w-input"
            maxLength="256"
            name="email"
            placeholder=""
            id="Contact-7-Email"
            required=""
          />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="Contact-7-Password" className="field-label">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            value={password}
            ref={inputReferenceEmail}
            onChange={onChange}
            className="form-input w-input"
            maxLength="256"
            name="password"
            placeholder=""
            id="Contact-7-Password"
            required=""
          />
        </div>
        <div className="button-layout">
          <input
            type="button"
            value="Login"
            data-wait="Please wait..."
            className="button w-button"
            onClick={doLogin}
            id="login-button"
          />
          <input
            type="button"
            value="Cancel"
            data-wait="Please wait..."
            className="button w-button"
            onClick={() => props.setCancel(true)}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          Need an account?{" "}
          <u
            onClick={() => props.setLogin(false)}
            style={{ cursor: "pointer" }}
          >
            Sign up.
          </u>
        </div>
      </div>
      {loading ? <Loading flag={true} /> : <div></div>}
    </SignInRoot>
  );
};

export default SignIn;

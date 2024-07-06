import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import api from "../../utils/api";
import Loading from "../../pages/Loading";

import { SignUpRoot } from "./SignUp.styled";

const SignUp = (props) => {
  const inputReferenceEmail = useRef(null);
  const inputReferencePass = useRef(null);
  const inputReferencePassConfirm = useRef(null);

  useEffect(() => {
    inputReferenceEmail.current.focus();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { email, password, confirmpassword } = formData;
  const [loading, setLoading] = useState(false);

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const doRegister = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || password === "" || confirmpassword === "") {
      Swal.fire("Oops!", "Please fill form correctly!", "error");
      return;
    }
    if (!re.test(email)) {
      Swal.fire("Oops!", "Invalid Email. Please type again!", "error");
      return;
    } else if (password !== confirmpassword) {
      Swal.fire("Oops!", "Confirm password is not correct!", "error");
      return;
    }
    setLoading(true);
    try {
      var res = await api.post("/register", { email, password });
      if (res.data.msg) {
        Swal.fire(res.data.savedUser.email, res.data.msg, "success");
        setFormData({ email: "", password: "", confirmpassword: "" });
        props.setLogin(true);
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
    var emailinput = document.getElementById("Contact-7-Email");
    emailinput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        inputReferencePass.current.focus();
      }
    });
  }, []);

  useEffect(() => {
    var passinput = document.getElementById("Contact-7-Password");
    passinput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        inputReferencePassConfirm.current.focus();
      }
    });
  }, []);

  useEffect(() => {
    var conpassinput = document.getElementById("Contact-7-Conpassword");
    conpassinput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("register-button").click();
      }
    });
  }, []);

  return (
    <SignUpRoot id="SignUpRoot">
      <div className="user-form">
        <div className="form-field-wrapper">
          <label htmlFor="Contact-7-Email" className="field-label">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            value={email}
            ref={inputReferenceEmail}
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
            ref={inputReferencePass}
            onChange={onChange}
            className="form-input w-input"
            maxLength="256"
            name="password"
            placeholder=""
            id="Contact-7-Password"
            required=""
          />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="Contact-7-Conpassword" className="field-label">
            Confirm Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            value={confirmpassword}
            ref={inputReferencePassConfirm}
            onChange={onChange}
            className="form-input w-input"
            maxLength="256"
            name="confirmpassword"
            placeholder=""
            id="Contact-7-Conpassword"
            required=""
          />
        </div>
        <div className="button-layout">
          <input
            type="button"
            value="Create Account"
            data-wait="Please wait..."
            className="button w-button"
            onClick={doRegister}
            id="register-button"
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
          Already have an account?{" "}
          <u onClick={() => props.setLogin(true)} style={{ cursor: "pointer" }}>
            Sign in.
          </u>
        </div>
      </div>
      {loading ? <Loading flag={true} /> : <div></div>}
    </SignUpRoot>
  );
};

export default SignUp;

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import api from "../../utils/api";
import jwt_decode from "jwt-decode";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// @import styles
import {
  WaitlistSubmitContainer,
  PagePadding,
  ContainerLarge,
  PaddingVertical,
  MainTextArea,
  TextLayout,
  TextTile,
  MainContent,
  LeftPannel,
  RightPannel,
} from "./waitlistsubmit.styled";
import { useCourseContext } from "../../contexts/CourseContext";

const WaitlistSubmitRoot = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { email, password, confirmpassword } = formData;
  const [otpisopen, setotpisopen] = useState(false);
  const [statecode, setstatecode] = useState("");
  const [otpcode, setotpcode] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [role, setRole] = useState(2);
  const { setToken } = useCourseContext();
  const toggleOpen = () => setotpisopen(!otpisopen);

  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token !== undefined) {
      var decoded = jwt_decode(localStorage.token);
      if (decoded) {
        setRole(0);
      } else {
        setRole(2);
      }
    }
  }, []);

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const doRegister = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || password === "" || confirmpassword === "") {
      swaSwal.firel("Oops!", "Please fill form correctly!", "error");
      return;
    }
    if (!re.test(email)) {
      Swal.fire("Oops!", "Invalid Email. Please type again!", "error");
      return;
    } else if (password !== confirmpassword) {
      Swal.fire("Oops!", "Confirm password is incorrect!", "error");
      return;
    }
    try {
      await api.post("/register", { email, password });
      toggleOpen();
      sendotp();
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
    }
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
    try {
      var res = await api.post("/login", { email, password });
      if (res.data.verifystatus) {
        localStorage.setItem("token", res.data.token);
        setToken(jwt_decode(res.data.token).balanceof);
        setRole(0);
        toggleOpen();
      } else {
        toggleOpen();
        sendotp();
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
    }
  };

  const doLogout = () => {
    localStorage.removeItem("token");
    setRole(2);
    setFormData("", "", "");
  };

  const getRandomString = (length) => {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*-=_+abcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };
  const sendotp = async () => {
    const code = getRandomString(8);
    setstatecode(code);
    // console.log(code)
    const res = await api.post("/sendemail", { email, code });
    if (res) {
      Swal.fire(
        "Notification!",
        "Verify Code Sent to your Gmail Account!",
        "info"
      );
      // setstatecode(code);
    } else {
      Swal.fire("Oops!", "Network Error", "error");
    }
  };
  const checkcode = async (data) => {
    setotpcode(data);
    try {
      if (data === statecode) {
        var res = await api.post("/verifysuccess", { email });
        if (res) {
          Swal.fire("Congratulations!", "Successfully Verified!", "success");
          setFormData("", "", "");
          setstatecode("");
          setotpcode("");
          toggleOpen();
          localStorage.removeItem("token");
        } else {
          Swal.fire("Oops!", "Network Error", "error");
        }
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
    }
  };
  return (
    <WaitlistSubmitContainer>
      <PagePadding>
        <ContainerLarge>
          <PaddingVertical>
            <MainTextArea>
              <TextLayout>
                <TextTile>
                  <div className="margin-bottom margin-xsmall">
                    <div className="tagline-wrapper">
                      <div className="tagline-component">
                        <div className="text-size-small text-weight-semibold text-style-allcaps">
                          WAITLIST
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="heading-xxlarge">Join Keemokazi Consulting</h1>
                </TextTile>
                <p className="text-size-medium">
                  Join the waiting list now to get exclusive access to the first
                  drop
                </p>
              </TextLayout>
            </MainTextArea>
            <MainContent>
              <LeftPannel>
                {role === 2 ? (
                  isLogin ? (
                    !otpisopen ? (
                      <div className="contact-1-form">
                        <div className="form-field-wrapper">
                          <label
                            htmlFor="Contact-7-Email"
                            className="field-label"
                          >
                            Email <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="email"
                            value={email}
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
                          <label
                            htmlFor="Contact-7-Password"
                            className="field-label"
                          >
                            Password <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="password"
                            value={password}
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
                            value="LOG IN"
                            data-wait="Please wait..."
                            className="button w-button"
                            onClick={doLogin}
                          />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          Need an account?{" "}
                          <u
                            onClick={() => setLogin(!isLogin)}
                            style={{ cursor: "pointer" }}
                          >
                            Sign up.
                          </u>
                        </div>
                      </div>
                    ) : (
                      <div className="contact-1-form">
                        <div className="form-field-wrapper">
                          <label
                            htmlFor="Contact-7-Email"
                            className="field-label"
                          >
                            Verify Code <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={otpcode}
                            onChange={(e) => checkcode(e.target.value)}
                            className="form-input w-input"
                            maxLength="256"
                            name="email"
                            placeholder=""
                            id="Contact-7-Email"
                            required=""
                          />
                        </div>
                        <div className="button-layout">
                          <input
                            type="button"
                            value="Resend Email"
                            data-wait="Please wait..."
                            className="button w-button"
                            onClick={sendotp}
                          />
                        </div>
                      </div>
                    )
                  ) : !otpisopen ? (
                    <div className="contact-1-form">
                      <div className="form-field-wrapper">
                        <label
                          htmlFor="Contact-7-Email"
                          className="field-label"
                        >
                          Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
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
                        <label
                          htmlFor="Contact-7-Password"
                          className="field-label"
                        >
                          Password <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="password"
                          value={password}
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
                        <label
                          htmlFor="Contact-7-Conpassword"
                          className="field-label"
                        >
                          Confirm Password{" "}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="password"
                          value={confirmpassword}
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
                          value="CREATE ACCOUNT"
                          data-wait="Please wait..."
                          className="button w-button"
                          onClick={doRegister}
                        />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        Already have an account?{" "}
                        <u
                          onClick={() => setLogin(!isLogin)}
                          style={{ cursor: "pointer" }}
                        >
                          Sign in.
                        </u>
                      </div>
                    </div>
                  ) : (
                    <div className="contact-1-form">
                      <div className="form-field-wrapper">
                        <label
                          htmlFor="Contact-7-Email"
                          className="field-label"
                        >
                          Verify Code <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          value={otpcode}
                          onChange={(e) => checkcode(e.target.value)}
                          className="form-input w-input"
                          maxLength="256"
                          name="email"
                          placeholder=""
                          id="Contact-7-Email"
                          required=""
                        />
                      </div>
                      <div className="button-layout">
                        <input
                          type="button"
                          value="RESEMD EMAIL"
                          data-wait="Please wait..."
                          className="button w-button"
                          onClick={sendotp}
                        />
                      </div>
                    </div>
                  )
                ) : (
                  <div className="contact-1-form">
                    <div style={{ textAlign: "center", fontSize: "25px" }}>
                      {localStorage.token
                        ? jwt_decode(localStorage.token).email
                        : setRole(2)}
                    </div>
                    <div className="button-layout">
                      <input
                        type="button"
                        value="LOG OUT"
                        data-wait="Please wait..."
                        className="button w-button"
                        onClick={doLogout}
                      />
                    </div>
                  </div>
                )}
                <div className="margin-top-1 margin-large">
                  <div className="margin-bottom margin-xsmall">
                    <h2 className="heading-small">Join our community</h2>
                  </div>
                  <div className="button-row">
                    <div className="button-wrapper icon-only">
                      <a
                        href="https://discord.gg/hadBjCbaUG"
                        rel="noreferrer"
                        target="_blank"
                        className="button-secondary icon-only w-inline-block"
                      >
                        <img
                          draggable="false"
                          src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc96b2e86505_Story%20Discord.svg"
                          alt=""
                          className="icon-1x1-xxsmall"
                        />
                      </a>
                    </div>
                    <div className="button-wrapper icon-only">
                      <a
                        href="https://opensea.io/collection/keemokazi-tiktok-course"
                        rel="noreferrer"
                        target="_blank"
                        className="button-secondary icon-only w-inline-block"
                      >
                        <img
                          draggable="false"
                          src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc1a82e86527_Story%20Opensea.svg"
                          alt=""
                          className="icon-1x1-xxsmall"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </LeftPannel>
              <RightPannel>
                <img
                  draggable="false"
                  className="contact-1-image"
                  src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269069807e6560ce1db5ba9_PhotoRoom_20220427_110203%20AM.png"
                  alt=""
                />
              </RightPannel>
            </MainContent>
          </PaddingVertical>
        </ContainerLarge>
      </PagePadding>
    </WaitlistSubmitContainer>
  );
};

export default WaitlistSubmitRoot;

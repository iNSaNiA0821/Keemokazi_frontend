import React, { useState } from "react";

import Header from "./Header";
import Ourstory1 from "./Ourstory1";
import Ourstory2 from "./Ourstory2";
import Stats from "./Stats";
import MoveCollection from "./MoveCollection";
import Preview from "./Preview";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Faqs from "./Faqs";
import Navbar from "./Navbar";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import CourseMethod from "../../components/Course";
import SubscriptionMethod from "../../components/Subscription";

// @import styles
import { LandingMainContainer } from "./landingmain.styled";

const LandingMain = (props) => {
  const [isLogout, setLogout] = useState(localStorage.token ? false : true);
  const [isVideoshow, setVideoshow] = useState(
    localStorage.videoshow ? true : false
  );
  const [isLogin, setLogin] = useState(true);
  const [isCancel, setCancel] = useState(true);
  const [isPayment, setPayment] = useState(true);
  const [isPayCancel, setPayCancel] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  const doLogout = () => {
    setLogout(true);
    setVideoshow(false);
    setPayCancel(true);
    setCancel(true);
    setIsOpened(false);
    localStorage.removeItem("token");
    localStorage.removeItem("videoshow");
    localStorage.removeItem("balanceof");
  };

  return (
    <LandingMainContainer>
      <Navbar
        setIsOpened={setIsOpened}
        isOpened={isOpened}
        doLogout={doLogout}
        isLogout={isLogout}
        setLogin={setLogin}
        setCancel={setCancel}
        setPayCancel={setPayCancel}
        setPayment={setPayment}
      />
      <Header
        setIsOpened={setIsOpened}
        isOpened={isOpened}
        doLogout={doLogout}
        isLogout={isLogout}
        setLogin={setLogin}
        setCancel={setCancel}
        setPayCancel={setPayCancel}
        setPayment={setPayment}
      />
      <Faqs
        setPayment={setPayment}
        setPayCancel={setPayCancel}
        setIsOpened={setIsOpened}
        setCancel={setCancel}
      />
      <Ourstory1 />
      <Ourstory2 />
      <Stats />
      <MoveCollection />
      <Preview isVideoshow={isVideoshow} />
      <Roadmap />
      <Team />
      {isCancel ? (
        ""
      ) : isLogin ? (
        <SignIn
          setLogin={setLogin}
          setLogout={setLogout}
          setCancel={setCancel}
          setVideoshow={setVideoshow}
        />
      ) : (
        <SignUp
          setLogin={setLogin}
          setLogout={setLogout}
          setCancel={setCancel}
        />
      )}
      {isPayCancel ? (
        ""
      ) : isPayment ? (
        <SubscriptionMethod
          setIsOpened={setIsOpened}
          isOpened={isOpened}
          isVideoshow={isVideoshow}
          setPayCancel={setPayCancel}
          setCancel={setCancel}
          setPayment={setPayment}
          setCalendar={props.setCalendar}
        />
      ) : (
        <CourseMethod setPayCancel={setPayCancel} setVideoshow={setVideoshow} />
      )}
    </LandingMainContainer>
  );
};

export default LandingMain;

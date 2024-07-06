import React, { useState } from "react";

// import JoinOurWaitlist from "../JoinWaitlist";
import LandingMain from "../LandingMain";
import Footer from "../Footer";
import Calendar from "../../components/Calendar";

// @import styles
import {
  Keemokazi
} from "./main.styled";

const Main = () => {
  const [calendar, setCalendar] = useState(false);

  return (
    calendar ? <Calendar setCalendar={setCalendar} /> : (
      <Keemokazi>
        {/* <JoinOurWaitlist /> */}
        <LandingMain setCalendar={setCalendar} />
        <Footer />
      </Keemokazi>
    )
  );
};

export default Main;

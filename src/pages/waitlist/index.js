import React from "react";

import JoinOurWaitlist from "../JoinWaitlist";
import Navbar from "../Navbar";
import WaitlistSubmit from "../WaitlistSubmit";
import WaitlistFaqs from "../WaitlistFaqs";
import Footer from "../Footer";

// @import styles
import {
    WaitlistContainer
} from "./waitlist.styled";

const Waitlist = () => {
    return (
        <WaitlistContainer>
            <JoinOurWaitlist />
            <Navbar />
            <WaitlistSubmit />
            <WaitlistFaqs />
            <Footer />
        </WaitlistContainer>
    );
};

export default Waitlist;

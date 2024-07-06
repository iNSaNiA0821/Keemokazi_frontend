import React from "react";

import NFTCollection from "./NFTCollection";
import RealFooter from "./RealFooter";

// @import styles
import {
    FooterContainer
} from "./footer.styled";

const FooterMain = () => {
    return (
        <FooterContainer>
            <NFTCollection />
            <RealFooter />
        </FooterContainer>
    );
};

export default FooterMain;

import React from "react";

// @import styles
import {
    HeadContainer,
    PagePadding,
    ContainerLarge,
    PaddingVertical,
    Layout,
    LeftPannel,
    RightPannel,
} from "./header.styled";
import OurNFT from "../../../assets/Keemokazi.png";

const Header = (props) => {
    const signup = () => {
        props.setLogin(false);
        props.setCancel(false);
        props.setPayCancel(true);
        props.setIsOpened(false);
    }
    const signin = () => {
        props.setLogin(true);
        props.setCancel(false);
        props.setPayCancel(true);
        props.setIsOpened(false);
    }
    const course = () => {
        props.setPayment(false);
        props.setPayCancel(false);
        props.setCancel(true);
        props.setIsOpened(false);
    }
    return (
        <HeadContainer id="LandingHeader">
            <PagePadding>
                <ContainerLarge>
                    <PaddingVertical>
                        {/* <FlipCountdown
                            titlePosition='bottom'
                            hideYear
                            hideMonth
                            size='medium' // Options (Default: medium): large, medium, small, extra-small.
                            endAt={'2022-07-24T16:00:00-04:00'} // Date/Time
                        /> */}
                        <Layout>
                            <LeftPannel>
                                <div className="margin-bottom margin-xsmall">
                                    <div className="tagline-wrapper">
                                        <div className="tagline-component" onClick={course} style={{cursor:"pointer"}}>
                                            <div className="text-size-small text-weight-semibold text-style-allcaps">Buy Now</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <h1 className="heading-xxlarge">Keemokazi</h1>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <p className="text-size-large">
                                        It's a project like no other. Knowledge, art and a huge community. An NFT combines all this with our social media course. Insights from the front row, from and with Keemokazi. Maybe you'll be the next to shoot a video with Keemo.
                                        <br /><br />
                                        <span className="text-span">
                                            <em>powered by NFT&nbsp;Legends</em>
                                        </span>
                                        <br /><br />
                                        {!props.isLogout ? "" : <span className="button-user-form" onClick={signin}>Sign in</span>}
                                        {!props.isLogout ? "" : <span className="button-user-form second" onClick={signup}>Sign up</span>}
                                    </p>
                                </div>
                            </LeftPannel>
                            <RightPannel>
                                <img draggable="false" src={OurNFT} width="540" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 540px, 46vw" alt="" className="header-1-image"></img>
                            </RightPannel>
                        </Layout>
                    </PaddingVertical>
                </ContainerLarge>
            </PagePadding>
        </HeadContainer>
    );
};

export default Header;

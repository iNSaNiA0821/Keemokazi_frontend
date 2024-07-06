import React from "react";

// @import styles
import {
    StatContainer,
    IllustrationWrapper,
    MainPannel,
    PagePadding,
    ContainerSmall,
    FullTextPannel,
    EachTextPannel,
    ContainerMedium,
    FullServicePannel,
    ServiceCard,
    EllipseBottom,
    Tiers
} from "./faqs.styled";

const SubscriptionMainRoot = (props) => {
    const subscription = () => {
        props.setPayment(true);
        props.setPayCancel(false);
        props.setCancel(true);
        props.setIsOpened(false);
    }
    return (
        <StatContainer id="Stats">
            {/* <IllustrationWrapper>
                <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
            </IllustrationWrapper>
            <EllipseTop></EllipseTop> */}
            <MainPannel>
                <PagePadding>
                    <ContainerSmall>
                        <FullTextPannel>
                            <EachTextPannel>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-xsmall"
                                >
                                    <div className="tagline-wrapper">
                                        <div className="tagline-component">
                                            <div className="text-size-small text-weight-semibold text-style-allcaps" onClick={subscription}>
                                                subscription
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <h2 className="heading-xlarge">What's Included</h2>
                                </div>
                                {/* <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <p className="text-size-medium">Facts and figures that really matter.</p>
                                </div> */}
                            </EachTextPannel>
                        </FullTextPannel>
                    </ContainerSmall>
                </PagePadding>
            </MainPannel>
            <Tiers>
                <PagePadding>
                    <ContainerMedium>
                        <FullServicePannel
                            data-aos="fade-up"
                            data-aos-duration={"1000"}
                            className="aos-init aos-animate"
                        >
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey" style={{ fontSize: "20px", fontWeight: "bold" }}>
                                        1 on 1 coaching
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black" style={{ fontSize: "15px" }}>Book a 30 minute zoom call with Keemokazi and ask for advice an how to grow your personal TikTok account</div>
                                    </div>
                                </div>
                            </ServiceCard>
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey" style={{ fontSize: "20px", fontWeight: "bold" }}>
                                        Exclusive content
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black" style={{ fontSize: "15px" }}>Get added to Keemokazi's close friends story on Instagram and a follow back as well</div>
                                    </div>
                                </div>
                            </ServiceCard>
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey" style={{ fontSize: "20px", fontWeight: "bold" }}>
                                        Giveaways
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black" style={{ fontSize: "15px" }}>Enjoy monthly giveaways (iPhone, cash prizes, customized videos from Keemokazi and his family, etc)</div>
                                    </div>
                                </div>
                            </ServiceCard>
                        </FullServicePannel>
                    </ContainerMedium>
                </PagePadding>
            </Tiers>
            <EllipseBottom></EllipseBottom>
            <IllustrationWrapper>
                <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
            </IllustrationWrapper>
        </StatContainer >
    );
};

export default SubscriptionMainRoot;

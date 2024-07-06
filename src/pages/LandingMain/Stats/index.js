import React from "react";

// @import styles
import {
    StatContainer,
    IllustrationWrapper,
    EllipseTop,
    MainPannel,
    PagePadding,
    ContainerSmall,
    FullTextPannel,
    EachTextPannel,
    ContainerMedium,
    FullServicePannel,
    ServiceCard,
    EllipseBottom,
    // Tiers
} from "./stat.styled";

const StatRoot = () => {
    return (
        <StatContainer id="Stats">
            <IllustrationWrapper>
                <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
            </IllustrationWrapper>
            <EllipseTop></EllipseTop>
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
                                            <div className="text-size-small text-weight-semibold text-style-allcaps">
                                                stats
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <h2 className="heading-xlarge">We Got the Stats</h2>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <p className="text-size-medium">Facts and figures that really matter.</p>
                                </div>
                            </EachTextPannel>
                        </FullTextPannel>
                    </ContainerSmall>
                    <ContainerMedium>
                        <FullServicePannel
                            data-aos="fade-up"
                            data-aos-duration={"1000"}
                            className="aos-init aos-animate"
                        >
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey">
                                        Total Likes
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black">1.4B+</div>
                                    </div>
                                    <div className="text-style-allcaps">
                                        <div className="text-size-small text-color-turquoise text-weight-semibold">on TikTok</div>
                                    </div>
                                </div>
                            </ServiceCard>
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey">
                                        Overall
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black">100%</div>
                                    </div>
                                    <div className="text-style-allcaps">
                                        <div className="text-size-small text-color-turquoise text-weight-semibold">Secured and trusted</div>
                                    </div>
                                </div>
                            </ServiceCard>
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey">
                                        Community
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black">30M+</div>
                                    </div>
                                    <div className="text-style-allcaps">
                                        <div className="text-size-small text-color-turquoise text-weight-semibold">Users across plattforms</div>
                                    </div>
                                </div>
                            </ServiceCard>
                        </FullServicePannel>
                    </ContainerMedium>
                </PagePadding>
            </MainPannel>
            {/* <Tiers>
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
                                            <div className="text-size-small text-weight-semibold text-style-allcaps">
                                                perks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <h2 className="heading-xlarge">Tiers</h2>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <p className="text-size-medium">Buy more NFTs to get exclusive perks.</p>
                                </div>
                            </EachTextPannel>
                        </FullTextPannel>
                    </ContainerSmall>
                    <ContainerMedium>
                        <FullServicePannel
                            data-aos="fade-up"
                            data-aos-duration={"1000"}
                            className="aos-init aos-animate"
                        >
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey" style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        1 NFT
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black" style={{ fontSize: "18px" }}>Gets you access to NFT course and learn how to become an influencer</div>
                                    </div>
                                </div>
                            </ServiceCard>
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey" style={{ color: "silver", fontSize: "18px", fontWeight: "bold" }}>
                                        2 NFTs
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black" style={{ fontSize: "18px" }}>NFTs get you entered into raffle for content house event</div>
                                    </div>
                                </div>
                            </ServiceCard>
                            <ServiceCard>
                                <div className="text-align-center">
                                    <div className="text-size-regular-1 text-color-darkgrey" style={{ color: "gold", fontSize: "18px", fontWeight: "bold" }}>
                                        3 NFTs
                                    </div>
                                    <div className="padding-vertical padding-xxsmall">
                                        <div className="heading-medium text-color-black" style={{ fontSize: "18px" }}>Automatically gain access to content house event</div>
                                    </div>
                                </div>
                            </ServiceCard>
                        </FullServicePannel>
                    </ContainerMedium>
                </PagePadding>
            </Tiers> */}
            <EllipseBottom></EllipseBottom>
            <IllustrationWrapper>
                <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
            </IllustrationWrapper>
        </StatContainer >
    );
};

export default StatRoot;

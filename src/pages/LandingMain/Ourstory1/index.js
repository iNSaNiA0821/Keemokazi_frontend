import React from "react";

// @import styles
import {
    OurstoryContainer1,
    PagePadding,
    ContainerSmall,
    PaddingVertical,
    StoryTitle,
} from "./ourstroy1.styled";

const Ourstory1Root = () => {
    return (
        <OurstoryContainer1 id="Ourstory">
            <PagePadding>
                <ContainerSmall>
                    <PaddingVertical>
                        <StoryTitle>
                            <div
                                data-aos="fade-up"
                                data-aos-duration={"500"}
                                className="aos-init aos-animate margin-bottom margin-xsmall"
                            >
                                <div className="tagline-wrapper">
                                    <div className="tagline-component">
                                        <div className="text-size-small text-weight-semibold text-style-allcaps">
                                            OUR STORY
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration={"500"}
                                className="aos-init aos-animate margin-bottom margin-small"
                            >
                                <h2 className="heading-xlarge">
                                    Knowledge and Art Combined in one NFT
                                </h2>
                            </div>
                            <div
                                className="aos-init aos-animate margin-bottom margin-small"
                                data-aos="fade-up"
                                data-aos-duration={"1000"}
                            >
                                <p className="text-size-medium">
                                    The current possibilities through technical progress have given us the opportunity to create something unique. This one of a kind social media course is only accessible by holding the Keemokazi NFT. Holders of this NFT will receive perks such as access to exclusive behind the scenes videos and the ability to shoot content with Keemo!
                                </p>
                            </div>
                            <div className="button-row">
                                <div
                                    className="aos-init aos-animate button-wrapper icon-only"
                                    data-aos="fade-up"
                                    data-aos-duration={"500"}
                                >
                                    <a href="https://discord.gg/hadBjCbaUG" className="button-secondary icon-only w-inline-block" target="_blank" rel="noreferrer">
                                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc96b2e86505_Story%20Discord.svg" alt="" className="icon-1x1-xxsmall" />
                                    </a>
                                </div>
                                <div
                                    className="aos-init aos-animate button-wrapper icon-only"
                                    data-aos="fade-up"
                                    data-aos-duration={"500"}
                                    data-aos-delay="250"
                                >
                                    <a href="https://opensea.io/collection/keemokazi-tiktok-course" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block">
                                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc1a82e86527_Story%20Opensea.svg" alt="" className="icon-1x1-xxsmall" />
                                    </a>
                                </div>
                                {/* <div
                                    className="aos-init aos-animate button-wrapper icon-only"
                                    data-aos="fade-up"
                                    data-aos-duration={"500"}
                                    data-aos-delay="500"
                                >
                                    <a href="https://twitter.com/" className="button-secondary icon-only w-inline-block">
                                        <img draggable="false"  src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc7750e86509_Story%20Twitter.svg"  alt="" className="icon-1x1-xxsmall" />
                                    </a>
                                </div> */}
                            </div>
                        </StoryTitle>
                    </PaddingVertical>
                </ContainerSmall>
            </PagePadding>
        </OurstoryContainer1>
    );
};

export default Ourstory1Root;

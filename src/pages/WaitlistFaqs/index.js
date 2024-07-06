import React from "react";

// @import styles
import {
    WaitlistFaqsContainer,
    PagePadding,
    IllustrationWrapper,
    EllipseTop,
    ContainerLarge,
    PaddingVertical,
    Layout,
    PaddingVerticalFaq,
    FaqLayout,
    LeftPannel,
    RightPannel,
    FaqItem,
    EllipseBottom
} from "./waitlistfaqs.styled";

const WaitlistFaqsRoot = () => {
    return (
        <WaitlistFaqsContainer>
            <PagePadding>
                <IllustrationWrapper>
                    <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
                </IllustrationWrapper>
                <EllipseTop></EllipseTop>
                <ContainerLarge>
                    <PaddingVertical> {/* PagePadding */}
                        <Layout> {/* ContainerLarge */}
                            <PaddingVerticalFaq> {/* PaddingVertical */}
                                <FaqLayout>
                                    <LeftPannel>
                                        <div
                                            data-aos="fade-up"
                                            data-aos-duration={"500"}
                                            className="aos-init aos-animate margin-bottom margin-xsmall"
                                        >
                                            <div className="tagline-wrapper">
                                                <div className="tagline-component">
                                                    <div className="text-size-small text-weight-semibold text-style-allcaps">FAQS</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-aos="fade-up"
                                            data-aos-duration={"500"}
                                            className="aos-init aos-animate margin-bottom margin-small"
                                        >
                                            <h1 className="heading-xlarge">FAQs</h1>
                                        </div>
                                        <div
                                            data-aos="fade-up"
                                            data-aos-duration={"500"}
                                            className="aos-init aos-animate margin-bottom margin-small"
                                        >
                                            <p className="text-size-medium">
                                                Since transparency is very important to us, we have listed our most frequently asked questions. If you have any further questions, please feel free to contact us!
                                            </p>
                                        </div>
                                    </LeftPannel>
                                    <RightPannel
                                        data-aos="fade-up"
                                        data-aos-duration={"500"}
                                        data-aos-delay="500"
                                        className="aos-init aos-animate"
                                    >
                                        <FaqItem>
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="text-size-medium text-weight-bold">
                                                    <strong>Why Keemokazi SMC?</strong>
                                                </div>
                                            </div>
                                            <p className="text-size-regular-1">We found the idea of combining art and knowledge simply unique. We would like to offer people the opportunity to continuously educate themselves and become part of one of the largest NFT projects. So we become a community that faces each other on an equal footing and everyone benefits from the next.</p>
                                        </FaqItem>
                                        <FaqItem>
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="text-size-medium text-weight-bold">
                                                    <strong>Who is behind the Keemokazi SMC?</strong>
                                                </div>
                                            </div>
                                            <p className="text-size-regular-1">Behind this course, the people exclusively Keemokazi itself and the team of Legend Nft's have joined forces. This is how a unique project was created out of excellent expertise and affinity.<br /></p>
                                        </FaqItem>
                                        <FaqItem>
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="text-size-medium text-weight-bold">
                                                    <strong>How to mint/purchase my NFT?</strong>
                                                </div>
                                            </div>
                                            <p className="text-size-regular-1">Quite simply through our website, even without having knowledge in the field of Nft's it is possible, because we want to keep this process as simple as possible.<br /></p>
                                        </FaqItem>
                                        <FaqItem>
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="text-size-medium text-weight-bold">What’s an NFT?</div>
                                            </div>
                                            <p className="text-size-regular-1">NFT stands for "non-fungible token." At a basic level, an NFT is a digital asset that links ownership to unique physical or digital items, such as works of art, real estate, music, or videos.<br /></p>
                                        </FaqItem>
                                        <FaqItem>
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="text-size-medium text-weight-bold">
                                                    <strong>How can I obtain whitelist spot?</strong>
                                                </div>
                                            </div>
                                            <p className="text-size-regular-1">One thing is important to us. To offer everyone the same opportunity. Therefore, it is possible for everyone to secure a place on the waiting list, but since these must be limited, it is worth being quick.</p>
                                        </FaqItem>
                                    </RightPannel>
                                </FaqLayout>
                            </PaddingVerticalFaq>
                        </Layout>
                    </PaddingVertical>
                </ContainerLarge>
                <EllipseBottom></EllipseBottom>
                <IllustrationWrapper>
                    <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
                </IllustrationWrapper>
            </PagePadding>
        </WaitlistFaqsContainer>
    );
};

export default WaitlistFaqsRoot;

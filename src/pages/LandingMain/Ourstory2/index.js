import React from "react";
import Into from "../../../assets/Into.png";

// @import styles
import {
    OurstoryContainer2,
    PagePadding,
    ContainerLarge,
    PaddingVertical,
    Layout,
    LeftPannel,
    RightPannel
} from "./ourstroy2.styled";

const Ourstory2Root = () => {
    return (
        <OurstoryContainer2 id="Ourstory2">
            <PagePadding>
                <ContainerLarge>
                    <PaddingVertical>
                        <Layout>
                            <LeftPannel>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"500"}
                                    className="aos-init aos-animate margin-bottom margin-xsmall"
                                >
                                    <div className="tagline-wrapper">
                                        <div className="tagline-component">
                                            <div className="text-size-small text-weight-semibold text-style-allcaps">OUR STORY</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"500"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <h1 className="heading-xlarge">Into Keemokazi</h1>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"500"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <p className="text-size-medium">
                                        Keemokazi is just as unique as his success. In a very short time he has become one of the biggest media personalities in America. With his charismatic and genuine personality, he inspires millions of people every day with his videos, music, and his mindset.
                                    </p>
                                </div>
                            </LeftPannel>
                            <RightPannel
                                data-aos="fade-up"
                                data-aos-duration={"500"}
                                className="aos-init aos-animate"
                            >
                                <img draggable="false" className="home-1-feature-image is-split-right" src={Into} width="779.5" alt="" />
                            </RightPannel>
                        </Layout>
                    </PaddingVertical>
                </ContainerLarge>
            </PagePadding>

        </OurstoryContainer2>
    );
};

export default Ourstory2Root;

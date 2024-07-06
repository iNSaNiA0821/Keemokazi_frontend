import React from "react";

// @import styles
import {
    RoadmapContainer,
    PagePadding,
    ContainerSmall,
    PaddingVertical,
    FullTextArea,
    EachTextArea,
    RoadmapTimeline,
    EachRoadmap,
    RoadmapCard,
    TextArea,
    CorrectText,
    HeaderTimeline,
    Empty,
    CommonTimeline
} from "./roadmap.styled";

const RoadmapRoot = () => {
    return (
        <RoadmapContainer id="Roadmap">
            <PagePadding>
                <ContainerSmall>
                    <PaddingVertical>
                        <FullTextArea>
                            <EachTextArea>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-xsmall"
                                >
                                    <div className="tagline-wrapper">
                                        <div className="tagline-component">
                                            <div className="text-size-small text-weight-semibold text-style-allcaps">Roadmap</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <h2 className="heading-xlarge">Keemokazi Consulting</h2>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <p className="text-size-medium">When does what happen? Our goal is to be transparent at all times so that everyone has the same overview.</p>
                                </div>
                            </EachTextArea>
                        </FullTextArea>
                        <RoadmapTimeline>
                            <EachRoadmap>
                                <RoadmapCard
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate"
                                >
                                    <TextArea>
                                        <CorrectText>
                                            <div className="margin-bottom margin-xxsmall">
                                                <div className="text-size-small text-color-turquoise">Q2 2022</div>
                                            </div>
                                            <div className="margin-bottom margin-xxsmall">
                                                <h3 className="heading-xsmall">Waitlist release</h3>
                                            </div>
                                            <p className="text-size-regular-1">Opening our waiting list to get exclusive access.</p>
                                        </CorrectText>
                                    </TextArea>
                                    <HeaderTimeline>
                                        <div className="layout-121-timeline-icon-wrapper">
                                            <div className="icon-1x1-small">api</div>
                                        </div>
                                        <div className="layout-121-progress-bar"></div>
                                    </HeaderTimeline>
                                    <Empty></Empty>
                                </RoadmapCard>
                                <RoadmapCard
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate"
                                >
                                    <Empty></Empty>
                                    <HeaderTimeline>
                                        <div className="layout-121-timeline-icon-wrapper">
                                            <div className="icon-1x1-small">api</div>
                                        </div>
                                        <div className="layout-121-progress-bar"></div>
                                    </HeaderTimeline>
                                    <TextArea>
                                        <CorrectText>
                                            <div className="margin-bottom margin-xxsmall">
                                                <div className="text-size-small text-color-turquoise">Q2 2022</div>
                                            </div>
                                            <div className="margin-bottom margin-xxsmall">
                                                <h3 className="heading-xsmall">Whitelist Live</h3>
                                            </div>
                                            <p className="text-size-regular-1">The members who have signed up on the waitlist will now get a Whitelist spot.</p>
                                        </CorrectText>
                                    </TextArea>
                                </RoadmapCard>
                                <RoadmapCard
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate"
                                >
                                    <TextArea>
                                        <CorrectText>
                                            <div className="margin-bottom margin-xxsmall">
                                                <div className="text-size-small text-color-turquoise">Q3 2022</div>
                                            </div>
                                            <div className="margin-bottom margin-xxsmall">
                                                <h3 className="heading-xsmall">NFT Minting</h3>
                                            </div>
                                            <p className="text-size-regular-1">The NFT is now ready for minting and the social media course is accessible to all NFT holders.</p>
                                        </CorrectText>
                                    </TextArea>
                                    <CommonTimeline>
                                        <div className="layout-121-timeline-icon-wrapper-copy">
                                            <div className="icon-1x1-small">api</div>
                                        </div>
                                        <div className="layout-121-progress-bar-copy"></div>
                                    </CommonTimeline>
                                    <Empty></Empty>
                                </RoadmapCard>
                                <RoadmapCard
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate"
                                >
                                    <Empty></Empty>
                                    <CommonTimeline>
                                        <div className="layout-121-timeline-icon-wrapper-copy">
                                            <div className="icon-1x1-small">api</div>
                                        </div>
                                        <div className="layout-121-progress-bar-copy"></div>
                                    </CommonTimeline>
                                    <TextArea>
                                        <CorrectText>
                                            <div className="margin-bottom margin-xxsmall">
                                                <div className="text-size-small text-color-turquoise">Q3 2022</div>
                                            </div>
                                            <div className="margin-bottom margin-xxsmall">
                                                <h3 className="heading-xsmall">Exclusive Events</h3>
                                            </div>
                                            <p className="text-size-regular-1">Invitation to exclusive events for drawn members of the community</p>
                                        </CorrectText>
                                    </TextArea>
                                </RoadmapCard>
                                <RoadmapCard
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate"
                                >
                                    <TextArea>
                                        <CorrectText>
                                            <div className="margin-bottom margin-xxsmall">
                                                <div className="text-size-small text-color-turquoise">Q4 2022</div>
                                            </div>
                                            <div className="margin-bottom margin-xxsmall">
                                                <h3 className="heading-xsmall">Coming soon</h3>
                                            </div>
                                            <p className="text-size-regular-1">Opportunity to shoot videos and participate with Keemo in the content house event.</p>
                                        </CorrectText>
                                    </TextArea>
                                    <CommonTimeline>
                                        <div className="layout-121-timeline-icon-wrapper-copy">
                                            <div className="icon-1x1-small">api</div>
                                        </div>
                                    </CommonTimeline>
                                    <Empty></Empty>
                                </RoadmapCard>
                            </EachRoadmap>
                        </RoadmapTimeline>
                    </PaddingVertical>
                </ContainerSmall>
            </PagePadding>
        </RoadmapContainer>
    );
};

export default RoadmapRoot;

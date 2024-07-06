import React from "react";

// @import styles
import {
    TeamContainer,
    IllustrationWrapper,
    PagePadding,
    ContainerSmall,
    FullTextArea,
    EachTextArea,
    EllipseTop,
    EllipseBottom,
    MainPannel,
    ContainerLarge,
    EachTeam,
    TeamMember,
    TeamMemberPhoto,
    TeamMemberInfo,
    TeamMemberSocial
} from "./team.styled";

const TeamRoot = () => {
    return (
        <TeamContainer id="Team">
            <IllustrationWrapper>
                <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
            </IllustrationWrapper>
            <EllipseTop />
            <MainPannel>
                <PagePadding>
                    <ContainerSmall>
                        <FullTextArea>
                            <EachTextArea>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-xsmall"
                                >
                                    <div className="tagline-wrapper">
                                        <div className="tagline-component">
                                            <div className="text-size-small text-weight-semibold text-style-allcaps">Meet the Team</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <h2 className="heading-xlarge">Who we are</h2>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration={"1000"}
                                    className="aos-init aos-animate margin-bottom margin-small"
                                >
                                    <p className="text-size-medium">A little insight, behind the people who made the Keemokazi Tiktok Course to that what it is.</p>
                                </div>
                            </EachTextArea>
                        </FullTextArea>
                    </ContainerSmall>
                    <ContainerLarge>
                        <EachTeam
                            data-aos="fade-up"
                            data-aos-duration={"1000"}
                            className="aos-init aos-animate"
                        >
                            <TeamMember>
                                <TeamMemberPhoto>
                                    <div className="team-member-wrapper">
                                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268fb747126fc3432e8bc8e_PhotoRoom_20220427_101411%20AM.png" sizes="(max-width: 767px) 96px, 128px" alt="" className="team-member-image" />
                                    </div>
                                </TeamMemberPhoto>
                                <TeamMemberInfo>
                                    <div className="text-size-large text-weight-semibold">Keemokazi</div>
                                    <div className="text-size-medium">Artist / Philanthropist</div>
                                </TeamMemberInfo>
                                <TeamMemberSocial>
                                    <a href="https://www.tiktok.com/@keemokazi" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6282186d2df097a0084780b7_1946538.png" width="12" sizes="24px" alt="" className="icon-1x1-xsmall" /></a>
                                    <a href="https://www.instagram.com/keemokazi/" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/628218c87980b611309aa82b_87390.png" width="12" alt="" className="icon-1x1-xsmall" /></a>
                                </TeamMemberSocial>
                            </TeamMember>
                            <TeamMember>
                                <TeamMemberPhoto>
                                    <div className="team-member-wrapper"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268f186b81d4deda5a24cf2_45cfb7a0-b9b6-410b-93af-3910a490234a.JPG" sizes="(max-width: 767px) 96px, 128px" alt="" className="team-member-image" /></div>
                                </TeamMemberPhoto>
                                <TeamMemberInfo>
                                    <div className="text-size-large text-weight-semibold">NFT Legends</div>
                                    <div className="text-size-medium">Publisher / NFT Experts</div>
                                </TeamMemberInfo>
                                <TeamMemberSocial>
                                    <a href="https://www.instagram.com/legend.nfts/" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/628218c87980b611309aa82b_87390.png" width="12" alt="" className="icon-1x1-xsmall" /></a>
                                    <a href="https://www.thelegendnfts.io/" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6282194e1c9a9c45a3ddb7a6_website-icon-png-black-0.png" width="12" sizes="24px" alt="" className="icon-1x1-xsmall" /></a>
                                </TeamMemberSocial>
                            </TeamMember>
                            <TeamMember>
                                <TeamMemberPhoto>
                                    <div className="team-member-wrapper"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/628218190dd2d12bcef3f5b5_Transparent%20black.png" sizes="(max-width: 767px) 96px, 128px" alt="" className="team-member-image" /></div>
                                </TeamMemberPhoto>
                                <TeamMemberInfo>
                                    <div className="text-size-large text-weight-semibold">Project P</div>
                                    <div className="text-size-medium">Design & Content</div>
                                </TeamMemberInfo>
                                <TeamMemberSocial>
                                    <a href="https://www.instagram.com/legend.nfts/" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/628218c87980b611309aa82b_87390.png" width="12" alt="" className="icon-1x1-xsmall" /></a>
                                    <a href="https://www.thelegendnfts.io/" target="_blank" rel="noreferrer" className="button-secondary icon-only w-inline-block"><img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6282194e1c9a9c45a3ddb7a6_website-icon-png-black-0.png" width="12" sizes="24px" alt="" className="icon-1x1-xsmall" /></a>
                                </TeamMemberSocial>
                            </TeamMember>
                        </EachTeam>
                    </ContainerLarge>
                </PagePadding>
            </MainPannel>
            <EllipseBottom />
            <IllustrationWrapper>
                <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg" alt="" className="illustration-flower-bottom" />
            </IllustrationWrapper>
        </TeamContainer>
    );
};

export default TeamRoot;

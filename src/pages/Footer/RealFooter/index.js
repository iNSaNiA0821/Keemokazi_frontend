import React from "react";
import Logo from "../../../assets/Logo.png";

// @import styles
import {
    RealFooterContainer,
    ContainerLarge,
    PaddingPage,
    PageXLarge,
    Layout,
    LeftPannel,
    RightPannel,
    PageMostFooter,
    NearPannel
} from "./realfooter.styled";

const RealFooterRoot = () => {
    return (
        <RealFooterContainer id="RealFooter">
            <ContainerLarge>
                <PaddingPage>
                    <PageXLarge>
                        <Layout>
                            <LeftPannel>
                                <div className="margin-bottom margin-small">
                                    <a href="/" aria-current="page" className="footer-1-logo-link w-nav-brand w--current">
                                        <img draggable="false" src={Logo} width="215" alt="" />
                                    </a>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <div className="text-size-medium">Join our waitlist to stay up to date on features and releases.</div>
                                </div>
                                <div className="footer-1-form w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" aria-label="Email Form">
                                        <div className="footer-1-form-wrapper">
                                            <input type="email" className="form-input w-input" name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required="" />
                                            <input type="submit" value="Subscribe" data-wait="Please wait..." className="button w-button" />
                                        </div>
                                        <div className="text-size-small">By subscribing you agree to with our
                                            <a href="/contact-v1">
                                                <span className="text-style-link"> Privacy Policy </span>
                                            </a>
                                            and provide consent to receive updates from our company.
                                        </div>
                                    </form>
                                </div>
                            </LeftPannel>
                            <RightPannel>
                                <div id="w-node-_3763e1a2-32d1-b0b5-f089-9dae37db5630-37db5611" className="footer-1-column"></div>
                                <div className="footer-1-column"></div>
                                {/* <div className="footer-1-column">
                                    <div className="footer-1-column-heading">Sites</div>
                                    <a href="/contact-v1" className="footer-1-link">Contact</a>
                                    <a href="/contact-v1" className="footer-1-link">Coming soon</a>
                                </div> */}
                            </RightPannel>
                        </Layout>
                        <div className="line-divider"></div>
                        <PageMostFooter>
                            <NearPannel>
                                <div className="w-layout-grid footer-legal-wrapper">
                                    <div id="w-node-_5cac7686-4dd1-caa3-84e3-24147bbcace2-37db5611" className="footer-credit-text">© Keemokazi Consulting by <a href="http://thelegendnfts.io"><span className="footer-bottom-link text-style-underline">NFT&nbsp;Legends</span></a></div>
                                    <div id="w-node-_5cac7686-4dd1-caa3-84e3-24147bbcace8-37db5611" className="footer-credit-text">Powered by <span className="footer-bottom-link text-style-underline">Project&nbsp;P</span>.</div>
                                </div>
                                <div className="w-layout-grid footer-2-socials-wrapper">
                                    <a href="https://opensea.io/collection/keemokazi-tiktok-course" target="_blank" rel="noreferrer" className="footer-1-social-icon w-inline-block">
                                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc0bade864f8_Footer%20Opensea.svg" alt="" />
                                    </a>
                                    <a href="https://discord.gg/hadBjCbaUG" className="footer-1-social-icon w-inline-block" target="_blank" rel="noreferrer">
                                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc7714e864f6_Footer%20Discord.svg" alt="" />
                                    </a>
                                </div>
                            </NearPannel>
                        </PageMostFooter>
                    </PageXLarge>
                </PaddingPage>
            </ContainerLarge>
        </RealFooterContainer>
    );
};

export default RealFooterRoot;

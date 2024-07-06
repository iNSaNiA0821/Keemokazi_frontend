import React, { useState } from "react";
// import swal from "sweetalert";
// import jwt_decode from "jwt-decode";
// import api from "../../../utils/api";

import video1 from "./iframe/video1.htm";
import video2 from "./iframe/video2.htm";
import video3 from "./iframe/video3.htm";
import video4 from "./iframe/video4.htm";
import image1 from "../../../assets/thumb1.png";
import image2 from "../../../assets/thumb2.png";
import image3 from "../../../assets/thumb3.png";
import image4 from "../../../assets/thumb4.png";

import {
  PreviewContainer,
  IllustrationWrapper,
  EllipseTop,
  EllipseBottom,
  MainPannel,
  PagePadding,
  ContainerSmall,
  ContainerLarge,
  FullTextArea,
  EachTextArea,
  FullLargeArea,
  Pannel,
  LeftPannel,
  RightPannel,
  NFTSection,
} from "./preview.styled";

// import { useEthContext } from "../../../contexts/EthereumContext";
// import { contractAddress } from "../../../contracts/Address";
// import { contractABI } from "../../../contracts/MintABI";

const PreviewRoot = (props) => {
  // console.log(props.isVideoshow)
  // localStorage.setItem('videoshow', props.isVideoshow);
  //   const { currentAcc, web3 } = useEthContext();
  //   const [balance, setBalance] = useState(0);
  const [videoURL, setVideoURL] = useState(video1);
  const [imageURL, setImageURL] = useState(image1);
  // const [balanceconfirm, setBalanceConfirm] = useState(0);

  //   useEffect(() => {
  //     if (web3 && currentAcc) {
  //       const contract = new web3.eth.Contract(contractABI, contractAddress);
  //       const interval = setInterval(async () => {
  //         await contract.methods
  //           .balanceOf(currentAcc)
  //           .call()
  //           .then((res) => {
  //             setBalance(res);
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }, 1000);
  //       return () => clearInterval(interval);
  //     }
  //   }, [web3, currentAcc]);

  const setCourse1 = () => {
    document.querySelector(".course1").classList.add("active");
    document.querySelector(".course2").classList.remove("active");
    document.querySelector(".course3").classList.remove("active");
    document.querySelector(".course4").classList.remove("active");
    setVideoURL(video1);
    setImageURL(image1);
  };
  const setCourse2 = () => {
    document.querySelector(".course1").classList.remove("active");
    document.querySelector(".course2").classList.add("active");
    document.querySelector(".course3").classList.remove("active");
    document.querySelector(".course4").classList.remove("active");
    setVideoURL(video2);
    setImageURL(image2);
  };
  const setCourse3 = () => {
    document.querySelector(".course1").classList.remove("active");
    document.querySelector(".course2").classList.remove("active");
    document.querySelector(".course3").classList.add("active");
    document.querySelector(".course4").classList.remove("active");
    setVideoURL(video3);
    setImageURL(image3);
  };
  const setCourse4 = () => {
    document.querySelector(".course1").classList.remove("active");
    document.querySelector(".course2").classList.remove("active");
    document.querySelector(".course3").classList.remove("active");
    document.querySelector(".course4").classList.add("active");
    setVideoURL(video4);
    setImageURL(image4);
  };
  return (
    <PreviewContainer id="Course">
      <IllustrationWrapper>
        <img
          draggable="false"
          src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg"
          alt=""
          className="illustration-flower-bottom"
        />
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
                      <div className="text-size-small text-weight-semibold text-style-allcaps">
                        Course
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration={"1000"}
                  className="aos-init aos-animate margin-bottom margin-small"
                >
                  <h2 className="heading-xlarge">
                    Purchase Tiktok Course to view videos
                  </h2>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration={"1000"}
                  className="aos-init aos-animate margin-bottom margin-small"
                >
                  <p className="text-size-medium">
                    Mint Your NFT to View Course
                  </p>
                </div>
              </EachTextArea>
            </FullTextArea>
          </ContainerSmall>
          <ContainerLarge>
            <FullLargeArea>
              <>
                <LeftPannel>
                  <Pannel
                    onClick={() => setCourse1()}
                    className="aos-init aos-animate course1 active"
                    data-aos="fade-up"
                    data-aos-duration={"1000"}
                  >
                    <img
                      draggable="false"
                      width="66.5"
                      src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png"
                      alt=""
                      className="stats-tab-link-image"
                    />
                    <div className="margin-left margin-medium">
                      <div className="tab-link-text-wrapper">
                        <div className="heading-small">Chapter 1</div>
                        <div className="text-size-regular-1">
                          How to Find Your Niche
                        </div>
                      </div>
                    </div>
                  </Pannel>
                  <Pannel
                    onClick={() => setCourse2()}
                    className="aos-init aos-animate course2"
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration={"1000"}
                  >
                    <img
                      draggable="false"
                      width="66.5"
                      src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png"
                      alt=""
                      className="stats-tab-link-image"
                    />
                    <div className="margin-left margin-medium">
                      <div className="tab-link-text-wrapper">
                        <div className="heading-small">Chapter 2</div>
                        <div className="text-size-regular-1">
                          Understanding the Algorithm
                        </div>
                      </div>
                    </div>
                  </Pannel>
                  <Pannel
                    onClick={() => setCourse3()}
                    className="aos-init aos-animate course3"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration={"1000"}
                  >
                    <img
                      draggable="false"
                      width="66.5"
                      src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png"
                      alt=""
                      className="stats-tab-link-image"
                    />
                    <div className="margin-left margin-medium">
                      <div className="tab-link-text-wrapper">
                        <div className="heading-small">Chapter 3</div>
                        <div className="text-size-regular-1">
                          How to Edit a Viral Video
                        </div>
                      </div>
                    </div>
                  </Pannel>
                  <Pannel
                    onClick={() => setCourse4()}
                    className="aos-init aos-animate course4"
                    data-aos="fade-up"
                    data-aos-delay="750"
                    data-aos-duration={"1000"}
                  >
                    <img
                      draggable="false"
                      width="66.5"
                      src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png"
                      alt=""
                      className="stats-tab-link-image"
                    />
                    <div className="margin-left margin-medium">
                      <div className="tab-link-text-wrapper">
                        <div className="heading-small">Chapter 4</div>
                        <div className="text-size-regular-1">
                          How to Monetize Your Videos
                        </div>
                      </div>
                    </div>
                  </Pannel>
                </LeftPannel>
                <RightPannel
                  data-aos="fade-up"
                  data-aos-duration={"1000"}
                  className="aos-init aos-animate"
                >
                  <NFTSection
                    video={props.isVideoshow}
                    className="imgActive stats-2-tab w-tab-pane w--tab-active"
                    id="w-tabs-0-data-w-pane-0"
                    role="tabpanel"
                    aria-labelledby="w-tabs-0-data-w-tab-0"
                  >
                    {props.isVideoshow ? (
                      <iframe
                        src={videoURL}
                        width="100%"
                        height="504"
                        frameBorder="0"
                        title="video"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img
                        draggable="false"
                        className="stats-2-tab-image"
                        src={imageURL}
                        width="1058"
                        alt=""
                      />
                    )}
                  </NFTSection>
                </RightPannel>
              </>
            </FullLargeArea>
          </ContainerLarge>
        </PagePadding>
      </MainPannel>
      <EllipseBottom />
      <IllustrationWrapper>
        <img
          draggable="false"
          src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc81ebe8657f_Flower.svg"
          alt=""
          className="illustration-flower-bottom"
        />
      </IllustrationWrapper>
    </PreviewContainer>
  );
};

export default PreviewRoot;

import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: block;
`;

export const IllustrationWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  .illustration-flower-bottom {
    position: absolute;
  }
  img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
`;

export const EllipseTop = styled.div`
  position: static;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  width: 100%;
  height: 160px;
  border-radius: 100% 100% 0% 0px;
  background-color: #f0f5f5;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    height: 128px;
  }
  @media screen and (max-width: 479px) {
    height: 96px;
  }
`;

export const EllipseBottom = styled.div`
  z-index: -1;
  width: 100%;
  height: 160px;
  padding-top: 0px;
  border-radius: 0px 0% 100% 100%;
  background-color: #f0f5f5;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    height: 128px;
  }
  @media screen and (max-width: 479px) {
    height: 96px;
  }
`;

export const MainPannel = styled.div`
  background-color: #f0f5f5;
`;

export const PagePadding = styled.div`
  padding-right: 5%;
  padding-left: 5%;
`;

export const ContainerSmall = styled.div`
  width: 100%;
  max-width: 48rem;
  margin-right: auto;
  margin-left: auto;
`;

export const FullTextArea = styled.div`
  padding: 0rem;
`;

export const EachTextArea = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  .margin-bottom.margin-xsmall {
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    .tagline-wrapper {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-align: start;
      align-items: flex-start;
      color: #fff;
      .tagline-component {
        display: flex;
        padding: 0.25rem 0.75rem;
        border-radius: 100px;
        background-color: #ff0050;
        color: #fff;
        .text-style-allcaps {
          text-transform: uppercase;
        }
        .text-size-small {
          font-size: 0.875rem;
        }
      }
    }
  }
  .margin-xsmall {
    margin: 1rem;
    @media screen and (max-width: 767px) {
      margin: 0.75rem;
    }
  }
  .margin-bottom.margin-small {
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    .heading-xlarge {
      font-size: 3rem;
      line-height: 1.2;
      font-weight: 700;
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-family: Futura maxi cg, sans-serif;
      @media screen and (max-width: 991px) {
        font-size: 2.75rem;
      }
      @media screen and (max-width: 767px) {
        font-size: 2.25rem;
      }
    }
    .text-size-medium {
      margin-bottom: 1rem;
      font-size: 1.125rem;
      color: #445254;
      margin-top: 0;
      @media screen and (max-width: 767px) {
        font-size: 1rem;
      }
    }
  }
  .margin-small {
    margin: 1.5rem;
  }
`;

export const ContainerLarge = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
`;

export const FullLargeArea = styled.div`
  display: grid;
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
  grid-auto-columns: 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: auto;
  position: relative;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftPannel = styled.div`
  display: grid;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  grid-auto-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  position: relative;
`;

export const Pannel = styled.a`
  display: flex;
  padding: 1.5rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex: 1;
  border-bottom: 2px solid transparent;
  border-radius: 24px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
  transition: border-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  position: relative;
  vertical-align: top;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  max-width: 100%;
  img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    @media screen and (max-width: 767px) {
      width: 48px;
    }
  }
  .margin-left.margin-medium {
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 2rem;
    @media screen and (max-width: 767px) {
      margin-left: 1.5rem;
    }
    .heading-small {
      font-size: 1.5rem;
      line-height: 1.4;
      font-weight: 700;
      font-family: "Rubik", sans-serif;
      @media screen and (max-width: 767px) {
        font-size: 1.25rem;
      }
    }
    .text-size-regular-1 {
      font-size: 1rem;
      font-family: "Rubik", sans-serif;
    }
  }
`;

export const NFTSection = styled.div`
  @media screen and (max-width: 767px) {
    height: ${(props) => (props.video ? "350px" : "")};
  }
  @media screen and (max-width: 479px) {
    height: ${(props) => (props.video ? "250px" : "")};
  }
  @media screen and (max-width: 350px) {
    height: ${(props) => (props.video > 0 ? "200px" : "")};
  }
`;

export const RightPannel = styled.div`
  grid-column-end: span 1;
  grid-column-start: span 1;
  grid-row-end: span 1;
  grid-row-start: span 1;
  align-self: center;
  justify-self: center;
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  html.w-mod-touch * {
    background-attachment: scroll !important;
  }
  .stats-2-tab {
    align-self: center;
    @media screen and (max-width: 991px) {
      text-align: center;
    }
    .stats-2-tab-image {
      width: 100%;
      max-width: 700px;
      display: inline-block;
      vertical-align: middle;
      border: 0;
    }
  }
  .w--tab-active {
    display: block;
  }
  /* .w-tab-pane {
        position: relative;
        display: none;
    } */
`;

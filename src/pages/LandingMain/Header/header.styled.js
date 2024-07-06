import styled from "styled-components";

export const HeadContainer = styled.div`
  background-color: #f0f5f5;
`;

export const PagePadding = styled.div`
  padding-right: 5%;
  padding-left: 5%;
`;

export const ContainerLarge = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
`;

export const PaddingVertical = styled.div`
  padding: 5rem 0rem 8rem;
`;

export const Layout = styled.div`
  display: grid;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  grid-template-columns: minmax(400px, 0.5fr) 1fr;
  grid-template-rows: auto;
  @media screen and (max-width: 991px) {
    min-height: auto;
    grid-auto-flow: row;
    grid-row-gap: 4rem;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
`;

export const LeftPannel = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 1;
  grid-column-end: span 1;
  .button-user-form {
    background-color: #00f2ea;
    color: white;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 17px;
    &:hover {
      color: white;
      background-color: rgb(204, 74, 69);
      transition: background-color 200ms ease-in-out;
    }
  }
  .second {
    margin-left: 20px;
    margin-top: 20px;
  }
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
        &:hover {
          background-color: #de054a;
          transition: background-color 200ms ease-in-out;
        }
      }
    }
  }
  .margin-xsmall {
    margin: 1rem;
  }
  .margin-bottom.margin-small {
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    .heading-xxlarge {
      font-size: 3.5rem;
      line-height: 1.2;
      font-weight: 700;
      margin: 0.67em 0;
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-family: Futura maxi cg, sans-serif;
    }
    .text-size-large {
      font-size: 1.25rem;
      margin-bottom: 0rem;
      color: #445254;
      margin-top: 0;
      .text-span {
        font-size: 1rem;
      }
      @media screen and (max-width: 767px) {
        font-size: 1.125rem;
      }
    }
    @media screen and (max-width: 991px) {
      .heading-xxlarge {
        font-size: 3.25rem;
      }
    }
    @media screen and (max-width: 767px) {
      .heading-xxlarge {
        font-size: 2.5rem;
      }
    }
  }
  .margin-small {
    margin: 1.5rem;
  }
`;

export const RightPannel = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 1;
  grid-column-end: span 1;
  justify-self: center;
  max-width: 600px;
  img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
`;

import styled from "styled-components";

export const OurstoryContainer2 = styled.div`
    display: block;
`;

export const PagePadding = styled.div`
  padding-right: 5%;
  padding-left: 5%;
`

export const ContainerLarge = styled.div`
    width: 100%;
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;
`

export const PaddingVertical = styled.div`
    padding-top: 0rem;
    padding-right: 0rem;
    padding-left: 0rem;
    padding-bottom: 10rem;
    @media screen and (max-width: 767px) {
      padding-bottom: 5rem;
    }
`

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
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 767px) {
      grid-row-gap: 3rem;
    }
`

export const LeftPannel = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 1;
  grid-column-end: span 1;
  @media screen and (max-width: 991px) {
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 2;
  }
  .margin-bottom.margin-xsmall {
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    @media screen and (max-width: 767px) {
        margin-bottom: 0.75rem;
    }
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
      font-family: Futura maxi cg,sans-serif;
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
      .text-span {
        font-size: 1rem;
      }
      @media screen and (max-width: 767px) {
        font-size: 1rem;
      }
    }
  }
  .margin-small {
    margin: 1.5rem;
  }
  .button-row {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    .button-wrapper {
      margin-top: 1rem;
      margin-right: 0.75rem;
      @media screen and (max-width: 479px) {
        width: 100%;
      }
      .button {
        display: flex;
        padding: 0.75rem 1.5rem;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 100px;
        background-color: #00f2ea;
        box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
        transition: background-color 200ms ease-in-out;
        color: #fff;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        .margin-right.margin-xxsmall {
          margin-top: 0rem;
          margin-bottom: 0rem;
          margin-left: 0rem;
          .icon-xxsmall {
            width: 1.25rem;
            font-family: Material Icons, sans-serif;
            font-size: 1.25rem;
            line-height: 1;
          }
        }
        .margin-xxsmall {
          margin: 0.5rem;
        }
        &:hover {
          background: #cc4a45;
        }
      }
      .w-inline-block {
        max-width: 100%;
      }
      a {
        border-color: #022024;
      }
      .button-secondary {
        display: flex;
        padding: 0.75rem 1.5rem;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        border-style: solid;
        border-width: 1.5px;
        border-color: #022024;
        border-radius: 100px;
        background-color: #fff;
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);
        transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
        color: #022024;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        .margin-right.margin-xxsmall {
          margin-top: 0rem;
          margin-bottom: 0rem;
          margin-left: 0rem;
          .icon-xxsmall {
            width: 1.25rem;
            font-family: Material Icons, sans-serif;
            font-size: 1.25rem;
            line-height: 1;
          }
        }
        .margin-xxsmall {
          margin: 0.5rem;
        }
        &:hover {
          background-color: #022024;
          color: white;
        }
      }
    }
  }
`

export const RightPannel = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 1;
  grid-column-end: span 1;
  img {
    width: 100%;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
`
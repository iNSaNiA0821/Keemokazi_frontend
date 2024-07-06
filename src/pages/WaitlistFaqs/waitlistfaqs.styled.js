import styled from "styled-components";

export const WaitlistFaqsContainer = styled.div`
    position: relative;
`;

export const PagePadding = styled.div`
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    margin-bottom: 2rem;
`

export const IllustrationWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    img {
        position: absolute;
        display: inline-block;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
`
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
`

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
`

export const ContainerLarge = styled.div`
    background-color: #f0f5f5;
`

export const PaddingVertical = styled.div`
    padding-right: 5%;
    padding-left: 5%;
`

export const Layout = styled.div`
    width: 100%;
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;
`

export const PaddingVerticalFaq = styled.div`
    padding-right: 0rem;
    padding-left: 0rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media screen and (max-width: 991px) {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }
    @media screen and (max-width: 767px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`

export const FaqLayout = styled.div`
    display: grid;
    -webkit-box-align: start;
    align-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 5rem;
    grid-row-gap: 4rem;
    grid-template-columns: 0.75fr 1fr;
    grid-template-rows: auto;
    @media screen and (max-width: 991px) {
        min-height: auto;
        grid-auto-flow: row;
        grid-column-gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
        grid-row-gap: 3rem;
        grid-template-columns: 1fr;
    }
`

export const LeftPannel = styled.div`
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
            @media screen and (max-width: 767px) {
                font-size: 1rem;
            }
        }
    }
    .margin-small {
        margin: 1.5rem;
        @media screen and (max-width: 767px) {
            margin: 1.25rem;
        }
    }
`

export const RightPannel = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    @media screen and (max-width: 767px) {
        grid-row-gap: 2.5rem;
    }
`

export const FaqItem = styled.div`
    .margin-bottom.margin-xsmall {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        .text-size-medium {
            margin-bottom: 1rem;
            font-size: 1.125rem;
            @media screen and (max-width: 767px) {
                font-size: 1rem;
            }
        }
        .text-weight-bold {
            font-weight: 700;
        }
    }
    .text-size-regular-1 {
        font-size: 1rem;
        margin-bottom: 0rem;
        color: #445254;
    }
`
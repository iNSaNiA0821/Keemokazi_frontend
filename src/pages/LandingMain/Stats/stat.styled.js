import styled from "styled-components";

export const StatContainer = styled.div`
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

export const MainPannel = styled.div`
    background-color: #f0f5f5;
    /* padding-bottom: 80px; */
`

export const Tiers = styled.div`
    background-color: #f0f5f5;
`

export const PagePadding = styled.div`
    padding-right: 5%;
    padding-left: 5%;
`

export const ContainerSmall = styled.div`
    width: 100%;
    max-width: 48rem;
    margin-right: auto;
    margin-left: auto;
`

export const FullTextPannel = styled.div`
    padding: 0rem;
`

export const EachTextPannel = styled.div`
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
    }
`

export const ContainerMedium = styled.div`
    width: 100%;
    max-width: 64rem;
    margin-right: auto;
    margin-left: auto;
`

export const FullServicePannel = styled.div`
    display: grid;
    width: 100%;
    max-width: 64rem;
    grid-auto-columns: 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto minmax(auto, 1fr);
    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    @media screen and (max-width: 479px) {
        grid-template-columns: 1fr;
    }
`

export const ServiceCard = styled.div`
    display: flex;
    padding: 24px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    border-style: solid;
    border-width: 1px;
    border-color: #d5d5d5;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
    .text-align-center {
        text-align: center;
        .text-color-darkgrey {
            color: #445254;
        }
        .padding-vertical.padding-xxsmall {
            padding-right: 0rem;
            padding-left: 0rem;
            padding: 0.5rem;
            .text-color-black {
                color: #022024;
            }
            .heading-medium {
                font-family: 'Futura maxi cg', sans-serif;
                font-size: 2rem;
                line-height: 1.3;
                font-weight: 700;
                @media screen and (max-width: 991px) {
                    font-size: 1.75rem;
                }
                @media screen and (max-width: 767px) {
                    font-size: 1.5rem;
                    line-height: 1.4;
                }
            }
        }
        .text-style-allcaps {
            text-transform: uppercase;
            .text-color-turquoise {
                color: #056370;
            }
            .text-size-small {
                font-size: 0.875rem;
            }
        }
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
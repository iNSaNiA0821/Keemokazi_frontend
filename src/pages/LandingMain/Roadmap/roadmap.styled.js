import styled from "styled-components";

export const RoadmapContainer = styled.div`
    display: block;
`;

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

export const PaddingVertical = styled.div`
    padding: 4rem 0rem 8rem;
`

export const FullTextArea = styled.div`
    padding: 0rem;
`

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

export const RoadmapTimeline = styled.div`
  
`

export const EachRoadmap = styled.div`
    position: relative;
    display: -ms-grid;
    display: grid;
    width: 100%;
    grid-auto-columns: 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`

export const RoadmapCard = styled.div`
    width: 100%;
    grid-column-gap: 2rem;
    grid-row-gap: 0px;
    grid-template-columns: 1fr -webkit-min-content 1fr;
    grid-template-columns: 1fr min-content 1fr;
    grid-template-rows: auto;
    display: grid;
    grid-auto-columns: 1fr;
    @media screen and (max-width: 991px) {
        grid-column-gap: 1.5rem;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: min-content 1fr;
    }
`

export const TextArea = styled.div`
    padding: 1.5rem;
    border-style: solid;
    border-width: 1px;
    border-color: #d5d5d5;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
    text-align: center;
    @media screen and (max-width: 767px) {
        text-align: left;
    }
`

export const CorrectText = styled.div`
    .margin-bottom.margin-xxsmall {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        .text-color-turquoise {
            color: #056370;
        }
        .text-size-small {
            font-size: 0.875rem;
        }
        @media screen and (max-width: 767px) {
            .heading-xsmall {
                font-size: 1.125rem;
            }
        }
    }
    .margin-xxsmall {
        margin: 0.5rem;
    }
    .margin-bottom.margin-xxsmall {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        h3 {
            margin-top: 0rem;
            margin-bottom: 0rem;
            font-family: Rubik, sans-serif;
        }
    }
    .margin-xxsmall {
        margin: 0.5rem;
    }
    .text-size-regular-1 {
        font-size: 1rem;
        font-family: Rubik, sans-serif;
    }
    p {
        margin-bottom: 0rem;
        color: #445254;
        margin-top: 0;
    }
`

export const HeaderTimeline = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        grid-column-end: 2;
        grid-column-start: 1;
        grid-row-end: 2;
        grid-row-start: 1;
    }
    .layout-121-timeline-icon-wrapper {
        position: relative;
        z-index: 1;
        margin-bottom: 1rem;
        padding: 0.5rem;
        border-radius: 50%;
        background-color: #ea554f;
        color: #fff;
        .icon-1x1-small {
            width: 2rem;
            height: 2rem;
            font-family: Material Icons, sans-serif;
            font-size: 2rem;
            line-height: 1;
        }
    }
    .layout-121-progress-bar {
        width: 2px;
        height: 100%;
        background-color: #ea554f;
    }
`

export const Empty = styled.div`
    position: relative;
    display: flex;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const CommonTimeline = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        grid-column-end: 2;
        grid-column-start: 1;
        grid-row-end: 2;
        grid-row-start: 1;
    }
   .layout-121-timeline-icon-wrapper-copy {
        position: relative;
        z-index: 1;
        margin-bottom: 1rem;
        padding: 0.5rem;
        border-style: solid;
        border-width: 1px;
        border-color: #d5d5d5;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
        color: #ea554f;
        .icon-1x1-small {
            width: 2rem;
            height: 2rem;
            font-family: Material Icons, sans-serif;
            font-size: 2rem;
            line-height: 1;
        }
    }
    .layout-121-progress-bar-copy {
        width: 2px;
        height: 100%;
        background-color: #d5d5d5;
    }
`
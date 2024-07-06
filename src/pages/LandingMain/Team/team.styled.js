import styled from "styled-components";

export const TeamContainer = styled.div`
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

export const MainPannel = styled.div`
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

export const ContainerLarge = styled.div`
    width: 100%;
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;

`

export const FullTextArea = styled.div`
    padding-top: 0rem;
    padding-right: 0rem;
    padding-left: 0rem;
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

export const EachTeam = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }
`

export const TeamMember = styled.div`
    padding: 2rem;
    border-style: solid;
    border-width: 1px;
    border-color: #d5d5d5;
    border-radius: 32px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 6%);
    text-align: center;
    @media screen and (max-width: 479px) {
        padding: 1.5rem 1.5rem 2.5rem;
    }
`

export const TeamMemberPhoto = styled.div`
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    .team-member-wrapper {
        display: flex;
        height: 200px;
        -webkit-box-pack: center;
        justify-content: center;
        @media screen and (max-width: 767px) {
            height: 160px;
        }
        .team-member-image {
            width: 128px;
            align-self: center;
            display: inline-block;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
            @media screen and (max-width: 767px) {
                width: 96px;
            }
        }
    }
`

export const TeamMemberInfo = styled.div`
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    margin: 1rem;
    .text-size-large.text-weight-semibold {
        font-weight: 600;
    }
    .text-size-large {
        font-size: 1.25rem;
        font-family: Futura maxi cg,sans-serif;
        @media screen and (max-width: 767px) {
            font-size: 1.125rem;
        }
    }
`

export const TeamMemberSocial = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    justify-items: center;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    .button-secondary.icon-only {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
        border-width: 0.5px;
        border-color: #d5d5d5;
        &:hover {
            background-color: #f4f4f4;
        }
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
        .icon-1x1-xsmall {
            width: 1.5rem;
            height: 1.5rem;
            /* font-family: Futura maxi cg,sans-serif; */
            font-size: 1.5rem;
            line-height: 1;
        }
        img {
            display: inline-block;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
        }
    }
    .w-inline-block {
        max-width: 100%;
        display: inline-block;
    }
`
import styled from "styled-components";

export const OurstoryContainer1 = styled.div`
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

export const StoryTitle = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
    .button-row {
        display: flex;
        flex-wrap: wrap;
        -webkit-box-align: center;
        align-items: center;
        .button-wrapper {
            margin-top: 1rem;
            margin-right: 0.75rem;
            .button-secondary.icon-only {
                padding-right: 0.75rem;
                padding-left: 0.75rem;
                border-width: 0.5px;
                border-color: #d5d5d5;
                .icon-1x1-xxsmall {
                    display: flex;
                    width: 1.25rem;
                    height: 1.25rem;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    font-family: Material Icons, sans-serif;
                    font-size: 1.25rem;
                    line-height: 1;
                    max-width: 100%;
                    vertical-align: middle;
                    border: 0;
                }
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
                border-radius: 100px;
                background-color: #fff;
                box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);
                transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
                color: #022024;
                font-weight: 500;
                text-align: center;
                text-decoration: none;
            }
            .w-inline-block {
                max-width: 100%;
            }
        }
    }
`
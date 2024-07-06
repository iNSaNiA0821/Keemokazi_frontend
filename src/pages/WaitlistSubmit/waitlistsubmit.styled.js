import styled from "styled-components";

export const WaitlistSubmitContainer = styled.div`
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
    padding-right: 0rem;
    padding-left: 0rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media screen and (max-width: 991px) {
        padding-top: 6rem;
    }
    @media screen and (max-width: 767px) {
        padding-top: 4rem;
    }
`

export const MainTextArea = styled.div`
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 991px) {
        margin-bottom: 4.5rem;
    }
    @media screen and (max-width: 767px) {
        margin-bottom: 3rem;
    }
`

export const TextLayout = styled.div`
    display: grid;
    width: 100%;
    -webkit-box-align: end;
    align-items: end;
    grid-auto-columns: 1fr;
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
    grid-template-columns: 1fr 1.25fr;
    grid-template-rows: auto;
    .text-size-medium {
        margin-bottom: 1rem;
        font-size: 1.125rem;
        color: #445254;
        margin-top: 0;
        @media screen and (max-width: 767px) {
            font-size: 1rem;
        }
    }
    @media screen and (max-width: 991px) {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 767px) {
        grid-row-gap: 1rem;
    }
`

export const TextTile = styled.div`
    margin-bottom: 0px;
    .margin-bottom.margin-xsmall {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        margin-bottom: 1rem;
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
    .heading-xxlarge {
        font-size: 3.25rem;
        line-height: 1.2;
        font-weight: 700;
        margin-top: 0rem;
        margin-bottom: 0rem;
        font-family: Futura maxi cg,sans-serif;
        @media screen and (max-width: 991px) {
            font-size: 3.25rem;
        }
        @media screen and (max-width: 767px) {
            font-size: 2.5rem;
        }
    }
`

export const MainContent = styled.div`
    display: grid;
    width: 100%;
    -webkit-box-align: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 5rem;
    grid-row-gap: 4rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media screen and (max-width: 991px) {
        min-height: auto;
        grid-auto-flow: row;
        grid-auto-rows: max-content;
        grid-column-gap: 3rem;
        grid-template-columns: 1fr;
    } 
    @media screen and (max-width: 767px) {
        grid-row-gap: 3rem;
        grid-template-columns: 1fr;
    }
`

export const LeftPannel = styled.div`
    margin-bottom: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
    @media screen and (max-width: 991px) {
        width: 100%;
    }
    .contact-1-form {
        display: grid;
        width: 100%;
        grid-auto-columns: 1fr;
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        .form-field-wrapper {
            position: relative;
            .field-label {
                margin-bottom: 0.5rem;
                font-weight: 400;
            }
            .form-input {
                margin-top: 0.5rem;
                height: auto;
                min-height: 2.75rem;
                margin-bottom: 0px;
                padding: 0.5rem 1.5rem;
                border-style: solid;
                border-width: 1px;
                border-color: #d5d5d5;
                border-radius: 100px;
                background-color: #fff;
                transition: border-color 200ms ease-in-out;
                color: #022024;
                font-size: 1rem;
                line-height: 1.6;
                display: block;
                width: 100%;
                vertical-align: middle;
                border: 1px solid #cccccc;
            }
        }
        .margin-bottom.margin-xsmall {
            margin-top: 0rem;
            margin-right: 0rem;
            margin-left: 0rem;
            margin-bottom: 1rem;
            .checkbox-wrapper {
                display: flex;
                margin-bottom: 0px;
                padding-left: 1.125rem;
                -webkit-box-align: center;
                align-items: center;
                ::before {
                    content: ' ';
                    display: table;
                    grid-column-end: 2;
                    grid-column-start: 1;
                    grid-row-end: 2;
                    grid-row-start: 1;
                }
                .form-checkbox {
                    width: 1rem;
                    height: 1rem;
                    min-height: 1rem;
                    min-width: 1rem;
                    margin-top: 0px;
                    margin-left: -1.125rem;
                    border-style: solid;
                    border-width: 1px;
                    border-color: #022024;
                    border-radius: 4px;
                    transition: all 200ms ease;
                    cursor: pointer;
                    float: left;
                    margin-bottom: 0px;
                    line-height: normal;
                }
                input[type='checkbox'], input[type='radio'] {
                    box-sizing: border-box;
                    padding: 0;
                }
                input {
                    line-height: normal;
                }
                .hidecheckbox {
                    opacity: 0;
                    position: absolute;
                    z-index: -1;
                }
                .form-checkbox-label {
                    margin-bottom: 0px;
                    padding-left: 0.5rem;
                    font-size: 0.875rem;
                    display: inline-block;
                    cursor: pointer;
                    font-weight: normal;
                }
                ::after {
                    content: ' ';
                    display: table;
                    grid-column-end: 2;
                    grid-column-start: 1;
                    grid-row-end: 2;
                    grid-row-start: 1;
                    clear: both;
                }
            }
        }
        .button-layout {
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            .button {
                display: flex;
                padding: 0.7rem 1.5rem;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                border-radius: 100px;
                background-color: #00f2ea;
                box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
                transition: background-color 200ms ease-in-out;
                color: #fff;
                font-weight: 700;
                text-align: center;
                text-decoration: none;
                border: 0;
                line-height: inherit;
                cursor: pointer;
                font-size: 16px;
                &:hover {
                    background-color: #cc4a45;
                }
            }
        }
    }
    .margin-top-1.margin-large {
        margin-right: 0rem;
        margin-bottom: 0rem;
        margin-left: 0rem;
        margin-top: 3rem;
        @media screen and (max-width: 991px) {
            margin-top: 2.5rem;
        }
        @media screen and (max-width: 767px) {
            margin-top: 2rem;
        }
        .margin-bottom.margin-xsmall {
            margin-top: 0rem;
            margin-right: 0rem;
            margin-left: 0rem;
            margin-bottom: 1rem;
            @media screen and (max-width: 767px) {
                margin-bottom: 0.75rem;
            }
            .heading-small {
                font-size: 1.5rem;
                line-height: 1.4;
                font-weight: 700;
                margin-top: 0rem;
                margin-bottom: 0rem;
                font-family: Rubik, sans-serif;
                @media screen and (max-width: 991px) {
                    font-size: 1.5rem;
                }
                @media screen and (max-width: 767px) {
                    font-size: 1.25rem;
                }
            }
        }
        .button-row {
            display: flex;
            padding-left: 10px;
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
                        align-items: center;
                        font-family: Materialiconsround, sans-serif;
                        font-size: 1.25rem;
                        line-height: 1;
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
                }
                .w-inline-block {
                    max-width: 100%;
                }
            }
        }
    }
`

export const RightPannel = styled.div`
    grid-column-start: span 1;
    grid-column-end: span 1;
    grid-row-start: span 1;
    grid-row-end: span 1;
    .contact-1-image {
        -webkit-box-pack: end;
        justify-content: flex-end;
        display: inline-block;
        max-width: 100%;
        border: 0;
        @media screen and (max-width: 767px) {
            width: 95%;
        }
    }
`
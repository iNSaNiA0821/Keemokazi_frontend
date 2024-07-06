import styled from "styled-components";

export const RealFooterContainer = styled.div`
    padding-right: 5%;
    padding-left: 5%;
`;

export const ContainerLarge = styled.div`
    width: 100%;
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;
`

export const PaddingPage = styled.div`
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    padding-top: 6rem;
    @media screen and (max-width: 991px) {
        padding-top: 5rem;
    }
    @media screen and (max-width: 767px) {
        padding-top: 3.5rem;
    }
`

export const PageXLarge = styled.div`
    padding-top: 0rem;
    padding-right: 0rem;
    padding-left: 0rem;
    .line-divider {
        width: 100%;
        height: 1px;
        background-color: #d5d5d5;
    }
`

export const Layout = styled.div`
    display: grid;
    align-items: start;
    grid-column-gap: 8vw;
    grid-row-gap: 1rem;
    -ms-grid-columns: 0.75fr 1fr;
    grid-template-columns: 0.75fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    grid-auto-columns: 1fr;
    padding-bottom: 3rem;
    @media screen and (max-width: 991px) {
        grid-row-gap: 4rem;
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 767px) {
        grid-row-gap: 3rem;
    }
    @media screen and (max-width: 479px) {
        grid-row-gap: 1rem;
    }
`

export const LeftPannel = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    .margin-bottom.margin-small {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        margin-bottom: 1.5rem;
        .footer-1-logo-link {
            padding-left: 0rem;
            img {
                display: inline-block;
                max-width: 100%;
                vertical-align: middle;
                border: 0;
            }
        }
        .w-nav-brand {
            position: relative;
            float: left;
            text-decoration: none;
            color: #333333;
        }
        a {
            background-color: transparent;
            border-color: #022024;
        }
    }
    .margin-bottom.margin-small {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        margin-bottom: 1.5rem;
        .text-size-medium {
            margin-bottom: 1rem;
            font-size: 1.125rem;
        }
    }
    .footer-1-form {
        margin-bottom: 0px;
        form {
            display: block;
            margin-top: 0em;
            .footer-1-form-wrapper {
                display: grid;
                margin-bottom: 1rem;
                grid-auto-columns: 1fr;
                grid-column-gap: 8px;
                grid-row-gap: 8px;
                grid-template-columns: 1fr -webkit-max-content;
                grid-template-columns: 1fr max-content;
                grid-template-rows: auto;
                @media screen and (max-width: 479px) {
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    flex-direction: column;
                    grid-row-gap: 12px;
                    grid-template-columns: 1fr;
                }
                .form-input {
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
                }
                input.w-button {
                    -webkit-appearance: button;
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
                    font-weight: 600;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                    &:hover {
                        background-color: #cc4a45;
                    }
                }
                .w-button {
                    border: 0;
                    line-height: inherit;
                    cursor: pointer;
                }
            }
            .text-size-small {
                font-size: 0.875rem;
                a {
                    border-color: #022024;
                    color: #022024;
                    text-decoration: underline;
                    background-color: transparent;
                }
            }
        }
        .success-message {
            padding: 1.5rem;
            border-radius: 16px;
            background-color: #d9f7be;
            color: #237804;
        }
        .error-message {
            margin-top: 1.5rem;
            padding: 0.875rem 1rem;
            border-radius: 16px;
            background-color: #ffccc7;
            color: #a8071a;
            text-align: center;
        }
        .w-form-fail {
            display: none;
        }
    }
    .w-form {
        margin: 0 0 15px;
    }
`

export const RightPannel = styled.div`
    -webkit-box-align: start;
    align-items: start;
    grid-column-gap: 3vw;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    display: grid;
    grid-auto-columns: 1fr;
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
    .footer-1-column {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        justify-items: start;
        -webkit-box-align: start;
        align-items: flex-start;
        grid-auto-columns: 100%;
        grid-template-columns: 100%;
        grid-template-rows: auto;
        .footer-1-column-heading {
            margin-bottom: 1rem;
            font-size: 1rem;
            font-weight: 600;
        }
        .footer-1-link {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            color: #445254;
            font-size: 1rem;
            text-decoration: none;
            background-color: transparent;
            border-color: #022024;
        }
    }
`

export const PageMostFooter = styled.div`
    padding-right: 0rem;
    padding-left: 0rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

export const NearPannel = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    @media screen and (max-width: 991px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: start;
        align-items: flex-start;
    }
    @media screen and (max-width: 767px) {
        padding-bottom: 1rem;
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        flex-direction: column-reverse;
        -webkit-box-align: start;
        align-items: flex-start;
    }
    .footer-legal-wrapper {
        display: grid;
        -webkit-box-pack: center;
        justify-content: center;
        grid-auto-flow: column;
        grid-auto-columns: auto;
        grid-column-gap: 1.5rem;
        grid-row-gap: 0rem;
        grid-template-columns: auto;
        grid-template-rows: auto;
        white-space: normal;
        @media screen and (max-width: 767px) {
            grid-auto-flow: row;
            grid-auto-rows: 1fr;
            grid-column-gap: 0rem;
            grid-row-gap: 0.5rem;
        }
        @media screen and (max-width: 479px) {
            grid-auto-columns: 1fr;
            grid-template-columns: 1fr;
        }
        .footer-credit-text {
            font-family: 'Futura bt', sans-serif;
            color: #505050;
            font-size: 0.875rem;
            a {
                border-color: #022024;
                color: #022024;
                text-decoration: underline;
                background-color: transparent;
            }
        }
        #w-node-_5cac7686-4dd1-caa3-84e3-24147bbcace2-37db5611 {
            grid-column-end: span 1;
            grid-column-start: span 1;
            grid-row-end: span 1;
            grid-row-start: span 1;
        }
        #w-node-_5cac7686-4dd1-caa3-84e3-24147bbcace8-37db5611 {
            grid-column-end: 2;
            grid-column-start: 1;
            grid-row-end: 3;
            grid-row-start: 2;
        }
    }

    .footer-2-socials-wrapper {
        display: grid;
        justify-items: start;
        -webkit-box-align: start;
        align-items: start;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-column-gap: 0.5rem;
        grid-row-gap: 0rem;
        grid-template-columns: max-content;
        grid-template-rows: auto;
        white-space: normal;
        @media screen and (max-width: 991px) {
            margin-bottom: 2rem;
        }
        .footer-1-social-icon {
            padding: 0.5rem;
        }
        .w-inline-block {
            max-width: 100%;
            display: inline-block;
        }
        a {
            border-color: #022024;
            color: #022024;
            text-decoration: underline;
            background-color: transparent;
            img {
                display: inline-block;
                max-width: 100%;
                vertical-align: middle;
                border: 0;
            }
        }
    }
`
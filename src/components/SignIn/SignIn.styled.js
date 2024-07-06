import styled from "styled-components";

export const SignInRoot = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    .user-form {
        width: 750px;
        border-radius: 25px;
        -webkit-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
        -moz-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
        box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
        padding: 50px;
        .form-field-wrapper {
            margin-top: 10px;
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
                border: 1px solid #cccccc;
            }
        }
        .button-layout {
            margin-top: 30px;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            justify-content: space-between;
            @media screen and (max-width: 479px) {
              flex-direction: column !important;
            }
            .button {
                display: flex;
                width: 48%;
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
                font-size: 17px;
                &:hover {
                    background-color: #cc4a45;
                }
                @media screen and (max-width: 479px) {
                  width: 100% !important;
                  margin-top: 10px;
                  padding: 0.3rem 1rem !important;
                }
            }
        }
    }
`;
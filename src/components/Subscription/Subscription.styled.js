import styled from "styled-components";

export const SubscriptionRoot = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  .payment-form {
    -webkit-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    display: grid;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    grid-auto-columns: 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    @media screen and (max-width: 540px) {
      width: 90% !important;
    }
    @media screen and (max-width: 320px) {
      grid-row-gap: 0.5rem;
    }

    .subscription-btn {
      @media screen and (max-width: 479px) {
        width: 70% !important;
      }
      @media screen and (max-width: 400px) {
        width: 80% !important;
      }
    }

    img {
      margin-left: auto;
      margin-right: auto;
      @media screen and (max-width: 360px) {
        width: 70px;
      }
      @media screen and (max-width: 320px) {
        width: 50px;
      }
    }

    .buynow {
      text-align: center;
      height: 40px;
      width: 30%;
      display: flex;
      margin: 0 10px;
      justify-content: center;
      align-items: center;
      background-color: #1e90ff;
      margin-left: auto;
      margin-right: auto;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #0080ff;
        transition: background-color 200ms ease-in-out;
      } 
      @media screen and (max-width: 479px) {
        font-size: 13px;
      }
      @media screen and (max-width: 320px) {
        height: 28px;
        font-size: 10px;
      }
    }

    .subscription-true-button.true {
      flex-direction: inherit !important;
    }

    .subscription-true-button {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-top: 5px;
        width: 80%;
        @media screen and (max-width: 320px) {
          font-size: 13px;
        }
      }
    
      .buynow, .gocalendar {
        text-align: center;
        height: 40px;
        width: 30%;
        display: flex;
        margin: 0 10px;
        justify-content: center;
        align-items: center;
        background-color: #1e90ff;
        color: white;
        cursor: pointer;
        @media screen and (max-width: 479px) {
          font-size: 13px;
        }
        @media screen and (max-width: 320px) {
          height: 30px;
          font-size: 12px;
        }
        &:hover {
          background-color: #0080ff;
          transition: background-color 200ms ease-in-out;
        }
      }
    }
  }

  .header {
    font-size: 45px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Audiowide', cursive;
    height: 13vh;
    background-color: #1e90ff;
    @media screen and (max-width: 479px) {
      height: 10vh;
      font-size: 35px;
    }
    @media screen and (max-width: 320px) {
      font-size: 20px;
    }
  }

  .price {
    font-size: 70px;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #1e90ff;
    @media screen and (max-width: 479px) {
      height: 8vh;
      font-size: 50px;
    }
    @media screen and (max-width: 360px) {
      height: 7vh;
      font-size: 45px;
    }
    @media screen and (max-width: 320px) {
      height: 8vh;
      font-size: 35px;
    }
  }

  .period {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1e90ff;
    font-size: 20px;
    @media screen and (max-width: 320px) {
      font-size: 15px;
    }
  }

  .afterpay {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-style: italic;
    font-size: 17px;
    margin: -8px 0 -3px 0;
    @media screen and (max-width: 320px) {
      font-size: 13px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-character;
    @media screen and (max-width: 479px) {
      font-size: 17px;
    }
    @media screen and (max-width: 360px) {
      font-size: 16px;
    }
    @media screen and (max-width: 320px) {
      font-size: 13px;
    }
  }

  .cancel {
    background-color: #1e90ff;
    border: none;
    color: white;
    cursor: pointer;
    height: 25px;
    @media screen and (max-width: 320px) {
      height: 20px;
    }
    &:hover {
      background-color: #0080ff;
      transition: background-color 200ms ease-in-out;
    }
  }
  
  .submit-form {
    -webkit-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    display: grid;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    grid-auto-columns: 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    
    @media screen and (max-width: 540px) {
      width: 90% !important;
    }

    .cancel {
      background-color: #1e90ff;
      border: none;
      color: white;
      cursor: pointer;
      height: 25px;
    }

    .submit {
      text-align: center;
      height: 40px;
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1e90ff;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #1086f9;
        transition: background-color 200ms ease-in-out;
      }
    }

    .header {
      font-size: 45px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: 'Audiowide', cursive;
      height: 13vh;
      background-color: #1e90ff;
      @media screen and (max-width: 479px) {
        height: 10vh;
        font-size: 30px;
      }
    }
    
    .username, .instagram {
      width: 70%;
      height: 40px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      font-size: 20px;
      text-align: center;
      margin-top: -15px;
    }

    label {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      span {
        color: red;
      }
    }
  }
`;
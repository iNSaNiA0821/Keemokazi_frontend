import styled from "styled-components";

export const CourseRoot = styled.div`
  .coursetitle {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    box-shadow: 61px -1px 51px -9px rgba(0, 0, 0, 0.9);
    -webkit-box-shadow: 61px -1px 51px -9px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: 61px -1px 51px -9px rgba(0, 0, 0, 0.9);
    margin-right: 3%;
    @media screen and (max-width: 1000px) {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
      margin-right: 0;
      width: 80%;
    }

    @media screen and (max-width: 550px) {
      width: 90%;
    }

    .course-buttons {
      margin-top: 20px;
      display: flex;

      .cancel {
        background-color: brown;
        cursor: pointer;
        padding: 8px 15px 8px 15px;
        color: white;
        margin-top: 10px;
        font-size: 16px;
        text-align: center;
        margin-left: 5px;
        &:hover {
          background-color: darkred;
          transition: background-color 200ms ease-in-out;
        }
        @media screen and (max-width: 1000px) {
          font-size: 20px;
        }
        @media screen and (max-width: 650px) {
          font-size: 18px;
        }
        @media screen and (max-width: 479px) {
          font-size: 15px;
        }
        @media screen and (max-width: 380px) {
          font-size: 13px;
        }
      }
      .goshop {
        background-color: green;
        padding: 8px 15px 8px 15px;
        color: white;
        margin-top: 10px;
        font-size: 16px;
        text-align: center;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
          background-color: darkgreen;
          transition: background-color 200ms ease-in-out;
        }
        @media screen and (max-width: 1000px) {
          font-size: 20px;
        }
        @media screen and (max-width: 650px) {
          font-size: 18px;
        }
        @media screen and (max-width: 479px) {
          font-size: 15px;
        }
        @media screen and (max-width: 380px) {
          font-size: 13px;
        }
      }
    }
    /* margin: 0 0 20px 0; */
    padding: 40px;
    @media screen and (max-width: 360px) {
      padding: 30px;
    }
    .price {
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      @media screen and (max-width: 1000px) {
        font-size: 50px;
      }
      @media screen and (max-width: 650px) {
        font-size: 40px;
      }
      @media screen and (max-width: 479px) {
        font-size: 35px;
      }
      @media screen and (max-width: 380px) {
        font-size: 30px;
      }
    }
    .content {
      @media screen and (max-width: 1000px) {
        font-size: 30px;
      }
      @media screen and (max-width: 870px) {
        font-size: 25px;
      }
      @media screen and (max-width: 650px) {
        font-size: 23px;
      }
      @media screen and (max-width: 479px) {
        font-size: 20px;
      }
      @media screen and (max-width: 400px) {
        font-size: 18px;
      }
      @media screen and (max-width: 360px) {
        font-size: 16px;
      }
    }
    .logo {
      margin-left: auto;
      margin-right: auto;
      @media screen and (max-width: 1000px) {
        width: 70%;
      }
      @media screen and (max-width: 650px) {
        width: 350px;
      }
      @media screen and (max-width: 500px) {
        width: 300px;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 479px) {
      font-size: 16px;
    }
  }
  .refund {
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    @media screen and (max-width: 479px) {
      font-size: 13px;
    }
  }
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
    .main-group {
      overflow-y: auto;
    }
    border-radius: 25px;
    -webkit-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    box-shadow: 0px 5px 48px -5px rgba(0, 0, 0, 1);
    padding: 50px;
    display: grid;
    width: 40%;
    /* margin-left: auto;
    margin-right: auto; */
    margin-left: 3%;
    grid-auto-columns: 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    /* PayPal & Credit Card */
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .main-logo {
      @media screen and (max-width: 430px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media screen and (max-width: 1000px) {
      margin-left: 0;
      margin-top: 30px;
      width: 600px;
    }
    @media screen and (max-width: 650px) {
      margin: 0 20px 0 20px;
    }
    @media screen and (max-width: 430px) {
      width: 90%;
      padding: 26px;
    }
    .cancel {
      height: 40px;
      border: none;
      background-color: brown;
      color: white;
      border-radius: 20px;
      font-size: 20px;
      width: 100%;
      cursor: pointer;
      margin-top: 20px;
      &:hover {
        background-color: darkred;
        transition: background-color 200ms ease-in-out;
      }
      @media screen and (max-width: 479px) {
        font-size: 17px;
        height: 35px;
      }
      @media screen and (max-width: 320px) {
        height: 30px;
        font-size: 15px;
      }
    }
    .crypto {
      height: 50px;
      border: none;
      background-color: green;
      color: white;
      border-radius: 5px;
      font-size: 20px;
      width: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: darkgreen;
      }
      @media screen and (max-width: 479px) {
        font-size: 17px;
        height: 35px;
      }
      @media screen and (max-width: 320px) {
        height: 30px;
        font-size: 15px;
      }
      img {
        width: 30px;
      }
    }
    img {
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

import styled from "styled-components";

export const NFTCollectionContainer = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    .nfts-head-image {
        margin-right: 10px;
        margin-left: 10px;
        align-self: center;
        -webkit-box-flex: 0;
        flex: 0 0 auto;
        border-radius: 20px;
        display: inline-block;
        max-width: 100%;
        vertical-align: middle;
        @media screen and (max-width: 767px) {
            width: 64px;
        }
    }
    .nfts-badge.nfts-color-red {
        background-image: linear-gradient(180deg, #ea554f, #cc4a45);
        box-shadow: inset 0 3px 0 0 rgb(0 0 0 / 16%), 0 4px 8px 0 rgb(0 0 0 / 16%);
        transform: rotate(-3deg);
    }
    .nfts-badge {
        display: flex;
        padding: 1rem 1.5rem;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 200px;
        color: #fff;
        .heading-xlarge {
            font-size: 3rem;
            line-height: 1.2;
            font-family: Futura maxi cg,sans-serif;
            font-weight: 700;
        }
    }
`;
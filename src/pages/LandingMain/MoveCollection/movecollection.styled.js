import styled from "styled-components";

export const MovecllectionContainer = styled.div`
    display: block;
`;

export const SelectNFTs = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
`

export const NFTComponent = styled.div`
    position: relative;
    display: grid;
    overflow: hidden;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    .nfts-row {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        .nfts-head-image {
            margin-right: 10px;
            margin-left: 10px;
            align-self: center;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            border-radius: 20px;
            @media screen and (max-width: 767px) {
                width: 64px;
            }
        }
        img {
            display: inline-block;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
            @media screen and (max-width: 767px) {
                width: 64px;
            }
        }
        .nfts-badge.nfts-color-red {
            background-image: linear-gradient(180deg, #ea554f, #cc4a45);
            box-shadow: inset 0 3px 0 0 rgb(0 0 0 / 16%), 0 4px 8px 0 rgb(0 0 0 / 16%);
            transform: rotate(-3deg);
            .heading-xlarge {
                @media screen and (max-width: 991px) {
                    font-size: 2.75rem;
                }
                @media screen and (max-width: 767px) {
                    font-size: 1.5rem;
                }
                font-family: Futura maxi cg,sans-serif;
                font-size: 3rem;
                line-height: 1.2;
                font-weight: 700;
            }
        }
        html.w-mod-touch * {
            background-attachment: scroll !important;
        }
        .nfts-badge {
            display: flex;
            padding: 1rem 1.5rem;
            -webkit-box-align: center;
            align-items: center;
            border-radius: 200px;
            color: #fff;
            @media screen and (max-width: 767px) {
                padding: 0.5rem 0.75rem;
            }
        }
        .nfts-badge.nfts-color-turquoise {
            background-image: linear-gradient(180deg, #056370, #044852);
            box-shadow: inset 0 3px 0 0 rgb(0 0 0 / 16%), 0 4px 8px 0 rgb(0 0 0 / 16%);
            transform: rotate(3deg);
            .heading-xlarge {
                font-size: 3rem;
                line-height: 1.2;
                font-weight: 700;
                font-family: Futura maxi cg,sans-serif;
                @media screen and (max-width: 991px) {
                    font-size: 2.75rem;
                }
                @media screen and (max-width: 767px) {
                    font-size: 1.5rem;
                }
            }
        }
        .nfts-badge.nfts-color-purple {
            background-image: linear-gradient(180deg, #613a8e, #4c2e70);
            box-shadow: inset 0 3px 0 0 rgb(0 0 0 / 16%), 0 4px 8px 0 rgb(0 0 0 / 16%);
            transform: rotate(-3deg);
            .heading-xlarge {
                @media screen and (max-width: 991px) {
                    font-size: 2.75rem;
                }
                @media screen and (max-width: 767px) {
                    font-size: 1.5rem;
                }
                font-family: Futura maxi cg,sans-serif;
                font-size: 3rem;
                line-height: 1.2;
                font-weight: 700;
            }
        }
    }
`
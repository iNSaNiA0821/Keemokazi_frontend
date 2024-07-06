import React from "react";

// @import styles
import {
    MovecllectionContainer,
    SelectNFTs,
    NFTComponent
} from "./movecollection.styled";

const MoveCollectionRoot = () => {
    // var firstline = document.querySelector(".firstline");
    // var thirdline = document.querySelector(".thirdline");
    var lastScrollTop = 0;
    var marginRight = 0;
    var marginLeft = 0;

    function moveCollection() {
        var ypos2 = window.pageYOffset;
        if (ypos2 < lastScrollTop) {
            marginRight += 5;
            marginLeft += 5;
            var first = document.querySelector(".firstline");
            var third = document.querySelector(".thirdline");
            if (first !== null && third !== null) {
                document.querySelector(".firstline").style.marginRight = marginRight + "px";
                document.querySelector(".thirdline").style.marginLeft = marginLeft + "px";
            }
        }
        else {
            marginRight -= 5;
            marginLeft -= 5;
            first = document.querySelector(".firstline");
            third = document.querySelector(".thirdline");
            if (first !== null && third !== null) {
                document.querySelector(".firstline").style.marginRight = marginRight + "px";
                document.querySelector(".thirdline").style.marginLeft = marginLeft + "px";
            }
        }
        lastScrollTop = ypos2;
    };

    window.onscroll = moveCollection;

    return (
        <MovecllectionContainer id="MoveCollection">
            <SelectNFTs>
                <NFTComponent>
                    <div className="nfts-row firstline">
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <div className="nfts-badge nfts-color-red">
                            <div className="heading-xlarge">MINT&nbsp;NOW!</div>
                        </div>
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902aa5bfa79abeeacc771_PhotoRoom_20220427_104443%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626902e83aaec40ff3987dd8_PhotoRoom_20220427_104619%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                    </div>
                    <div className="nfts-row">
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <div className="nfts-badge nfts-color-turquoise">
                            <div className="heading-xlarge">STACK!</div>
                        </div>
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269049c723aa4a8fc5cdab9_PhotoRoom_20220427_105334%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626904c654673e2be87b1e54_PhotoRoom_20220427_105410%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                    </div>
                    <div className="nfts-row thirdline">
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc08d1e8652c_Head%20Legendary%202.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc77cfe86535_Head%20Legendary%201.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc5515e86542_Head%20Legendary%2012.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc702de8652e_Head%20Legendary%203.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc9c47e86536_Head%20Legendary%2010.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc2312e86534_Head%20Legendary%204.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6268ecc07126fc3178e8653c_Head%20Legendary%209.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <div className="nfts-badge nfts-color-purple">
                            <div className="heading-xlarge">COLLECT!</div>
                        </div>
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" sizes="(max-width: 767px) 64px, 102.5px" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/6269055281ff4cda9a0e3040_PhotoRoom_20220427_105614%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                        <img draggable="false" src="https://uploads-ssl.webflow.com/6268ecc07126fc49d9e864b0/626905587f2dcdb21f8b0341_PhotoRoom_20220427_105632%20AM.png" width="102.5" alt="" className="nfts-head-image" />
                    </div>
                </NFTComponent>
            </SelectNFTs>
        </MovecllectionContainer>
    );
};

export default MoveCollectionRoot;

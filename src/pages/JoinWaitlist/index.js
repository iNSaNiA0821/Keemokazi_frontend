import React from "react";
import { Link } from "react-router-dom";

// @import styles
import {
    JoinWaitlistContainer,
    PagePadding,
    ContainerLarge,
    PaddingVertical,
    MainText,
    MediumText
} from "./joinwaitlist.styled";

const JoinWaitlist = () => {
    return (
        <JoinWaitlistContainer id="JoinWaitlist">
            <PagePadding>
                <ContainerLarge>
                    <PaddingVertical>
                        <MainText>
                            Join our &nbsp;
                            <Link to="/waitlist"><MediumText>Waitlist!</MediumText></Link>
                        </MainText>
                    </PaddingVertical>
                </ContainerLarge>
            </PagePadding>
        </JoinWaitlistContainer>
    );
};

export default JoinWaitlist;

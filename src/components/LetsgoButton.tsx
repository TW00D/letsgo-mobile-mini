import React, { useState } from "react";
import styled from "styled-components/native"
import { PaddingView } from "../utils/PaddingView";
import { colors } from "../styles/colors";

type LetsgoButtonType = {
    title: string,
    isAbled: boolean,
    onPress: () => void
}

export const LetsgoButton = (props: LetsgoButtonType) => {

    const LetsgoButtonFrame = styled.TouchableOpacity`
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        width: 100%;
        height: 56px;
        border-radius: 10px;
        background: ${props.isAbled ? colors.primary : colors.primary_disabled};
        font-size: 14px;
        font-weight: bold;
        font-family: 'Pretendard';
        color: ${colors.white};
    `;

    return (
        <PaddingView>
            <LetsgoButtonFrame onPress={props.onPress} disabled={props.isAbled ? false : true}>
                <ButtonText>{props.title}</ButtonText>
            </LetsgoButtonFrame>
        </PaddingView>
    );
}



const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    font-family: 'Pretendard';
    color: ${colors.white};
`;

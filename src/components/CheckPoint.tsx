import React from "react";
import styled from "styled-components/native";
import { colors } from "../assets/colors/colors";

type CheckPointType = {
    title: string,
    isOkay: boolean
}

const CheckPoint = (props: CheckPointType) => {
    const okayIconPath = '../assets/images/ic_check_ok.png'
    const notOkayIconPath = '../assets/images/ic_check_notok.png'

    const Title = styled.Text`
        font-size: 14px;
        color: ${props.isOkay ? colors.primary : colors.hint_gray_300};
    `

    return (
        <Frame>
            <CheckIcon source={
                props.isOkay ? require(okayIconPath) : require(notOkayIconPath)
            }/>
            <Title>{props.title}</Title>
        </Frame>
    );
}

const Frame = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
`

const CheckIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin-right: 4px;
`



export default CheckPoint;
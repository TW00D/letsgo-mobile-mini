import { View } from "react-native";
import styled from "styled-components/native"

type LetsgoButtonType = {
    title: string,
    onPress: () => void
}

export const LetsgoButton = (props: LetsgoButtonType) => {
    return (
        <PaddingView>
            <LetsgoButtonFrame onPress={props.onPress}>
                <ButtonText>{props.title}</ButtonText>
            </LetsgoButtonFrame>
        </PaddingView>
    );
}

const PaddingView = styled.View`
    padding-left: 16;
    padding-right: 16;
`;

const LetsgoButtonFrame = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    border-radius: 10px;
    background: #AB23F6;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #FFFFFF;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    font-family: 'Pretendard';
    color: #FFFFFF;
`;



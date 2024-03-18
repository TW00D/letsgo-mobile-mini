import styled from "styled-components/native"
import { PaddingView } from "../utils/PaddingView";
import { colors } from "../styles/colors";
import { Image, TouchableOpacity } from "react-native";

type LetsgoTopBarType = {
    title: string,
    onPress: () => void
}

const LetsgoTopBar = (props: LetsgoTopBarType) => {
    return (
        <Frame>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    source={require('../assets/images/arrow-left.png')}
                    style={{ width: 25, height: 25}}
                />
            </TouchableOpacity>
            <Spacer/>
            <Title>{props.title}</Title>
            <Spacer/>
            <Block/>
        </Frame>
    );
}

const Frame = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    border-radius: 10px;
    background: ${colors.white};
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
`;

const Title = styled.Text`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: ${colors.text_gray_900};
`;

const Spacer = styled.View`
    flex: 1;
`

const Block = styled.View`
    width: 25px;
`

export default LetsgoTopBar;
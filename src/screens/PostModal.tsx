import { View } from "react-native";
import { Text } from "react-native-svg";
import styled from "styled-components/native";
import ModalTopBar from "../components/topbar/ModalTopBar";
import { colors } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import PostButton from "../components/button/PostButton";
import { Spacer } from "../utils/UtilViews";

const PostModal = () => {
    return (
        <Background>
            <ModalTopBar/>
            <Spacer/>
            <ButtonFrame>
                <Spacer/>
                <PostButton isPostabled={false}/>
            </ButtonFrame>
            
        </Background>
    );
}

const Background = styled.View`
    flex: 1;
    background-color: ${colors.white};
`

const Title = styled.Text`
    font-size: 18px;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const ButtonFrame = styled.View`
    flex-direction: row;
    height: 72px;
    justify-content: center;
    margin-right: 16px;
`

export default PostModal;
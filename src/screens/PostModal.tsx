import { View } from "react-native";
import { Text } from "react-native-svg";
import styled from "styled-components/native";
import ModalTopBar from "../components/topbar/ModalTopBar";
import { colors } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

const PostModal = () => {
    return (
        <Background>
            <ModalTopBar/>
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

export default PostModal;
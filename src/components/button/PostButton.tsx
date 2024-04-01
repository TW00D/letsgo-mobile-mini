import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../assets/colors/colors";

type PostButtonType = {
    isPostabled: boolean
    onPress: () => void
}

const PostButton = ({isPostabled, onPress}: PostButtonType) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isPostabled ? false : true}>
            <Frame isPostabled={isPostabled}>
                <Name isPostabled={isPostabled}>게시</Name>
            </Frame>
        </TouchableOpacity>
    );
}

const Frame = styled.View<{isPostabled: boolean}>`
    background-color: ${({isPostabled}) => isPostabled ? colors.text_gray_900 : colors.line_gray_50};
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    width: 70px;
    height: 40px;
`

const Name = styled.Text<{isPostabled: boolean}>`
    color: ${({isPostabled}) => isPostabled ? colors.white : colors.hint_gray_300};
    font-size: 16px;
`


export default PostButton;
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../assets/colors/colors";

type PostButtonType = {
    isPostabled: boolean
}

const PostButton = (props: PostButtonType) => {
    const Frame = styled.View`
        background-color: ${props.isPostabled ? colors.text_gray_900 : colors.line_gray_50};
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        width: 70px;
        height: 40px;
    `

    const Name = styled.Text`
        color: ${props.isPostabled ? colors.white : colors.hint_gray_300};
        font-size: 16px;
    `

    return (
        <TouchableOpacity disabled={props.isPostabled ? false : true}>
            <Frame>
                <Name>게시</Name>
            </Frame>
        </TouchableOpacity>
    );
}



export default PostButton;
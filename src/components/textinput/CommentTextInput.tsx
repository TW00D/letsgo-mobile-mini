import styled from "styled-components/native";
import { colors } from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native";
import { PaddingView } from "../../utils/PaddingView";

type CommentTextInputType = {
    onPress: () => void
}

const CommentTextInput = ({onPress}: CommentTextInputType) => {
    const commentIconPath = '../../assets/icon_comment.png'

    const Frame = styled.View`
        flex-direction: row;
        height: 45px;
        width: 100%;
        margin-bottom: 16px;
        background-color: ${colors.line_gray_50};
        border-radius: 10px;
        align-items: center;
    `

    const Icon = styled.Image`
        height: 20px;
        width: 20px;
        margin-left: 16px;
        margin-right: 4px;
    `
    
    const PlaceHolderText = styled.Text`
        margin-left: 8px;
        font-family: 'pretendard_regular';
        font-size: 16px;
        color: ${colors.hint_gray_300};
    `

    return(
        <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
            <PaddingView>
                <Frame>
                    <Icon source={require(commentIconPath)}/>
                    <PlaceHolderText>댓글을 입력해주세요..</PlaceHolderText>
                    {/* <TextInput placeholderTextColor={colors.hint_gray_300} style={{width:'94%', fontFamily:'pretendard_regular', fontSize:16, color:colors.text_gray_900}} value={""} placeholder="댓글을 입력하세요" onChangeText={(text) => {setInputText(text)}}/> */}
                </Frame>
            </PaddingView>
        </TouchableOpacity>
    );
}

export default CommentTextInput;
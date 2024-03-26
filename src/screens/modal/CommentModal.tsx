import React, { useState } from "react";
import styled from "styled-components/native";
import ModalTopBar from "../../components/topbar/ModalTopBar";
import { colors } from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import PostButton from "../../components/button/PostButton";
import { Spacer } from "../../utils/UtilViews";
import TitleTextInput from "../../components/textinput/TitleTextInput";
import ContentTextInput from "../../components/textinput/ContentTextInput";
import PostingThemeList from "../../components/PostingThemeList";
import { Text, View } from "react-native";

const CommentModal = () => {
    const profileImagePath = '../../assets/images/img_profile.png'
    const [ content, setContent ] = useState('')

    return (
        <Background>
            <ModalTopBar title="댓글 작성"/>
            <View style={{marginTop: 16, marginStart: 16, marginEnd: 16, flexDirection: 'row'}}>
                <ProfileImage source={require(profileImagePath)}/>
                <TextContainer>
                    <UserNick>장충동왕족발보쌈</UserNick>
                    <View style={{height: 8}}/>
                    <ContentTextInput
                        value={content}
                        setValue={setContent} 
                        placeholder="욕설, 비방 등 상대방을 불쾌하게 하는 댓글은 작성하지 말아주세요. 신고를 당하면 커뮤니티 이용이 제한될 수 있어요."/>
                </TextContainer>
            </View>
            

            <Spacer/>
            
            <ButtonFrame>
                <Spacer/>
                <PostButton isPostabled={(content.length > 0)}/>
            </ButtonFrame>

            
        </Background>
    );
}

const Background = styled.View`
    flex: 1;
    background-color: ${colors.white};
`

const ButtonFrame = styled.View`
    flex-direction: row;
    height: 72px;
    justify-content: center;
    margin-right: 16px;
`

const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;
`

const TextContainer = styled.View`
    margin-top: 3px;
    margin-left: 12px;
    margin-right: 40px;
`

const UserNick = styled.Text`
    font-size: 16px;
    color: ${colors.text_gray_900};
`

export default CommentModal;
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
import { PaddingView } from "../../utils/PaddingView";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const PostModal = () => {
    const [ theme, setTheme ] = useState('패션')
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    return (
        <Background>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{flex: 1}}>
                <ModalTopBar title="게시물 작성"/>
                <ScrollView>
                    <PostingThemeList selected={theme} setSelect={setTheme}/>
                    <TitleTextInput 
                        value={title}
                        setValue={setTitle} 
                        placeholder={`(${theme}) 제목을 입력하세요`}/>
                    <Line/>
                    <View style={{height: 8}}/>
                    <PaddingView>
                        <ContentTextInput 
                            value={content}
                            setValue={setContent} 
                            placeholder="욕설, 비방 등 상대방을 불쾌하게 하는 게시물은 게시하지 말아주세요. 신고를 당하면 커뮤니티 이용이 제한될 수 있어요."/>
                    </PaddingView>
                </ScrollView>
                
                <Spacer/>
                
                <ButtonFrame style={{marginBottom: 50}}>
                    <Spacer/>
                    <PostButton isPostabled={(title.length > 0) && (content.length > 0)}/>
                </ButtonFrame>
            </KeyboardAvoidingView>
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

const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${colors.line_gray_50};
    margin-top: 16px;
    margin-left: 16px;
`

export default PostModal;
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
import { KeyboardAvoidingView, PermissionsAndroid, Platform, ScrollView, View } from "react-native";
import { createPost } from "../../services/apis/PostApi";
import GalleryIcon from "../../assets/icons/GalleryIcon";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Permissions from 'react-native-permissions';

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
                
                {/** Button Frame */}
                <ButtonFrame style={{marginBottom: 69}}>
                    <GalleryIcon onPress={() => {
                        console.log("onPress : Gallery Icon");
                        // Permissions.check('camera').then(response => {
                        //     if (response === 'authorized') {
                        //         // Permission is already granted
                        //     } else {
                        //         Permissions.request('camera').then(response => {
                        //             if (response === 'authorized') {
                        //             // Permission is now granted
                        //             } else {
                        //             // Permission was denied
                        //             }
                        //         });
                        //     }
                        // });
                        // openImagePicker()
                    }}/>
                    <Spacer/>
                    <PostButton isPostabled={(title.length > 0) && (content.length > 0)} onPress={() => {
                        console.log("click button!");
                        createPost({category: 1, title: "title", content: "content", picture: "picture"})
                    }}/>
                </ButtonFrame>
            </KeyboardAvoidingView>
        </Background>
    );
}

// const openImagePicker = () => {
//     const options = {
//         mediaType: 'photo' as any,
//         includeBase64: false,
//         maxHeight: 2000,
//         maxWidth: 2000,
//     };

//     launchImageLibrary(options, (response) => {
//         if (response.didCancel) {
//             console.log('User cancelled image picker');
//         } else if (response.error) {
//             console.log('Image picker error: ', response.error);
//         } else {
//             // let imageUri = response.uri || response.assets?.[0]?.uri;
//             // setSelectedImage(imageUri);
//         }
//     });
// };

export default PostModal;

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
    align-items: center;
    margin-right: 16px;
    margin-left: 24px;
`

const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${colors.line_gray_50};
    margin-top: 16px;
    margin-left: 16px;
`
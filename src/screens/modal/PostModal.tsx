import React, { useEffect, useState } from "react";
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
import { Image, KeyboardAvoidingView, PermissionsAndroid, Platform, ScrollView, View } from "react-native";
import { createPost } from "../../services/apis/PostApi";
import GalleryIcon from "../../assets/icons/GalleryIcon";
import Permissions from 'react-native-permissions';
import ImageCropPicker from 'react-native-image-crop-picker';
import { CategoryType, getCategoryList } from "../../services/apis/CommunityApi";
import { CategoryButtonType } from "../../components/CategorySelector";
import { getImage } from "../CommunityScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCategory } from "../../redux/slices/CategorySlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParamList } from "../../navigation/NavigationParamList";


const PostModal = () => {ImageCropPicker
    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>(); 

    // const category = useSelector((state : RootState ) => state.categorySlice.category)

    // const [ theme, setTheme ] = useState(category.name)
    const [ theme, setTheme ] = useState('전체')
    const [ category, setCategory ] = useState(1)
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ imageSource, setImageSource ] = useState<string | undefined>('')
    
    // 갤러리 접근 코드 -> PROBLEM : 앱이 꺼짐 (근데 왜 꺼지는 지 모르겠음..)
    const getPhotos = async () => {
        ImageCropPicker.openPicker({
            multiple: false,
            mediaType: 'photo',
            includeBase64: true,
            includeExif: true,
        }).then(res => {
            console.log("success : " + res.sourceURL);
            setImageSource(res.sourceURL?.toString())
        }).catch(err => {
            console.error("failed : " + err);
        })
    };

    // const path = 'file:///Users/stev3j/Library/Developer/CoreSimulator/Devices/00551580-CEB7-4407-9D96-8E53649032BC/data/Media/DCIM/100APPLE/IMG_0001.JPG'

    // console.log("category : "+category.id);

    return (
        <Background>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{flex: 1}}>
                <ModalTopBar title="게시물 작성"/>
                <Image source={{uri : imageSource}} />
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
                        getPhotos()
                    }}/>
                    <Spacer/>
                    <PostButton isPostabled={(title.length > 0) && (content.length > 0)} onPress={() => {
                        console.log("click button!");
                        if (theme == "애니") setCategory(2)
                        else if (theme == "연애") setCategory(3)
                        else if (theme == "운동") setCategory(4)
                        else if (theme == "패션") setCategory(5)
                        else if (theme == "게임") setCategory(6)
                        else if (theme == "공부") setCategory(7)
                        else if (theme == "덕질") setCategory(8)
                        createPost({category: category, title: title, content: content, picture: imageSource}, navigation)
                    }}/>
                </ButtonFrame>
            </KeyboardAvoidingView>
        </Background>
    );
}

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
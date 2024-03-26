import { Alert, Image, SafeAreaView, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Background, Spacer } from "../utils/UtilViews"
import { colors } from "../assets/colors/colors"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigationParamList } from "../navigation/NavigationParamList"
import EncryptedStorage from "react-native-encrypted-storage"

export const ProfileScreen = () => {
    const navigation = useNavigation<StackNavigationProp<NavigationParamList>>(); 

    const profileImagePath = '../assets/images/img_profile.png'
    const cautionIconPath = '../assets/images/img_caution.png'

    return (
        <Background>
            <TopbarContainer>
                <Spacer/>
                <LoginoutButton onPress={() => {
                    logoutAlert(navigation)
                }}/>
            </TopbarContainer>
            <ProfileContainer>
                <ProfileImage source={require(profileImagePath)}/>
                <UserName>장충동왕족발보쌈</UserName>
            </ProfileContainer>
            <CautionView>
                <CautionIcon source={require(cautionIconPath)}/>
                <CautionTitle>개발 중인 기능이에요</CautionTitle>
                <CautionSubTitle>조금만 기다려주세요...</CautionSubTitle>
            </CautionView>
        </Background>
    )
}

const logoutAlert = (navigation: any) => {
    Alert.alert(
        "정말 로그아웃 하시겠어요?",
        "임시", [{
            text: "아니요",
            style: "cancel"
        }, {
            text: "네",
            onPress: () => {
                EncryptedStorage.removeItem('accessToken')
                EncryptedStorage.removeItem('refreshToken')
                navigation.navigate('Start')
            },
        },
        ], { cancelable: false }
    );
}

type LogoutButtonType = {
    onPress: () => void
}

const LoginoutButton = ({onPress}: LogoutButtonType) => {
    const logoutIconPath = '../assets/images/ic_logout.png'

    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={{width: 25, height: 25}} source={require(logoutIconPath)}/>
        </TouchableOpacity>
    );
}

const TopbarContainer = styled.View`
    flex-direction: row;
    height: 45px;
    justify-content: center;
    margin-right: 16px;
`
const ProfileContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
`

const ProfileImage = styled.Image`
    width: 100px;
    height: 100px;
`

const UserName = styled.Text`
    font-size: 24px;
    color: ${colors.text_gray_900};
    margin-left: 16px;
`

const CautionView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const CautionIcon = styled.Image`
    width: 40px;
    height: 40px;
`

const CautionTitle = styled.Text`
    font-size: 16px;
    color: ${colors.hint_gray_300};
    margin-top: 10px;
`

const CautionSubTitle = styled.Text`
    font-size: 10px;
    color: ${colors.hint_gray_300};
    margin-top: 5px;
`
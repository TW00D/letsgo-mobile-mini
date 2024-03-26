import React, { useEffect } from "react"
import { Image } from "react-native"
import styled from "styled-components/native"
import { LetsgoButton } from "../../components/button/LetsgoButton"
import { colors } from "../../styles/colors"
import EncryptedStorage from "react-native-encrypted-storage"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/core"

export const StartScreen = () => {
    const navigation = useNavigation(); // 풀 받은 뒤, 아래로 변경할 예정
    // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); 

    useEffect(() => {
        EncryptedStorage.getItem('accessToken')
            .then(_accessToken => {
                if (_accessToken != null) {
                    navigation.navigate('BottomNavigationContainer' as never)
                }
            })
    }, []);

    return (
        <Background>
            <Spacer/>
                <MainIcon/>
            <Spacer/>
            <LetsgoButton title="시작하기" isAbled={true} onPress={() => {
                navigation.navigate("SignupId" as never)
                
                }}/>
            <ClickFrame onPress={() => {navigation.navigate('Login' as never)}}>
                <SubText>이미 계정이 있나요?</SubText>
                <MainSubText>로그인</MainSubText>
            </ClickFrame>
        </Background>
    );
}

const MainIcon = () => {
    return (
        <IconBackground>
            <Image
                source={require('../../assets/images/ic_big_letsgo.png')}
                style={{ width: 94, height: 87, marginBottom: 10, marginLeft: 10}}
            />
            <Image
                source={require('../../assets/images/ic_letsgo_text.png')}
                style={{ width: 119.4, height: 43.85}}
            />
        </IconBackground>
    );
}

const IconBackground = styled.View`
    align-items: center;
    flex: 1;
`

const Background = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white};
`

const Spacer = styled.View`
    flex: 1;
`

const ClickFrame = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
`

const SubText = styled.Text`
    font-weight: 400;
    font-size: 16px;
    margin-right: 4px;
    color: ${colors.hint_gray_300};
`

const MainSubText = styled.Text`
    font-weight: 700;
    font-size: 16px;
    margin-top: 2px;
    color: ${colors.primary};
`
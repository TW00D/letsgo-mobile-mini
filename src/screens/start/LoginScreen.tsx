import React, { useState } from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { Background, Spacer } from "../../utils/UtilViews"
import LetsgoTopBar from "../../components/LetsgoTopBar"
import { colors } from "../../styles/colors"
import { LetsgoTextInput } from "../../components/LetsgoTextInput"
import { LetsgoButton } from "../../components/LetsgoButton"

interface LoginScreenProps {
    navigation : any
}

export const LoginScreen : React.FC<LoginScreenProps> = ({navigation}) => {
    const [ isAbled, setAbled ] = useState(true) // 임시
    const [ id, setId ] = useState('')
    const [ pwd, setPwd ] = useState('')

    return (
        <Background>
            <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
            <Title>로그인해주세요</Title>
            <LetsgoTextInput label="아이디" value={id} setValue={setId}/>
            <View style={{height: 35}}/>
            <LetsgoTextInput label="비밀번호" value={pwd} setValue={setPwd}/>
            <Spacer/>
            <LetsgoButton title="레츠고!" isAbled={isAbled} onPress={() => {navigation.navigate('BottomNavigationContainer')}}/>
        </Background>
    );
}

const Title = styled.Text`
    margin-top: 26;
    margin-bottom: 40;
    margin-left: 16;
    font-size: 26;
    font-weight: 500;
    font-family: 'Pretendard';
    color: ${colors.text_gray_900};
`

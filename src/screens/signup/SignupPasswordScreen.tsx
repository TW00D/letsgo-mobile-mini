import React, { useState } from "react"
import { SafeAreaView } from "react-native"
import styled from "styled-components/native"
import LetsgoTopBar from "../../components/LetsgoTopBar"
import { colors } from "../../styles/colors"
import { LetsgoTextInput } from "../../components/LetsgoTextInput"
import { LetsgoButton } from "../../components/LetsgoButton"
import { Background } from "../../utils/UtilViews"

interface SignupPasswordScreenProps {
    navigation : any
}

const SignupPasswordScreen: React.FC<SignupPasswordScreenProps> = ({navigation}) => {
    const [ isAbled, setAbled ] = useState(true) // 임시
    const [ pwd, setPwd ] = useState('')

    return (
        <Background>
            <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
            <Title>희망하는 비밀번호를 입력해주세요</Title>
            <LetsgoTextInput label="비밀번호" value={pwd} setValue={setPwd} isSecure={false}/>
            <Spacer/>
            <LetsgoButton title="로그인" isAbled={isAbled} onPress={() => {navigation.navigate('SignupName')}}/>
        </Background>
    );
}

const Title = styled.Text`
    margin-top: 26px;
    margin-bottom: 40px;
    margin-left: 16px;
    font-size: 26px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: ${colors.text_gray_900};
`

const Spacer = styled.View`
    flex: 1;
`

export default SignupPasswordScreen;
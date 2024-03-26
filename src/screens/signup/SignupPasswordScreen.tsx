import React, { useState } from "react"
import { SafeAreaView, View } from "react-native"
import styled from "styled-components/native"
import LetsgoTopBar from "../../components/topbar/LetsgoTopBar"
import { colors } from "../../assets/colors/colors";
import { LetsgoTextInput } from "../../components/textinput/LetsgoTextInput"
import { LetsgoButton } from "../../components/button/LetsgoButton"
import { Background } from "../../utils/UtilViews"
import { register } from "../../services/AuthApi"
import CheckPoint from "../../components/CheckPoint"

interface SignupPasswordScreenProps {
    route: any,
    navigation : any
}

const SignupPasswordScreen: React.FC<SignupPasswordScreenProps> = ({route, navigation}) => {
    const [ isOkay, setOkay ] = useState(false)
    const [ pwd, setPwd ] = useState('')

    return (
        <Background>
            <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
            <Title>희망하는 비밀번호를 입력해주세요</Title>
            <LetsgoTextInput 
                label="비밀번호" 
                value={pwd} 
                setValue={setPwd}
                onChange={text => {
                    if (text.length >= 8 && text.length <= 32) setOkay(true)
                    else setOkay(false)
                }}/>
                <View style={{height: 8}}/>
                <CheckPoint title="8 ~ 32 자리" isOkay={isOkay}/>
                {/* <View style={{height: 4}}/>
                <CheckPoint title="대문자, 특수문자 1개 이상" isOkay={isOkay}/> */}
            <Spacer/>
            <LetsgoButton title="회원가입" isAbled={isOkay} onPress={() => {
                register({username: route.params.id, nickname: route.params.id, password: pwd, image: ''}, navigation)
                }}/>
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
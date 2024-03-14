import React, { useState } from "react"
import styled from "styled-components/native"
import LetsgoTopBar from "../../components/LetsgoTopBar"
import { colors } from "../../styles/colors"
import { LetsgoTextInput } from "../../components/LetsgoTextInput"
import { LetsgoButton } from "../../components/LetsgoButton"

interface SignupIdScreenProps {
    navigation : any
}

const SignupIdScreen: React.FC<SignupIdScreenProps> = ({navigation}) => {
    const [ isAbled, setAbled ] = useState(true) // 임시
    const [ id, setId ] = useState('')

    // if (id.length > 0) {
    //     console.log("길어");
    //     () => setAbled(true)
    // }

    return (
        <Background>
            <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
            <Title>희망하는 아이디를 입력해주세요</Title>
            <LetsgoTextInput label="아이디" value={id}/>
            <Spacer/>
            <LetsgoButton title="다음" isAbled={isAbled} onPress={() => {navigation.navigate('SignupPassword')}}/>
        </Background>
    );
}

const Background = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white};
`

const Title = styled.Text`
    margin-top: 26;
    margin-bottom: 40;
    margin-left: 16;
    font-size: 26;
    font-weight: 500;
    font-family: 'Pretendard';
    color: ${colors.text_gray_900};
`

const Spacer = styled.View`
    flex: 1;
`

export default SignupIdScreen;
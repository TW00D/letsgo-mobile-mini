import React, { useState } from "react"
import styled from "styled-components/native"
import LetsgoTopBar from "../../components/LetsgoTopBar"
import { colors } from "../../styles/colors"
import { LetsgoTextInput } from "../../components/LetsgoTextInput"
import { LetsgoButton } from "../../components/LetsgoButton"
import { Background, Spacer } from "../../utils/UtilViews"

interface SignupIdScreenProps {
    navigation: any
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
            <LetsgoTextInput label="아이디" value={id} setValue={setId} isSecure={false}/>
            <Spacer/>
            <LetsgoButton title="다음" isAbled={isAbled} onPress={() => {navigation.navigate('SignupPassword', {id: id})}}/>
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



export default SignupIdScreen;
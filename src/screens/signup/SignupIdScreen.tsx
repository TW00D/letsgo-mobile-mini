import React, { useState } from "react"
import styled from "styled-components/native"
import LetsgoTopBar from "../../components/LetsgoTopBar"
import { colors } from "../../styles/colors"
import { LetsgoTextInput } from "../../components/LetsgoTextInput"
import { LetsgoButton } from "../../components/LetsgoButton"
import { Background, Spacer } from "../../utils/UtilViews"
import CheckPoint from "../../components/CheckPoint"
import { View } from "react-native"

interface SignupIdScreenProps {
    navigation: any
}

const SignupIdScreen: React.FC<SignupIdScreenProps> = ({navigation}) => {
    const [ isOkay, setOkay ] = useState(false)
    const [ id, setId ] = useState('')

    // if (id.length > 0) {
    //     console.log("길어");
    //     () => setAbled(true)
    // }

    return (
        <Background>
            <LetsgoTopBar title="" onPress={() => {navigation.goBack()}}/>
            <Title>희망하는 아이디를 입력해주세요</Title>
            <LetsgoTextInput 
                label="아이디" 
                value={id} 
                setValue={setId} 
                isSecure={false} 
                onChange={() => {
                    if (id.length >= 8 && id.length <= 20) setOkay(true)
                    else setOkay(false)
                }}/>
            <View style={{height: 8}}/>
            <CheckPoint title="8 ~ 20 자리" isOkay={isOkay}/>
            <Spacer/>
            <LetsgoButton title="다음" isAbled={isOkay} onPress={() => {navigation.navigate('SignupPassword', {id: id})}}/>
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